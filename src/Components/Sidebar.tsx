import { memo, FC } from "react";
import { logout } from "../api/auth";
import Button from "./Button/Button";

interface Props {}
const Sidebar: FC<Props> = (props) => {
  return (
    <div>
      <div className="h-screen bg-gray-400 w-80">This is sidebar</div>
      <Button
        onClick={() => {
          logout();
          window.location.href = "/login";
        }}
      >
        Logout
      </Button>
    </div>
  );
};

Sidebar.defaultProps = {};
export default memo(Sidebar);
