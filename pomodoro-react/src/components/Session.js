import React from 'react';
import { connect } from 'react-redux';
import { updateWork } from '../actions';
import { formatTime } from '../helpers';

const Session = (props) => {
    const { workLength } = props.timer;

    const handleClick = (event) => {
        if (props.timerRunning) {
            return;
        }
        props.updateWork(event.target.id);
    }

    return (
        <div className="session">
            <h4 id="work-label" className="ui large header">Work Length</h4>
            <div className="session-display-container">
                <i
                    id="work-increment"
                    className="session-item big arrow alternate circle up outline icon"
                    onClick={handleClick}
                ></i>
                <div 
                    id="work-length"
                    className="session-item session-display">
                    {formatTime(workLength)}
                </div>
                <i
                    id="work-decrement"
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
    { updateWork }
)(Session);