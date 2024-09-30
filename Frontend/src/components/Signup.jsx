import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box rounded-lg shadow-2xl p-6 dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-pink-500 hover:text-white transition duration-300"
            >
              ✕
            </Link>

            <h3 className="font-bold text-2xl mb-4 text-center text-pink-500">
              Create an Account
            </h3>

            {/* Fullname */}
            <div className="mt-4 space-y-2">
              <label htmlFor="fullname" className="text-sm font-semibold">
                Full Name
              </label>
              <input
                id="fullname"
                type="text"
                placeholder="Enter your fullname"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition duration-300"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition duration-300"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <label htmlFor="password" className="text-sm font-semibold">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition duration-300"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-between items-center mt-6">
              <button className="bg-pink-500 text-white rounded-lg px-4 py-2 font-semibold hover:bg-pink-600 focus:bg-pink-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300">
                Signup
              </button>
              <p className="text-sm">
                Have an account?{" "}
                <button
                  className="text-pink-500 font-semibold underline hover:text-pink-600"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
