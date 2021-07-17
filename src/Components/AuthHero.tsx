import { useEffect } from "react";
import { FC, memo } from "react";

interface Props {}

const AuthHero: FC<Props> = (props) => {
  console.log("AuthHero Rendering for the first time");
  useEffect(() => {
    console.log("AuthHero Rendering for the first time.");
  }, []);
  return <div className="w-full h-screen bg-black">Logo will go here</div>;
};
AuthHero.defaultProps = {};
export default memo(AuthHero);
