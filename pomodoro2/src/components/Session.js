import React from 'react';
import { connect } from 'react-redux';
import { updateWork, updateBreak } from '../actions';
import { formatTime } from '../helpers';

const Session = (props) => {

    const handleClick = (event) => {
        console.log(event.target.id);
        if (props.timerRunning) {
            return;
        }
        else if (props.title === "Break") {
            props.updateBreak(event.target.id);
        }
        else {
            props.updateWork(event.target.id);
        }
    }

    return (
        <div className="session">
            <h4 id={`${props.title.toLowerCase()}-label`} className="ui large header">{ props.title } Length</h4>
            <div className="session-display-container">
                <i
                    id={`${props.title.toLowerCase()}-increment`}
                    className="session-item big arrow alternate circle up outline icon"
                    onClick={handleClick}
                ></i>
                <div 
                    id={`${props.title.toLowerCase()}-length`}
                    className="session-item session-display">
                    {formatTime(props.sessionLength)}
                </div>
                <i
                    id={`${props.title.toLowerCase()}-decrement`}
                    className="session-item big arrow alternate circle down outline icon"
                    onClick={handleClick}
                ></i>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        timerRunning: state.timer.timerRunning
    }
}

export default connect(
    mapStateToProps,
    {
        updateWork,
        updateBreak
    }
)(Session);