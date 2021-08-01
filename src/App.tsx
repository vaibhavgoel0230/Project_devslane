import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LS_LOGIN_TOKEN } from "./api";
import AppContainerPage from "./Pages/AppContainer.page";
import AuthPage from "./Pages/Auth.page";
import NotFoundPage from "./Pages/NotFound.page";

interface Props {}

const App: React.FC<Props> = (props) => {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>
        <Route path={["/login", "/signup"]} exact>
          <AuthPage></AuthPage>
        </Route>
        <Route
          path={[
            "/dashboard",
            "/recordings",
            "/batch/:batchNumber/lecture/:lectureNumber",
          ]}
          exact
        >
          <AppContainerPage></AppContainerPage>
        </Route>
        <Route>
          <NotFoundPage></NotFoundPage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
