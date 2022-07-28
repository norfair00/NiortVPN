import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-vpn-500 font-semibold rounded-lg border border-vpn-500 hover:bg-vpn-500 hover:shadow-vpn-md hover:text-white-500 transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
