import { FC, memo } from "react";
import image from "./media/photo-1532074205216-d0e1f4b87368.jpg";

interface Props {
  size?: "small" | "medium" | "large";
  showlivePointer?: boolean;
  isLive?: boolean;
  rounded?: boolean;
  showProfile?: boolean;
}

const Avatar: FC<Props> = ({
  size,
  showlivePointer,
  isLive,
  rounded,
  showProfile,
}) => {
  const showliveClass = showlivePointer === true ? " block" : " hidden";
  const isLiveClass = isLive === true ? " bg-green-500" : " bg-gray-500";
  const roundedClass = rounded === true ? " rounded-full" : " rounded-md";
  let livePointerSize = "";
  let imgSize = "";
  if (size === "small") {
    livePointerSize = " w-4 h-4 left-9";
    imgSize = " w-12 h-12 text-base";
  } else if (size === "medium") {
    livePointerSize = " w-5 h-5 left-12";
    imgSize = " w-16 h-16 text-lg";
  } else if (size === "large") {
    livePointerSize = " w-6 h-6 left-15";
    imgSize = " w-20 h-20 text-xl";
  }
  return (
    <div className="relative inline-block transform transition-duration-3000 ease-in-out hover:translate-x-4 cursor-pointer">
      {showProfile ? (
        <img
          src={image}
          alt="avatar"
          className={" border border-white " + imgSize + roundedClass}
        />
      ) : (
        <div
          className={
            "bg-gray-500 flex justify-center items-center text-white" +
            imgSize +
            roundedClass
          }
        >
          VG
        </div>
      )}
      <div
        className={
          "absolute border-2 border-white rounded-full -bottom-1" +
          livePointerSize +
          showliveClass +
          isLiveClass
        }
      ></div>
    </div>
  );
};
Avatar.defaultProps = {
  size: "medium",
  showlivePointer: true,
  isLive: true,
  rounded: true,
  showProfile: true,
};
export default memo(Avatar);
