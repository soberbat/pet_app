import { Animated } from "react-native";
import styled from "styled-components/native";
export const SelecteCategoryItem = styled.View`
  margin-top: 30;
  height: 150;
  background-color: #4f646f;
  border-radius: 10;
  position: relative;
`;

export const Image = styled(Animated.Image)`
  width: 100%;
  height: 100%;
  opacity: 0;
  object-fit: cover;
  border-radius: 10;
`;

export const Overlay = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 10;
  align-items: center;
  justify-content: center;
`;

export const ItemHeadline = styled(Animated.Text)`
  font-size: 20;
  font-weight: 700;
  color: white;
`;
