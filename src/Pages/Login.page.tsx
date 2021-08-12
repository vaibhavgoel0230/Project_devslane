import { FC, memo } from "react";
import { useHistory } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import { FiLock, FiUser } from "react-icons/fi";
import Toggle from "../Components/Toggle";
import { login } from "../api/auth";
import { useDispatch } from "react-redux";
import { meLoginAction } from "../actions/auth.actions";

interface Props {}

const Login: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    handleSubmit,
    getFieldProps,
    touched,
    isSubmitting,
    errors,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),
    onSubmit: (data) => {
      login(data).then((u) => {
        dispatch(meLoginAction(u));
        history.push("/dashboard");
      });
    },
  });

  return (
    <div className="min-h-screen w-1/2 break:w-full flex flex-col items-center font-CorkFont">
      <div className="flex flex-col w-full max-w-md py-11.429 items-start px-29.714">
        <div>
          <h1 className="mb-2 text-40 text-AuthHeadColor">
            Log In to{" "}
            <a href="/">
              <span className="text-blue-700 font-semibold">CORK</span>
            </a>
          </h1>
          <p className="text-14 font-bold tracking-wide mb-14 text-AuthHeadColor">
            New Here?{" "}
            <a
              href="/signup"
              className=" text-blue-700 border-b border-blue-700 border-solid"
            >
              Create an account
            </a>
          </p>
        </div>
        <form
          className="w-full"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="mb-2">
            <Input
              id="email"
              type="email"
              autoComplete="email"
              required
              touched={touched.email}
              error={errors.email}
              {...getFieldProps("email")}
              placeholder="Username"
              Icon={FiUser}
            />
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              touched={touched.password}
              error={errors.password}
              {...getFieldProps("password")}
              placeholder="Password"
              Icon={FiLock}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className=" font-semibold text-AuthHeadColor mr-2 text-14 tracking-widest">
                Show Password
              </p>
              <Toggle></Toggle>
            </div>

            <div className="text-sm">
              <Button buttonStyle="solid">Log in</Button>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-center text-AuthNoteColor">
            <label className="flex text-base cursor-pointer">
              <input
                type="checkbox"
                className="mt-1 mr-4 w-4 h-4 border-b border-solid"
              />
              Keep me logged in
            </label>
          </div>

          <div className="text-center mt-4">
            <a href="/">
              <span className="font-bold text-blue-700 tracking-widest">
                Forgot Password?
              </span>
            </a>
          </div>

          <p className="text-14 mt-24 my-auto text-AuthHeadColor font-semibold">
            © 2020 All Rights Reserved.{" "}
            <a href="/" className="text-blue-700">
              CORK
            </a>{" "}
            is a product of Designreset.{" "}
            <a href="/" className="text-blue-700">
              Cookie Preferences
            </a>
            ,{" "}
            <a href="/" className="text-blue-700">
              {" "}
              Privacy
            </a>
            , and{" "}
            <a href="/" className="text-blue-700">
              {" "}
              Terms
            </a>
            .
          </p>

          <div>
            {isSubmitting && (
              <FaSpinner className="mt-5 animate-spin"></FaSpinner>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

Login.defaultProps = {};
export default memo(Login);
