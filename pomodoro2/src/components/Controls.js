import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { startTimer, pauseTimer, resetTimer, tick, switchSessions } from '../actions';

const Controls = (props) => {
    const { timerRunning,
            displayTime } = props.timer;
    const { startTimer,
            pauseTimer,
            resetTimer,
            tick,
            switchSessions } = props;

    const handleClick = (event) => {
        const actionType = event.target.id;
        if (actionType === "start_stop") {
            if (timerRunning) {
                pauseTimer();
            }
            else {
                startTimer();
            }
        }
        else if (actionType === "pause") {
            pauseTimer();
        }
        else if (actionType === "reset") {
            resetTimer();
        }
    }

    useEffect(() => {
        let timer;
        if (timerRunning && displayTime >= 0) {
            timer = setInterval(() => {
                tick();
            }, 1000)
        }
        else if (displayTime < 0) {
            switchSessions();
        }
        return () => clearInterval(timer);
    }, [timerRunning, displayTime, tick, switchSessions]);

    return (
        <div>
            <div className="controls">
                <i
                    id="start_stop"
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
            <div>
                <audio
                    id="beep"
                    preload="auto" 
                    src="https://goo.gl/65cBl1"
                    //ref={(audio) => { this.audioBeep = audio; }}
                />
            </div>
        </div>

    )
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
        tick,
        switchSessions
    }
)(Controls);