import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oe0inw22pw01z215o2eaqn/master',
  cache: new InMemoryCache()
})