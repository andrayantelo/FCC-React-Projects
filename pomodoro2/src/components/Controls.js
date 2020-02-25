import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, pauseTimer, resetTimer } from '../actions';

class Controls extends Component {
    constructor(props)  {
        super(props);
        this.timer = null;
    }
    handleClick = (event) => {
        const actionType = event.target.id;
        console.log("actionType: ", actionType);
        const { timerRunning } = this.props;
        console.log("is timer running? ", timerRunning);
        /*
        when you click start, the timer
        starts, so you need to do setInterval
        (if the timer isn't already running)
        */
        if (!timerRunning) {
            console.log('timer is not running');
            startTimer();
            /*if (actionType === "start") {
                this.timer = setInterval(() => {
                    console.log("one second passed");
                }, 1000)
            }*/
        }
        else {
            if (actionType === "pause") {
                console.log("pausing timer");
                pauseTimer();
                //clearInterval(this.timer);
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
    return { timerRunning: state.timer.timerRunning }
}

export default connect(
    mapStateToProps,
    {
        startTimer,
        pauseTimer,
        resetTimer
    }
)(Controls);