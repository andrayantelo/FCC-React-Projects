import React from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import { formatTime } from '../helpers';

const Display = (props) => {
    return(
        <div className="outer-display-container">
            <div className="display-container">
                <h3 className="ui header">
                    Session
                </h3>
                <div className="display">
                    {formatTime(props.timer.displayTime)}
                </div>
                <Controls />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { timer: state.timer }
}


export default connect(
    mapStateToProps
)(Display);