import { useEffect } from "react";
import { useState } from "react";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../api/group";
import { Group } from "../modals/Group";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const [query, setQuery] = useState("ill");
  const [groups, setGroups] = useState<Group[]>();
  useEffect(() => {
    fetchGroups({ status: "all-groups", query }).then((u) => setGroups(u));
    // console.log(groups);
  }, [query]);
  return (
    <div>
      This is dashboard page.
      {groups?.map((i) => (
        <div key={i.id}>{i.name}</div>
      ))}
      <Link to="/recordings">
        <span className="text-blue-500">Go to Recordings.</span>
      </Link>
    </div>
  );
};

Dashboard.defaultProps = {};
export default memo(Dashboard);
