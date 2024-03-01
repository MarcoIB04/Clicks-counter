import React from "react";
import "../style-sheets/Button.css"

function Button({ texto, isClickButton, useClick }) {
    return(
        <button className={ isClickButton ? "click-button" : "restart-button" } onClick={useClick}>
            {texto}
        </button>
    );
}

export default Button;