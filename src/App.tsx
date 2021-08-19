import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { authActions } from "./actions/auth.actions";
import { me } from "./api/auth";
import { LS_AUTH_TOKEN } from "./api/base";
import NotFoundPage from "./Pages/NotFound.page";
import { meSelector } from "./selectors/auth.selectors";
import { useAppSelector } from "./store";

const AppContainerPageLazy = React.lazy(
  () => import("./Pages/AppContainer.page")
);
const AuthPageLazy = React.lazy(() => import("./Pages/Auth.page"));

interface Props {}

const App: React.FC<Props> = (props) => {
  const user = useAppSelector(meSelector);
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  useEffect(() => {
    if (!token) {
      return;
    }

    me().then((u) => authActions.fetch(u));
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
              "/groups/:groupId",
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
