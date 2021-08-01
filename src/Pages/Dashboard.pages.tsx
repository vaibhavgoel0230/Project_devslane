import { useEffect } from "react";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../api";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  useEffect(() => {
    fetchGroups({ status: "all-groups" });
  }, []);
  return (
    <div>
      This is dashboard page.
      <Link to="/recordings">
        <span className="text-blue-500">Go to Recordings.</span>
      </Link>
    </div>
  );
};

Dashboard.defaultProps = {};
export default memo(Dashboard);
