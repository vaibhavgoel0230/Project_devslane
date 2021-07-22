import { FC, InputHTMLAttributes, memo } from "react";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  error?: string;
}
const Input: FC<Props> = ({
  touched,
  id,
  error,
  className,
  placeholder,
  ...rest
}) => {
  return (
    <>
      <div className="relative pt-3 pb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="absolute top-4 text-blue-700"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        {id && placeholder && (
          <label htmlFor={id} className="sr-only">
            {placeholder}
          </label>
        )}

        <input
          id={id}
          {...rest}
          className=" inline-block align-middle text-AuthHeadColor text-md pb-2 pl-9 border-b border-solid w-full"
          placeholder={placeholder}
        />
        {touched && <div className="text-red-500">{error}</div>}
      </div>
    </>
  );
};

Input.defaultProps = {};
export default memo(Input);
