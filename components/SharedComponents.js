import React from "react";

export const Button = ({ onClick, children, type = "button" }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};