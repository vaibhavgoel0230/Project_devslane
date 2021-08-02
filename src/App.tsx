import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LS_AUTH_TOKEN } from "./api/base";
import AppContainerPage from "./Pages/AppContainer.page";
import AuthPage from "./Pages/Auth.page";
import NotFoundPage from "./Pages/NotFound.page";

interface Props {}

const App: React.FC<Props> = (props) => {
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>
        <Route path={["/login", "/signup"]} exact>
          {token ? <Redirect to="/dashboard" /> : <AuthPage />}
        </Route>
        <Route
          path={[
            "/dashboard",
            "/recordings",
            "/batch/:batchNumber/lecture/:lectureNumber",
          ]}
          exact
        >
          {token ? <AppContainerPage /> : <Redirect to="/login" />}
        </Route>
        <Route>
          <NotFoundPage></NotFoundPage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
