import React, { FC, memo } from "react";
import { useHistory } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import { FiAtSign, FiLock, FiUser } from "react-icons/fi";
import Toggle from "../Components/Toggle";

interface Props {}

const Signup: FC<Props> = (props) => {
  const history = useHistory();
  const {
    handleSubmit,
    getFieldProps,
    touched,
    isSubmitting,
    errors,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      username: yup.string().required().min(3),
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),
    onSubmit: (data) => {
      console.log("form submitting", data);
      setTimeout(() => {
        console.log("form submitted successfully");
        history.push("/dashboard");
      }, 5000);
    },
  });

  return (
    <div className="min-h-screen w-1/2 break:w-full flex flex-col items-center font-CorkFont">
      <div className="flex flex-col w-full max-w-md py-11.429 items-start px-29.714">
        <div>
          <h1 className="mb-2 text-40 leading-11 text-AuthHeadColor">
            Get Started with a free account
          </h1>
          <p className="text-14 font-bold tracking-wide mb-14 text-AuthHeadColor">
            Already have an account?{" "}
            <a
              href="/login"
              className=" text-blue-700 border-b border-blue-700 border-solid"
            >
              Log In
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
              id="username"
              type="username"
              autoComplete="username"
              required
              touched={touched.username}
              error={errors.username}
              {...getFieldProps("username")}
              placeholder="Username"
              Icon={FiUser}
            />
            <Input
              id="email"
              type="email"
              autoComplete="email"
              required
              touched={touched.email}
              error={errors.email}
              {...getFieldProps("email")}
              placeholder="Email"
              Icon={FiAtSign}
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

          <div className="flex text-AuthNoteColor tracking-wide">
            <label className="flex text-sm cursor-pointer">
              <input type="checkbox" className="mt-1 mr-4 w-4 h-4" />I agree to
              the t
              <a href="/" className="text-blue-700">
                erms and conditions
              </a>
            </label>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <p className=" font-semibold text-AuthHeadColor text-14 tracking-widest mr-2">
                Show Password
              </p>
              <Toggle></Toggle>
            </div>

            <div className="text-sm">
              <Button buttonStyle="solid">Get Started!</Button>
            </div>
          </div>

          <p className="text-14 mt-20 my-auto text-AuthHeadColor font-semibold">
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

Signup.defaultProps = {};
export default memo(Signup);
