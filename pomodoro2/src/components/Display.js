import React from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import { formatTime } from '../helpers';

const Display = (props) => {
    return(
        <div className="outer-display-container">
            <div className="display-container">
                <h3
                    id="timer-label"
                    className="ui header">
                    {props.timer.currentSession === "workLength"? "Session" : "Break"}
                </h3>
                <div 
                    id="time-left"
                    className="display">
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