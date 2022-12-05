import { View, Text, FlatList, ListRenderItem, Dimensions } from "react-native";
import React from "react";
import {
  Container,
  FlatListContainer,
  HeaderText,
  ScrollContainer,
  Seperator,
} from "./Header.styles";

interface item {
  id: number;
  cont: string;
}

const data = [
  {
    id: 1,
    cont: "con",
  },
  {
    id: 2,
    cont: "con",
  },
  {
    id: 3,
    cont: "con",
  },
  {
    id: 4,
    cont: "con",
  },
];

const Header = () => {
  const windowWidth = Dimensions.get("window").width;

  const renderItem: ListRenderItem<item> = ({ item }) => (
    <ScrollContainer width={windowWidth}></ScrollContainer>
  );

  return (
    <Container>
      <FlatListContainer>
        <HeaderText>Header</HeaderText>
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <Seperator />}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={<Container />}
          style={{
            width: windowWidth * 0.9,
          }}
        />
      </FlatListContainer>
    </Container>
  );
};

export default Header;
