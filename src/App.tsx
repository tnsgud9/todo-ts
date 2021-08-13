import React from "react";
import Todo from "./pages/Todo";
import Practice from "./pages/Practice";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./pages/Global/styles/GlobalStyle";
const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Todo} />;
        <Route path="/test" exact component={Practice} />;
      </Switch>
    </BrowserRouter>
  );
};

export default App;
