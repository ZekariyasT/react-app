import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
  OnClick: () => void;
}

const Alert = ({ children, OnClick }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissible  fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={OnClick}
      ></button>
    </div>
  );
};

export default Alert;
