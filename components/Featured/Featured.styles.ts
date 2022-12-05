import styled, { css } from "styled-components/native";

import { Dimensions } from "react-native";

interface ICategoryItem {
  color: "string";
}

export const Container = styled.View`
  /* background-color: #1c2022; */
  flex: 1;

  margin-bottom: 30;
`;

export const CategoryContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const CategoryItem = styled.TouchableOpacity<ICategoryItem>(
  ({ color }) => css`
    background-color: ${color};
    border-radius: 20;
    padding: 10px;

    flex: 1;
    align-items: center;
    margin-right: 5;
  `
);

export const CategoryText = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 12;
`;

export const SelecteCategoryWrapper = styled.View``;

