import React from "react";

const Button = ({ handleClick, name, className, type }) => (
    <button
        type={type}
        onClick={handleClick}
        className={className}
    >{name}</button>
);


export default Button;