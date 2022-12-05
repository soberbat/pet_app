import styled from "styled-components/native";

interface IImage {
  width: number;
}

export const Wrapper = styled.View`
  /* background-color: pink; */
  flex: 1;
`;

export const Headline = styled.Text`
  /* background-color: pink; */
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`;

export const Image = styled.Image<IImage>`
  width: ${({ width }) => width};
  height: ${({ width }) => width / 2};
  object-fit: cover;
`;
