import React from 'react';
import { connect } from 'react-redux';
import { updateBreak } from '../actions';
import { formatTime } from '../helpers';

const Session = (props) => {
    const { breakLength } = props.timer;

    const handleClick = (event) => {
        if (props.timerRunning) {
            return;
        }
        props.updateBreak(event.target.id);
    }

    return (
        <div className="session">
            <h4 id="break-label" className="ui large header">Break Length</h4>
            <div className="session-display-container">
                <i
                    id="break-increment"
                    className="session-item big arrow alternate circle up outline icon"
                    onClick={handleClick}
                ></i>
                <div 
                    id="break-length"
                    className="session-item session-display">
                    {formatTime(breakLength)}
                </div>
                <i
                    id="break-decrement"
                    className="session-item big arrow alternate circle down outline icon"
                    onClick={handleClick}
                ></i>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        timer: state.timer
    }
}


export default connect(
    mapStateToProps,
    { updateBreak }
)(Session);