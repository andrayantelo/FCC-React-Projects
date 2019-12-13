import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Display = ({ display }) => {
    useEffect(() => {
        console.log("display: " + display);
    }, [display])

    return (
        <div id="display">
            {display}
        </div>
    )        
}

const mapStateToProps = (state) => {
    return { display: state.display }
}

export default connect(
    mapStateToProps
)(Display);