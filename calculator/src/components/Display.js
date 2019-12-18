import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Display = ({ summary }) => {
    const {formula, result} = summary;
    useEffect(() => {
        console.log("display: " + formula[formula.length - 1]);
        console.log("formula: " + formula);
    }, [formula])


    const display = formula[formula.length - 1]? formula[formula.length - 1]: 0;
    return (
        <div>
            <div>
                <span className="spacer"></span>
                {formula}
            </div>
            <div id="display">
                {result? result: display}
            </div>
        </div>
    )        
}

const mapStateToProps = (state) => {
    return { 
                summary: state.summary
           }
}

export default connect(
    mapStateToProps
)(Display);