// import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";


function SignIn() {
  return (
    <div className="auth">
        <Link className="auth__logo" to="/">
            <img src={Logo} alt="Logo" />
        </Link>
        <form className="sign-in">
        <h2 className="sign-in__heading">Login</h2>
        <FormInput
          type="email"
          required
          name="email"
          placeholder="Email"
        />
        <FormInput
          type="password"
          required
          name="password"
          placeholder="Password"
        />
        <button type="submit" className="sign-in__btn">
          Login to your account
        </button>
        <p className="sign-in__prompt">
          Don`t have an account? &nbsp;{" "}
          <Link className="sign-in__prompt--link" to="sign-up">
            Sign Up
          </Link>
        </p>
        </form>
    </div>
  )
}

export  {SignIn}