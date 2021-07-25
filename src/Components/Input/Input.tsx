import { FC, InputHTMLAttributes, memo } from "react";
import { IconType } from "react-icons";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  error?: string;
  Icon?: IconType;
}
const Input: FC<Props> = ({
  touched,
  id,
  error,
  className,
  Icon,
  placeholder,
  ...rest
}) => {
  return (
    <>
      <div className="relative pt-3 ">
        {Icon && (
          <Icon className="w-6 h-6 absolute top-3 text-blue-600 fill-blue"></Icon>
        )}
        {id && placeholder && (
          <label htmlFor={id} className="sr-only">
            {placeholder}
          </label>
        )}

        <input
          id={id}
          {...rest}
          className=" inline-block align-middle outline-none text-AuthHeadColor text-md pb-4 pl-9 border-b border-solid w-full"
          placeholder={placeholder}
        />
        <div className="w-full h-7 text-right">
          {touched && <div className="text-red-500">{error}</div>}
        </div>
      </div>
    </>
  );
};

Input.defaultProps = {};
export default memo(Input);
