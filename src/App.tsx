import React, { Suspense, useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { me } from "./api/auth";
import { LS_AUTH_TOKEN } from "./api/base";
import AppContext from "./App.context";
import { User } from "./modals/User";
import NotFoundPage from "./Pages/NotFound.page";

const AppContainerPageLazy = React.lazy(
  () => import("./Pages/AppContainer.page")
);
const AuthPageLazy = React.lazy(() => import("./Pages/Auth.page"));

interface Props {}

const App: React.FC<Props> = (props) => {
  const [user, setUser] = useState<User>();
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  useEffect(() => {
    if (!token) {
      return;
    }
    me().then((u) => setUser(u));
  }, []); // eslint-disable-line

  if (!user && token) {
    return <div>loading...</div>;
  }
  return (
    <AppContext.Provider value={{ user, setUser }}>
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
                <AuthPageLazy onLogin={setUser} />
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
    </AppContext.Provider>
  );
};

export default App;
