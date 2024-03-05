import { Route, Routes } from "react-router-dom";
import { SignIn } from "../../components/SignIn"
import { SignUp } from "../../components/SignUp";

function Authentication() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export { Authentication };
