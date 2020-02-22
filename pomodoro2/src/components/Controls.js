import React from 'react';
import { connect } from 'react-redux';
import { startTimer, pauseTimer, resetTimer } from '../actions';

const Controls = (props) => {
    const handleClick = (event) => {
        console.log(event.target.id);
    }
    return (
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
    )
}

export default connect(
    null,
    {
        startTimer,
        pauseTimer,
        resetTimer
    }
)(Controls);