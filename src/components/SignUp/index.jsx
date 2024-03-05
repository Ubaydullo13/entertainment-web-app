// import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import FormInput from "../FormInput/FormInput";
import "./SignUp.scss";
function SignUp() {
  return (
    <div className="form">
      <Link className="form__logo" to="/">
        <img src={Logo} alt="Logo" />
      </Link>

      <form className="sign-up">
        <h3 className="sign-up__heading">Sign Up</h3>
        <FormInput type="email" name="email" placeholder="Email" required />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <FormInput
          type="password"
          name="repeatPassword"
          placeholder="Confirm Password"
          required
        />
        <button type="submit" className="sign-up__btn">
          Create an account
        </button>
        <p className="sign-up__prompt">
          Already have an account? &nbsp;{" "}
          <Link className="sign-up__prompt--link" to={"/auth"}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export  {SignUp};
