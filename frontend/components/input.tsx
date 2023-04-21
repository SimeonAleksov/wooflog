import React, { FC, useState, useEffect } from "react";
import styles from "./input.module.scss";

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string | any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  show?: boolean;
  setShow?: () => void;
  additionalClass?: string;
  rootCss?: string;
  type?: string;
  icon?: JSX.Element;
  disabled?: boolean;

  array?: any[]; //select and selectInput
  open?: boolean; //select and selectInput
  updateValue?: () => void; //select and selectInput
  closeOptions?: () => void; //select and selectInput
  showOptions?: () => void; //select and selectInput
}

const TextInput: FC<InputProps> = ({
  label,
  value,
  onChange,
  additionalClass,
  rootCss,
  placeholder,
  disabled,
  type,
}) => {
  return (
    <div className={styles["floating-form"]}>
      <div className={styles["floating-label"]}>
        <label>{label}</label>
        <input
          type={type ? type : "text"}
          className={styles["floating-input"]}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default TextInput;
