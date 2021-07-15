import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./Pages/Login.page";
import SignupPage from "./Pages/Signup.page";
import DashboardPage from "./Pages/Dashboard.pages";
import RecordingsPage from "./Pages/Recordings.page";

interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login"></Redirect>
        </Route>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/signup">
          <SignupPage></SignupPage>
        </Route>
        <Route path="/dashboard">
          <DashboardPage></DashboardPage>
        </Route>
        <Route path="/recordings">
          <RecordingsPage></RecordingsPage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
