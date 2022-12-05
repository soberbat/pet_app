import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Container } from "../utils/gbStyle.styles";
import { ScrollView } from "react-native";

import Header from "../components/Header/Header";
import Featured from "../components/Featured/Featured";

interface IHome {
  data: any;
}

export default function Home({ data }: IHome) {
  return (
    <Container>
      <View>
        <Header />
        <Featured data={data} />
      </View>
    </Container>
  );
}
