import { FC, memo } from "react";
interface Props {}
const NotFound: FC<Props> = (props) => {
  return (
    <div className="w-screen h-screen bg-yellow-500">
      The Page is not Found.
    </div>
  );
};

NotFound.defaultProps = {};
export default memo(NotFound);
