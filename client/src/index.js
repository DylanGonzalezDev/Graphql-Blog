import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//import ApolloClient from "apollo-boost";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/react-hooks";
import { setContext } from 'apollo-link-context';


const httpLink = createHttpLink({ uri: "http://localhost:3002/graphql" });


const authLink = setContext((_, { headers }) => {

  const token = `Bearer ${localStorage.getItem("token")}` || null;

  return {
    headers: {
      ...headers,
      authorization: token,
    }
  }
});



const link = authLink.concat(httpLink);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
