import { Switch, Route } from "react-router-dom";
import { FC, memo } from "react";
import Sidebar from "../Components/Sidebar";
import DashboardPage from "./Dashboard.pages";
import RecordingsPage from "./Recordings.page";
import LecturePage from "./Lecture.page";
import logo from "./media/logo.svg";
import { FiChevronDown, FiMenu, FiSearch } from "react-icons/fi";
import Input from "../Components/Input/Input";
import Avatar from "../Components/Avatar/Avatar";

interface Props {}
const AppContainer: FC<Props> = (props) => {
  return (
    <div>
      <div className="flex bg-black">
        <div className="flex text-gray-300 font-semibold tracking-wider pt-4 pb-2 pl-6">
          <img src={logo} alt="cork" className="w-8 h-8" />
          <a href="#" className="text-2xl -mt-1 px-3 w-36">
            CORK
          </a>
        </div>
        <div>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Username"
            Icon={FiSearch}
            theme="dark"
          />
        </div>
        <div className="w-full flex justify-end py-1 pr-3">
          <Avatar size="small" showlivePointer={false} rounded={false} />
        </div>
      </div>
      <div className="flex items-center justify-between pl-8 pr-4 py-2 bg-gray-50">
        <div className="flex items-center">
          <FiMenu className="w-5 h-5 mr-8" />
          <a href="#" className="text-sm">
            Dashboard
          </a>
        </div>
        <div className="flex py-1.5 px-2 items-center justify-center bg-white border-2 border-gray-300 rounded-md">
          <a href="#" className="px-4 text-sm">
            Settings
          </a>
          <FiChevronDown />
        </div>
      </div>
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
    </div>
  );
};

AppContainer.defaultProps = {};
export default memo(AppContainer);
