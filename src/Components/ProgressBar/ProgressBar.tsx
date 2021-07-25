import { CSSProperties, FC, memo } from "react";

interface Props extends CSSProperties {
  progress?: number;
  height?: "small" | "medium" | "large" | "extra-large";
}

const ProgressBar: FC<Props> = ({ progress, height }) => {
  let barheight = "";
  if (height === "small") {
    barheight = " h-1";
  } else if (height === "medium") {
    barheight = " h-2";
  } else if (height === "large") {
    barheight = " h-3";
  } else if (height === "extra-large") {
    barheight = " h-4";
  }
  const progressStyle = { width: progress + "%" } as CSSProperties;
  return (
    <div
      className={
        "overflow-hidden mb-4 h- text-xs flex rounded bg-gray-200" + barheight
      }
    >
      <div
        style={progressStyle}
        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center py-1 bg-pink-500"
      >
        {height === "large" && <span>{progress} %</span>}
        {height === "extra-large" && <span>{progress} %</span>}
      </div>
    </div>
  );
};
ProgressBar.defaultProps = {
  progress: 30,
  height: "medium",
};
export default memo(ProgressBar);
