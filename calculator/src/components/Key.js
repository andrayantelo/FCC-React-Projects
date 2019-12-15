import React from 'react';
import { connect } from 'react-redux';
import { clear, calculate, pressNumber, pressDecimal } from '../actions';

const Key = ({keyType, clear,calculate, pressNumber, pressDecimal}) => {
    const btnClass = keyType.type || "";

    const handleClick = (event) => {
        const elType = event.target.dataset.type;
        let key = event.target.value;

        if (elType === "number") {
            pressNumber(key);
        }
        else if (elType === "all-clear") {
            clear();
        }
        else if (elType === "decimal-symbol") {
            pressDecimal();
            //updateFormula(key);
            //updateDisplay(key);
        }
        else if (elType === "operator") {
            if (key === "x") {
                key = "*";
            }
            //updateFormula(key);
            //updateDisplay(key);
        }
        else {
            calculate(key);
        }
            
    };

    return (
        <div className={`${btnClass}`}>
            <button 
                id={keyType.name}
                className="ui button"
                value={keyType.value}
                onClick={handleClick}
                data-type={keyType.type}
            >
                {keyType.value}
            </button>
        </div>
    )
}



export default connect(
    null,
    { 
      clear,
      calculate,
      pressNumber,
      pressDecimal }
)(Key);