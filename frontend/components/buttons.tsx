import React, { FC } from "react";
import style from "../styles/buttons.module.scss";

interface BtnProps {
  text: string;
  btnClass?: boolean; //Conditional activation remaining
  onClick?: any;
  additionalclassName?: string;
  icon?: JSX.Element;
}

const PrimaryButton: FC<BtnProps> = ({
  text,
  btnClass,
  onClick,
  additionalclassName,
}) => {
  return (
    <button className={`${style.btn} ${additionalclassName}`} onClick={onClick}>
      {text}
    </button>
  );
};

export { PrimaryButton };
