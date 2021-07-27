import { FC, memo } from "react";
import { Link } from "react-router-dom";
import Avatar from "../Components/Avatar/Avatar";
import ProgressBar from "../Components/ProgressBar/ProgressBar";
import AvatarArray from "../Components/StackAvatars.tsx/AvatarArray";
import Avatars from "../Components/StackAvatars.tsx/Avatars";
import image from "C:/Users/vaibhav goel/Desktop/projects/devslane_web/Project_Devslane_CodeYogi/src/Components/StackAvatars.tsx/AvatarMedia/012218f4d43ade31f4e6146e2178f4be.jpg";

interface Props {}

const Dashboard: FC<Props> = (props) => {
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
