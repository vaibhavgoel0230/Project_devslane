import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { meFetchedAction } from "./actions/auth.actions";
import { me } from "./api/auth";
import { LS_AUTH_TOKEN } from "./api/base";
import { User } from "./modals/User";
import NotFoundPage from "./Pages/NotFound.page";
import { useAppSelector } from "./store";

const AppContainerPageLazy = React.lazy(
  () => import("./Pages/AppContainer.page")
);
const AuthPageLazy = React.lazy(() => import("./Pages/Auth.page"));

interface Props {}

const App: React.FC<Props> = (props) => {
  const user = useAppSelector(
    (state) => state.auth.id && state.users.byId[state.auth.id]
  );
  const dispatch = useDispatch();
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  useEffect(() => {
    if (!token) {
      return;
    }
    me().then((u) => dispatch(meFetchedAction(u)));
  }, []); // eslint-disable-line

  if (!user && token) {
    return <div>loading...</div>;
  }
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>
          <Route path={["/login", "/signup"]} exact>
            {user ? (
              <Redirect to="/dashboard" />
            ) : (
              <Suspense
                fallback={
                  <div className="text-indigo-600 text-3xl p-4 m-auto">
                    Content is Loading
                  </div>
                }
              >
                <AuthPageLazy />
              </Suspense>
            )}
          </Route>
          <Route
            path={[
              "/dashboard",
              "/recordings",
              "/batch/:batchNumber/lecture/:lectureNumber",
            ]}
            exact
          >
            <Suspense
              fallback={
                <div className="text-indigo-600 text-3xl w-full p-4 m-auto">
                  Content is Loading
                </div>
              }
            >
              {user ? <AppContainerPageLazy /> : <Redirect to="/login" />}
            </Suspense>
          </Route>
          <Route>
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
function meFetchAction(u: User): any {
  throw new Error("Function not implemented.");
}
