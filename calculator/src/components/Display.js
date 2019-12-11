import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Display = ({output, input}) => {
    useEffect(() => {
        console.log("output: " + output);
        console.log("input: " + input);
    }, [output, input])

    return (
        <div id="display">
            {output}
        </div>
    )        
}

const mapStateToProps = (state) => {
    return { output: state.output,
             input: state.input }
}

export default connect(
    mapStateToProps
)(Display);