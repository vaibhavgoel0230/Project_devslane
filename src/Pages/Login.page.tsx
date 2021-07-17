import React, { FC, memo, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiLockClosed } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";
import * as yup from "yup";
import { Formik, useFormik } from "formik";
import Input from "../Components/Input";

interface Props {}

const Login: FC<Props> = (props) => {
  const history = useHistory();
  const { handleSubmit, getFieldProps, touched, isSubmitting, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
      }),
      onSubmit: (data, helpers) => {
        console.log("form submitting", data);
        setTimeout(() => {
          console.log("form submitted successfully");
          history.push("/dashboard");
        }, 5000);
      },
    });

  return (
    <div className="min-h-screen w-full max-w-1/2 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              start your 14-day free trial
            </a>
          </p>
        </div>
        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <Input
              id="email"
              type="email"
              autoComplete="email"
              required
              touched={touched.email}
              error={errors.email}
              {...getFieldProps("email")}
              placeholder="Email address"
              className="rounded-b-none"
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
              className="rounded-t-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              // disabled={}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <HiLockClosed
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
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
