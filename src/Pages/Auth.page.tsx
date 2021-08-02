import { Switch, Route } from "react-router-dom";
import { FC, memo } from "react";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";
import AuthHero from "../Components/AuthHero";
import { User } from "../modals/User";

interface Props {
  onLogin: (user: User) => void;
}
const AppContainer: FC<Props> = (props) => {
  return (
    <div className="flex flex-row justify-between">
      <Switch>
        <Route path="/login">
          <LoginPage onLogin={props.onLogin}></LoginPage>
        </Route>
        <Route path="/signup">
          <SignupPage></SignupPage>
        </Route>
      </Switch>
      <AuthHero></AuthHero>
    </div>
  );
};

AppContainer.defaultProps = {};
export default memo(AppContainer);

// import {FC, memo} from 'react'
// interface Props {}
// const AppContainer: FC<Props> = (props) => {
//     return (
//         <div>

//         </div>
//     )
// }

// AppContainer.defaultProps = {};
// export default memo(AppContainer)
