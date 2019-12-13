import React from 'react';
import { connect } from 'react-redux';
import { updateDisplay, clear, calculate } from '../actions';

const Key = ({keyType, updateDisplay, display, clear,calculate}) => {
    const btnClass = keyType.type || "";

    const handleClick = (event) => {
        const elType = event.target.dataset.type;
        let key = event.target.value;

        if (elType === "number") {
            updateDisplay(key);
        }
        else if (elType === "all-clear") {
            clear("0");
        }
        else if (elType === "decimal-symbol") {
            if (display.includes('.')) {
                return;
            }
            updateDisplay(key);
        }
        else if (elType === "operator") {
            if (key === "x") {
                key = '*';
            }
            updateDisplay(key);
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

const mapStateToProps = (state) => {
    return ({ display: state.display })
};

export default connect(
    mapStateToProps,
    { updateDisplay,
      clear,
      calculate }
)(Key);