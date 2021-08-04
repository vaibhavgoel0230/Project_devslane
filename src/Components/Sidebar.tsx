import { memo, FC } from "react";
import { logout } from "../api/auth";
import Button from "./Button/Button";

interface Props {}
const Sidebar: FC<Props> = (props) => {
  return (
    <div>
      <div className="h-full bg-gray-200 w-56 border-r border-gray-400 overflow-scroll fixed top-26 py-3 px-2 ">
        <Button
          theme="Dark"
          className="w-full"
          onClick={() => {
            logout();
            window.location.href = "/login";
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {};
export default memo(Sidebar);
