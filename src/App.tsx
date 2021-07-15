import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AppContainerPage from "./Pages/AppContainer.page";
import AuthPage from "./Pages/Auth.page";
import LecturePage from "./Pages/Lecture.page";
import NotFoundPage from "./Pages/NotFound.page";

interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login"></Redirect>
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
