import React from "react";

const Select = ({ options,label,dataParse,name }) => (
    <div>
        <label>{label}:</label>
        <select className="form-control" data-parse={dataParse} name={name}>
            {
                options.map((option, index) => {
                    return <option key={index}>{option}</option>
                })
            }
        </select>
    </div>
);


export default Select;