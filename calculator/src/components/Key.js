import React from 'react';
import { connect } from 'react-redux';
import { clear, calculate, pressNumber, pressDecimal, pressOperator } from '../actions';

const Key = ({keyType, clear,calculate, pressNumber, pressDecimal, pressOperator, formula }) => {
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
        }
        else if (elType === "operator") {
            if (key === "x") {
                key = "*";
            }
            pressOperator(key);
        }
        else {
            calculate(formula);
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

const mapStateToProps = (state) => {
    return { formula: state.formula }
}



export default connect(
    mapStateToProps,
    { 
      clear,
      calculate,
      pressNumber,
      pressDecimal,
      pressOperator }
)(Key);