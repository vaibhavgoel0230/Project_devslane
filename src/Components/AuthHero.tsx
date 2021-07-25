import { useEffect } from "react";
import { FC, memo } from "react";

interface Props {}

const AuthHero: FC<Props> = (props) => {
  console.log("AuthHero Rendering for the first time");
  useEffect(() => {
    console.log("AuthHero Rendering for the first time.");
  }, []);
  return (
    <div className="absolute left-1/2 bg-no-repeat w-1/2 bg-3/4 bg-center bg-authBgColor h-full bg-AuthImg break:hidden"></div>
  );
};
AuthHero.defaultProps = {};
export default memo(AuthHero);
