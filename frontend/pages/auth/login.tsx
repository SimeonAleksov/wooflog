import React, { useState } from "react";
import LoginForm from "../../components/LoginForm";
import styles from "./login.module.scss";
const Login = () => {
  return (
    <div className={styles.login_container}>
      <LoginForm />
    </div>
  );
};

export default Login;
