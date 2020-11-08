import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

const Loading = ({ isLoading, error }) => {
  if (isLoading) {
    return "loading";
  } else if (error) {
    return error;
  }
  return null;
};

const Home = Loadable({
  loading: Loading,
  loader: () => import("./page/Home"),
});

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
