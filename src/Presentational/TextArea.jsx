import React from "react";

const TextArea = ({ placeholder, className, label, rows, name, dataParse }) => (
    <div className="form-group">
        <label>{label}:</label>
        <textarea rows={rows} className={className} placeholder={placeholder} name={name} data-parse={dataParse}/>
    </div>
);


export default TextArea;