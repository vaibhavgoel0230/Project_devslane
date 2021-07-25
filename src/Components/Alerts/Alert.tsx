import { FC, memo } from "react";
import { HiX } from "react-icons/hi";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  theme?: "Primary" | "Warning" | "Danger" | "Info" | "Success";
  alertStyle?: "default" | "outline" | "solid";
  children?: string;
  title?: string;
}

const Alert: FC<Props> = ({ theme, alertStyle, children, title }) => {
  let themeClasses = "";
  if (theme === "Primary") {
    if (alertStyle === "default") {
      themeClasses = "text-indigo-500 bg-blue-200 hover:shadow-primary-xl";
    } else if (alertStyle === "outline") {
      themeClasses =
        "border border-indigo-500 text-gray-400 bg-white hover:shadow-primary-xl";
    } else if (alertStyle === "solid") {
      themeClasses = "bg-indigo-500 text-white";
    }
  } else if (theme === "Warning") {
    if (alertStyle === "default") {
      themeClasses = "text-yellow-400 bg-yellow-100 hover:shadow-warning-xl";
    } else if (alertStyle === "outline") {
      themeClasses =
        "border border-yellow-400 text-gray-400 bg-white hover:shadow-warning-xl";
    } else if (alertStyle === "solid") {
      themeClasses = "bg-yellow-400 text-white";
    }
  } else if (theme === "Danger") {
    if (alertStyle === "default") {
      themeClasses = "text-red-500 bg-red-200 hover:shadow-danger-xl";
    } else if (alertStyle === "outline") {
      themeClasses =
        "border border-red-500 text-gray-400 bg-white hover:shadow-danger-xl";
    } else if (alertStyle === "solid") {
      themeClasses = "bg-red-500 text-white";
    }
  } else if (theme === "Info") {
    if (alertStyle === "default") {
      themeClasses = "text-blue-400 bg-blue-100 hover:shadow-info-xl";
    } else if (alertStyle === "outline") {
      themeClasses =
        "border border-blue-400 text-gray-400 bg-white hover:shadow-info-xl";
    } else if (alertStyle === "solid") {
      themeClasses = "bg-blue-400 text-white";
    }
  } else if (theme === "Success") {
    if (alertStyle === "default") {
      themeClasses = "text-green-400 bg-green-200 hover:shadow-success-xl";
    } else if (alertStyle === "outline") {
      themeClasses =
        "border border-green-400 text-gray-400 bg-white hover:shadow-success-xl";
    } else if (alertStyle === "solid") {
      themeClasses = "bg-green-400 text-white";
    }
  }

  return (
    <div
      className={
        " flex justify-between px-4 py-3 rounded relative " + themeClasses
      }
      role="alert"
    >
      <div>
        <strong className="font-bold">{title} </strong>
        <span className="block sm:inline">{children}</span>
      </div>
      <div className="pt-1">
        <span className="pl-6">
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <HiX className="w-5 h-5"></HiX>
          </button>
        </span>
      </div>
    </div>
  );
};
Alert.defaultProps = {
  theme: "Primary",
  alertStyle: "default",
  children: "Lorem Ipsum is simply dummy text of the printing.",
  title: "Warning! ",
};
export default memo(Alert);
