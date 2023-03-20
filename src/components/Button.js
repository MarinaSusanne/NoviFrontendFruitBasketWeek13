import React from 'react';

function Button({buttonType, disabled, clickHandler, children}) {
    return (
        <button type={buttonType}
        disabled={disabled || false}
        onClick={clickHandler}
        >
       {children}
        </button>
    );
}

export default Button;