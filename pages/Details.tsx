import { View, Text, Dimensions } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StackScreenProps } from "@react-navigation/stack";

import React, { useEffect } from "react";
import { Headline, Wrapper, Image } from "./Details.styles";
import { SharedElement } from "react-navigation-shared-element";

type RootStackParamList = {
  Details: { item: any; navigation: any; route: any };
};

type Props = StackScreenProps<RootStackParamList, "Details">;

const Details = ({ navigation, route }: Props) => {
  const { width } = Dimensions.get("window");
  const {
    params: {
      item,
      item: {
        attributes: { petName, uri, identifierId, headline },
      },
    },
  } = route;

  console.log(item);
  return (
    <Wrapper>
      <SharedElement id={identifierId}>
        <Image width={width} source={{ uri }} />
      </SharedElement>
      <Text onPress={() => navigation.goBack()}>{item.imageUrl}</Text>
    </Wrapper>
  );
};

export default Details;
