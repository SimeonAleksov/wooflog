import Link from "next/link";
import React, { FC, useState } from "react";
import { PrimaryButton } from "./Buttons";
import TextInput from "./Input";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <form className={styles.login_form}>
      <TextInput
        label="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <TextInput
        label="Password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <PrimaryButton
        text="Login"
        additionalclassName="my-4"
        // onClick={handleLogin}
      />
      <Link href="" className={styles.login_link_text}>
        Forgot Password?
      </Link>

      <div className={styles.login_register}>
        <span className={styles.login_register_text}>
          Don't have an account yet?
        </span>
        <Link href="" className={styles.login_link_text}>
          Register
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
