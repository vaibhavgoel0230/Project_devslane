import React from "react";
import { memo, FC } from "react";

interface Props {}
const Sidebar: FC<Props> = (props) => {
  return <div className="h-screen bg-gray-400 w-80">This is sidebar</div>;
};

Sidebar.defaultProps = {};
export default memo(Sidebar);
