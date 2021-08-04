import React from "react";
import Todo from "./pages/Todo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./pages/Global/styles/GlobalStyle";
const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Todo} />;
      </Switch>
    </BrowserRouter>
  );
};

export default App;
