import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, pauseTimer, resetTimer, tick, switchSessions, checkClock } from '../actions';


class Controls extends Component {
    constructor(props) {
        super(props);
        this.myAudio = React.createRef();
        this.interval = null;
    }

    startStop = () => {
        const { timerRunning } = this.props.timer;
        const { startTimer, pauseTimer} = this.props;
        if (!timerRunning) {
            console.log("start");
            startTimer();
            this.runTimer();
        }
        else {
            console.log("Pause");
            pauseTimer();
            this.stopTimer();
        }
    }

    reset = () => {
        const { resetTimer } = this.props;
        resetTimer();
        this.stopTimer();
    }

    runTimer = () => {
        const { tick, checkClock } = this.props;
 
        this.interval = setInterval(() => {
            tick();
            checkClock(this.playBeep);
        }, 1000)
        

    }

    stopTimer = () => {
        clearInterval(this.interval);
    }

    playBeep = () => {
        if (this.myAudio !== null) {
            this.myAudio.current.play()
          }
    }

    render() {
        return (
            <div>
                <div className="controls">
                    <div
                        id="start_stop"
                        onClick={this.startStop}
                    >
                        <i className="big play circle outline icon"></i>
                        <i className="big pause circle outline icon"></i>
                    </div>
                    <div
                        id="reset"
                        onClick={this.reset}
                    >
                       <i className="big redo icon"></i>
                    </div>
                </div>
                <div>
                    <audio
                        id="beep"
                        type="audio"
                        src="https://goo.gl/65cBl1"
                        ref={this.myAudio}
                    />
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        timer: state.timer
    }
}

export default connect(
    mapStateToProps,
    { startTimer,
      pauseTimer,
      resetTimer,
      tick,
      checkClock,
      switchSessions
    }
)(Controls);