import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Homepage from "./pages/homepage";
import Dashboard from "./pages/dashboard";
import Navbar from "./components/navbar/navbar";

import AddAsset from "./components/addAsset/addAsset";
import AssetCard from "./components/assetCard/assetCard";
import Footer from "./components/footer/index";
import Policy from "./pages/policy";
import Homes from "./pages/homes";
import AddItems from "./components/addItems/addItems";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SingleHome from "./pages/SingleHome";
import ProductDisplay from "./pages/stripe";
import Room from "./pages/Room";
import Item from "./pages/item";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addItem" component={AddItems} />
            <Route exact path="/addAsset" component={AddAsset} />
            <Route exact path="/assetCard" component={AssetCard} />
            <Route exact path="/policy" component={Policy} />
            <Route exact path="/homes" component={Homes} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/package" component={ProductDisplay} />
            <Route exact path="/home/:homeId">
              <SingleHome />
            </Route>
            <Route exact path="/item/:itemId">
              <Item />
            </Route>
            <Route exact path="/room/:roomId">
              <Room />
            </Route>
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
