import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache({ addTypename: false }),
});

const ITEMS = gql`
  query {
    readings {
      data {
        attributes {
          petName
          headline
          uri
          identifierId
        }
      }
    }
  }
`;

export { ITEMS, client };
