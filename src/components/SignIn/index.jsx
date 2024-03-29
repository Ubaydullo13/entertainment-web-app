import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";

function SignIn() {
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = { 
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (emailRef.current.value === "" || passwordRef.current.value === "") {
      setErrorMessage("Email and password are required");
      return;
    }

    localStorage.setItem("userData", JSON.stringify(userData));

    setErrorMessage("");
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="auth">
      <Link className="auth__logo" to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <form className="sign-in" onSubmit={handleSubmit}>
        <h2 className="sign-in__heading">Login</h2>
        <FormInput
          type="email"
          required
          name="email"
          placeholder="Email"
          ref={emailRef}
        />
        <FormInput
          type="password"
          required
          name="password"
          placeholder="Password"
          ref={passwordRef}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="sign-in__btn">
          Login to your account
        </button>
        <p className="sign-in__prompt">
          Don`t have an account? &nbsp;{" "} 
          <Link className="sign-in__prompt--link" to="/sign-up">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export { SignIn }
