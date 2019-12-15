import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Display = ({ screen }) => {
    useEffect(() => {
        console.log("display: " + screen.display);
    }, [screen])

    return (
        <div>
            <div>
                {screen.formula}
            </div>
            <div id="display">
                {screen.display}
            </div>
        </div>
    )        
}

const mapStateToProps = (state) => {
    return { screen: state.screen }
}

export default connect(
    mapStateToProps
)(Display);