import React from 'react';
import { connect } from 'react-redux';
import { updateSession, start, pause, reset } from '../actions';

const Display = (props) => {

    const handleClick = (event) => {
        const id = event.target.id;
        // get current time left
        
        if (id === "start") {
            props.start(Date.now());
        }
        else if (id === "pause") {
            props.pause(Date.now());
        }
        else if (id === "reset") {
            props.reset();
        }
    }
    return (
        <div className="display-container">
            <h3 className="ui header">
                Session
            </h3>
            <div className="display">
                { props.session? props.sessionLength: props.breakLength }
            </div>
            <div className="controls">
                <i
                    id="start"
                    className="big play circle outline icon"
                    onClick={handleClick}
                ></i>
                <i
                    id="pause"
                    className="big pause circle outline icon"
                    onClick={handleClick}
                ></i>
                <i
                    id="reset"
                    className="big redo icon"
                    onClick={handleClick}
                ></i>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { 
        startTime: state.timer.startTime,
        stopTime: state.timer.stopTime,
        elapsed: state.timer.elapsed,
        sessionLength: state.sessionLength,
        breakLength: state.breakLength,
        session: state.session
    }
}

export default connect(
    mapStateToProps,
    {
        updateSession,
        start,
        pause,
        reset
    }
)(Display);