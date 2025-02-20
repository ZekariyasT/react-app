import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
  color: "primary" | "secondary" | "dark" | "light";
  OnClick: () => void;
}

const Buttons = ({ children, OnClick, color = "primary" }: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={OnClick}>
        {children}
      </button>
    </div>
  );
};

export default Buttons;
