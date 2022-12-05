import { useNavigation } from "@react-navigation/native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationProp } from "@react-navigation/native";

import React, { useEffect, useState, useRef } from "react";
import { Animated, Text, TouchableOpacity } from "react-native";

import {
  SelecteCategoryItem,
  Image,
  Overlay,
  ItemHeadline,
} from "./SelectedCategory.styles";
import { SharedElement } from "react-navigation-shared-element";

interface ISelectedCategory {
  type: number;
  data: any;
}
const SelectedCategory = ({ type, data }: ISelectedCategory) => {
  const [whichCategory, setWhichCategory] = useState<string>("cats");

  const navigation = useNavigation();

  const resolveCategoryType = (type: number) => {
    type === 0 ? setWhichCategory("cats") : setWhichCategory("dogs");
    type === 2 && setWhichCategory("others");
  };

  const onLoad = (textRef: any, imageRef: any) => {
    Animated.timing(imageRef, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(({ finished }) => {
      finished &&
        Animated.timing(textRef, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }).start();
    });
  };

  useEffect(() => {
    resolveCategoryType(type);
  }, [type]);

  return (
    <>
      {data &&
        data.map((item: any, index: number) => {
          const {
            attributes: { petName, uri, identifierId, headline },
          } = item;

          const opacityRef = useRef(new Animated.Value(0)).current;
          const textOpacityRef = useRef(new Animated.Value(0)).current;

          if (petName === whichCategory) {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    "Details" as never,
                    {
                      item,
                    } as never
                  )
                }
                key={identifierId}
              >
                <SelecteCategoryItem>
                  <SharedElement id={identifierId}>
                    <Image
                      onLoad={() => onLoad(textOpacityRef, opacityRef)}
                      source={{ uri }}
                      style={{ opacity: opacityRef }}
                    />
                  </SharedElement>
                  <Overlay>
                    <ItemHeadline style={{ opacity: textOpacityRef }}>
                      {headline}
                    </ItemHeadline>
                  </Overlay>
                </SelecteCategoryItem>
              </TouchableOpacity>
            );
          }
        })}
    </>
  );
};

export default SelectedCategory;
