"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import React from "react";

const Register = () => {
  const handleSubmit =async (e) => {
    e.preventDefault();
    const form = e.target;
    // এখানে শুধু email আর password আছে
    const email = form.email.value;
    const Username = form.Username.value;
    const payload = {email,Username}
    const result = await registerUser(payload);
    console.log(result)
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              {/*  handleSubmit এখন form এ দেওয়া হয়েছে */}
              <form className="fieldset" onSubmit={handleSubmit}>
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input input-bordered"
                  placeholder="Email"
                />
                <label className="label">Username</label>
                <input
                  name="Username"
                  type="Username"
                  className="input input-bordered"
                  placeholder="Username"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
