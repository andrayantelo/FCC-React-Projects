import React from 'react';
import { connect } from 'react-redux';
import { updateOutput, clear } from '../actions';

const Key = ({keyType, updateOutput, clear, output}) => {
    const btnClass = keyType.type || "";

    const handleClick = (event) => {
        const elType = event.target.dataset.type;
        let key = event.target.value;

        if (elType === "number") {
            updateOutput(key);
        }
        else if (elType === "all-clear") {
            clear(0);
        }
        else if (elType === "decimal-symbol") {
            console.log('clicked decimal');
            console.log(output);
            // TODO figure this out
            if (output) {
                updateOutput(key);
            }
        }
            
    }

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
    return ({ output: state.output })
};

export default connect(
    mapStateToProps,
    { updateOutput,
      clear }
)(Key);