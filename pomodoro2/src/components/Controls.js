import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, pauseTimer, resetTimer } from '../actions';
import { formatTime } from '../helpers';

class Controls extends Component {
    constructor(props)  {
        super(props);
        this.timer = null;
    }
    handleClick = (event) => {
        const actionType = event.target.id;
        console.log("actionType: ", actionType);
        const { timerRunning } = this.props.timer;
        const { startTimer, pauseTimer } = this.props;
        console.log("is timer running? ", timerRunning);
        /*
        when you click start, the timer
        starts, so you need to do setInterval
        (if the timer isn't already running)
        */
        if (!timerRunning) {
            console.log("starting timer");
            startTimer();
            if (actionType === "start") {
                this.timer = setInterval(() => {
                    console.log(formatTime(this.props.timer.workLength - (Date.now() - this.props.timer.startTime)))
                }, 1000)
            }
        }
        else {
            if (actionType === "pause") {
                console.log("pausing timer");
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
        resetTimer
    }
)(Controls);