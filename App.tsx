import { StatusBar } from "expo-status-bar";
import { ApolloProvider } from "@apollo/client";
import { client } from "./utils/gqlQuery";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Query from "./Query";
import { useState } from "react";

export type MyStackParamList = {
  Home: { data: any };
  Details: { item: any; navigation: any; route: any };
};

const Stack = createSharedElementStackNavigator<MyStackParamList>();

export default function App() {
  const [data, setData] = useState<any>();

  const setQueryData = (QueryData: any) => setData(QueryData);

  return (
    <ApolloProvider client={client}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Query setQueryData={setQueryData} />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={() => <Home data={data} />}
            options={{
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            sharedElements={(route) => [
              route.params.item.attributes.identifierId,
            ]}
            options={{
              headerTransparent: true,
              headerTitleStyle: { opacity: 0 },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
