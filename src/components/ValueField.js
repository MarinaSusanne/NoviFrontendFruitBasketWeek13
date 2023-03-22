import React from 'react';

function ValueField({input, inputType, label, value, changeHandler}) {
    return (
        <>
            <label htmlFor={`details-${input}`}>{label}</label>
            <input
                type={inputType}
                name={`details-${input}`}
                id={`details-${input}`}
                value={value}
                onChange={changeHandler}
            />
        </>
    );
}

export default ValueField;