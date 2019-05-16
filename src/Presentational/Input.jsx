import React from "react";

const Input = ({ type, onChangeHandler, placeholder, className, boxClass, label, text, id, name, dataParse }) => (
    <div className={`${className} form-group`}>
        <label htmlFor={text}>{label}</label>
        <input
            data-parse={dataParse}
            placeholder={placeholder}
            type={type}
            onChange={onChangeHandler}
            className={boxClass}
            id={id}
            name={name}
        />
    </div>
);


export default Input;