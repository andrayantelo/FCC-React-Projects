import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, pauseTimer, resetTimer, tick } from '../actions';

class Controls extends Component {
    constructor(props)  {
        super(props);
        this.timer = null;
    }
    handleClick = (event) => {
        const actionType = event.target.id;
        const { timerRunning, displayTime } = this.props.timer;
        const { startTimer, pauseTimer, tick } = this.props;
        /*
        when you click start, the timer
        starts, so you need to do setInterval
        (if the timer isn't already running)
        */
        if (!timerRunning) {
            if (actionType === "start") {
                startTimer();
                this.timer = setInterval(() => {
                    console.log("displayTime: ", displayTime);
                    if (displayTime > 0) {
                        tick();
                    }
                    else {
                        console.log("STOP THE TIMER");
                    }
                    
                }, 1000)
            }
        }
        else {
            if (actionType === "pause") {
                pauseTimer();
                clearInterval(this.timer);
            }
        }
    }
    render() {
        return (
            <div className="controls">
                <i
                    id="start"
                    className="big play circle outline icon"
                    onClick={this.handleClick}
                ></i>
                <i
                    id="pause"
                    className="big pause circle outline icon"
                    onClick={this.handleClick}
                ></i>
                <i
                    id="reset"
                    className="big redo icon"
                    onClick={this.handleClick}
                ></i>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { timer: state.timer }
}

export default connect(
    mapStateToProps,
    {
        startTimer,
        pauseTimer,
        resetTimer,
        tick
    }
)(Controls);