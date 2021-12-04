import React from "react";
import Spacer from "../components/common/Spacer";
import PageHeader from "../components/common/PageHeader";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <>
      <PageHeader title="Login" />
      <Spacer />
      <LoginForm />
      <Spacer />
    </>
  );
};

export default LoginPage;
