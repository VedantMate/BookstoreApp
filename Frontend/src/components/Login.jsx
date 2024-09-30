import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Logged in Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };

  return (
    <div>
      <dialog
        id="my_modal_3"
        className="modal backdrop-blur-sm backdrop-opacity-75 transition-all duration-300 ease-out"
      >
        <div className="modal-box w-96 rounded-lg shadow-2xl p-6 dark:bg-slate-900 dark:text-white relative">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-pink-500 hover:text-white duration-300"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-2xl mb-4 text-center text-pink-500">
              Welcome Back!
            </h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition duration-300 ease-in-out"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
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
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition duration-300 ease-in-out"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-between items-center mt-6">
              <button className="bg-pink-500 text-white rounded-lg px-4 py-2 font-semibold hover:bg-pink-600 focus:bg-pink-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300 ease-in-out">
                Login
              </button>
              <p className="text-sm">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="text-pink-500 font-semibold underline hover:text-pink-600"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
