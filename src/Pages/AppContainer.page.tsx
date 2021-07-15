import { Switch, Route } from "react-router-dom";
import { FC, memo } from "react";
import Sidebar from "../Components/Sidebar";
import DashboardPage from "./Dashboard.pages";
import RecordingsPage from "./Recordings.page";
import LecturePage from "./Lecture.page";

interface Props {}
const AppContainer: FC<Props> = (props) => {
  return (
    <div className="flex flex-row">
      <Sidebar></Sidebar>
      <Switch>
        <Route path="/dashboard">
          <DashboardPage></DashboardPage>
        </Route>
        <Route path="/recordings">
          <RecordingsPage></RecordingsPage>
        </Route>
        <Route path="/batch/:batchNumber/lecture/:lectureNumber">
          <LecturePage />
        </Route>
      </Switch>
    </div>
  );
};

AppContainer.defaultProps = {};
export default memo(AppContainer);
