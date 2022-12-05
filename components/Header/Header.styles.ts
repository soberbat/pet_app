import styled from "styled-components/native";

import { Dimensions } from "react-native";

export const Container = styled.View`
  flex: 0.7;
`;

interface ContainerProps {
  width: number;
}

export const ScrollContainer = styled.View<ContainerProps>`
  background-color: #e7eaee;
  height: 200px;
  width: ${({ width }) => width * 0.8};
  border-radius: 10;
`;

export const FlatListContainer = styled.View`
  flex: 1;
`;

export const Seperator = styled.View`
  width: 30px;
`;

export const HeaderText = styled.Text`
  font-weight: 700;
  font-size: 35;
  color: black;
  margin-bottom: 10;
`;
