import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Display = ({ display, formula }) => {
    useEffect(() => {
        console.log("display: " + display);
        console.log("formula: " + formula);
    }, [display, formula])

    return (
        <div>
            <div>
                <span className="spacer"></span>
                {formula}
            </div>
            <div id="display">
                {display}
            </div>
        </div>
    )        
}

const mapStateToProps = (state) => {
    return { 
                display: state.display,
                formula: state.formula
           }
}

export default connect(
    mapStateToProps
)(Display);