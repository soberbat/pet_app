import React, { useState } from "react";
import {
  CategoryContainer,
  CategoryItem,
  CategoryText,
  Container,
  SelecteCategoryWrapper,
} from "./Featured.styles";
import { StyleSheet, Text, View } from "react-native";
import SelectedCategory from "../SelectedCategory/SelectedCategory";

const Featured = ({ data }: { data: any }) => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const changeColor = (i: number) => setActiveItem(i);

  return (
    <Container>
      <CategoryContainer>
        {["Cats", "Dogs", "Others"].map((item, i) => (
          <CategoryItem
            key={i}
            color={i === activeItem ? "#141414" : "#E7EAEE"}
            onPress={() => changeColor(i)}
          >
            <CategoryText>{item}</CategoryText>
          </CategoryItem>
        ))}
      </CategoryContainer>

      <SelecteCategoryWrapper>
        <SelectedCategory data={data} type={activeItem} />
      </SelecteCategoryWrapper>
    </Container>
  );
};

export default Featured;
