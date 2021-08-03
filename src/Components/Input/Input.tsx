import { FC, InputHTMLAttributes, memo } from "react";
import { IconType } from "react-icons";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  error?: string;
  Icon?: IconType;
  theme?: "dark" | "light";
}
const Input: FC<Props> = ({
  theme,
  touched,
  id,
  error,
  className,
  Icon,
  placeholder,
  ...rest
}) => {
  const IconTheme =
    theme === "light"
      ? " text-blue-600 fill-blue w-6 h-6"
      : " text-white top-3.5 left-2 w-5 h-5";
  const InputDisplay =
    theme === "light"
      ? " pb-4 border-b border-solid w-full"
      : " p-1 pr-24 bg-gray-800 rounded-md w-96";
  const errorBox = theme === "light" ? " h-7" : "";

  return (
    <>
      <div className={"relative pt-3 " + className}>
        {Icon && <Icon className={" absolute top-3" + IconTheme}></Icon>}
        {id && placeholder && (
          <label htmlFor={id} className="sr-only">
            {placeholder}
          </label>
        )}

        <input
          id={id}
          {...rest}
          className={
            " inline-block align-middle outline-none text-AuthHeadColor text-md pl-9 " +
            InputDisplay
          }
          placeholder={placeholder}
        />
        <div className={"w-full text-right" + errorBox}>
          {touched && <div className="text-red-500">{error}</div>}
        </div>
      </div>
    </>
  );
};

Input.defaultProps = {
  theme: "light",
};
export default memo(Input);
