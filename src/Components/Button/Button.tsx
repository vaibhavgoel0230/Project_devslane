// import { ButtonHTMLAttributes } from "react";
// import { useEffect } from "react";
// import { FC, memo } from "react";

// interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
//     theme?: "primary"|"secondary";

// }

// const Button: FC<Props> = ({theme,className,children,...rest}) => {
//   return (
//     <button
//       {...rest}
//       type="submit"
//       className="group relative w-full flex justify-center py-2 px-5 shadow-xl border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//     >
//       Log in
//     </button>
//   );
// };
// Button.defaultProps = {};
// export default memo(Button);

import { ButtonHTMLAttributes } from "react";
import { FC, memo } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "Primary" | "Warning" | "Danger" | "Info" | "Success" | "Dark";
  buttonStyle?: "default" | "outline" | "solid";
  rounded?: boolean;
  children: string;
}

const Button: FC<Props> = ({
  theme,
  rounded,
  children,
  buttonStyle,
  className,
  ...rest
}) => {
  const roundedClass = rounded === true ? " rounded-full" : "";

  let themeClasses = "";
  if (theme === "Primary") {
    if (buttonStyle === "default") {
      themeClasses = "text-indigo-500 bg-blue-200 hover:shadow-primary-xl ";
    } else if (buttonStyle === "outline") {
      themeClasses =
        "border border-indigo-500 text-gray-400 bg-white hover:shadow-primary-xl ";
    } else if (buttonStyle === "solid") {
      themeClasses = "bg-indigo-500 text-white ";
    }
  } else if (theme === "Warning") {
    if (buttonStyle === "default") {
      themeClasses = "text-yellow-400 bg-yellow-200 hover:shadow-warning-xl ";
    } else if (buttonStyle === "outline") {
      themeClasses =
        "border border-yellow-400 text-gray-400 bg-white hover:shadow-warning-xl ";
    } else if (buttonStyle === "solid") {
      themeClasses = "bg-yellow-400 text-white ";
    }
  } else if (theme === "Danger") {
    if (buttonStyle === "default") {
      themeClasses = "text-red-500 bg-red-200 hover:shadow-danger-xl ";
    } else if (buttonStyle === "outline") {
      themeClasses =
        "border border-red-500 text-gray-400 bg-white hover:shadow-danger-xl ";
    } else if (buttonStyle === "solid") {
      themeClasses = "bg-red-500 text-white ";
    }
  } else if (theme === "Info") {
    if (buttonStyle === "default") {
      themeClasses = "text-blue-400 bg-blue-200 hover:shadow-info-xl ";
    } else if (buttonStyle === "outline") {
      themeClasses =
        "border border-blue-400 text-gray-400 bg-white hover:shadow-info-xl ";
    } else if (buttonStyle === "solid") {
      themeClasses = "bg-blue-400 text-white";
    }
  } else if (theme === "Success") {
    if (buttonStyle === "default") {
      themeClasses = "text-green-400 bg-green-200 hover:shadow-success-xl ";
    } else if (buttonStyle === "outline") {
      themeClasses =
        "border border-green-400 text-gray-400 bg-white hover:shadow-success-xl ";
    } else if (buttonStyle === "solid") {
      themeClasses = "bg-green-400 text-white ";
    }
  } else if (theme === "Dark") {
    if (buttonStyle === "default") {
      themeClasses = "text-gray-100 bg-gray-500 ";
    } else if (buttonStyle === "outline") {
      themeClasses = "border border-gray-400 text-gray-400 bg-gray-50 ";
    } else if (buttonStyle === "solid") {
      themeClasses = "bg-black text-white ";
    }
  }

  return (
    <button
      {...rest}
      className={
        "group relative w-21 flex justify-center py-2 px-5 border border-transparent text-xs font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 " +
        themeClasses +
        roundedClass +
        className
      }
    >
      {children}
    </button>
  );
};
Button.defaultProps = {
  buttonStyle: "default",
  theme: "Primary",
  rounded: false,
};
export default memo(Button);
