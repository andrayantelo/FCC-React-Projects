import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateDisplay, start, pause, reset } from '../actions';
import { formatTime } from '../helpers';


const Display = (props) => {
    const { breakLength,
            sessionLength,
            session,
            startTime,
            stopTime,
            timerRunning,
            elapsed,
            timeRemaining } = props.state;

    const { start, pause, reset, updateDisplay } = props;

    const currentSession = session? sessionLength: breakLength;
    console.log(timeRemaining);

    const handleClick = (event) => {
        const id = event.target.id;
        // get current time left
        if (timerRunning) {
            // if the timer is already running and someone hits start
            // nothing happens, the timer continues

            // if the timer is already running and someone hits pause
            // the timer stops
            if (id === "pause") {
                console.log("pausing");
                pause(Date.now());
            }
            
        }
        else {
            // if the timer is not running and someone hits start,
            // the timer starts
            if (id === "start") {
                console.log("starting");
                start(Date.now());
            }
            // if the timer is not running and someone hits pause, nothing happens
            // reset resets the timer ONLY if timer is not running
            else if (id === "reset") {
                console.log("resetting");
                reset();
            }
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (timerRunning) {
                //update timeRemaining to
                // currentSession - ((Date.now() - start_time) + elapsed)
                let updatedElapsed = (Date.now() - startTime) + elapsed;
                let timeRemaining = currentSession - updatedElapsed;
                console.log(formatTime(timeRemaining));
                updateDisplay(timeRemaining, updatedElapsed);
            }
        }, 1000);
        return () => clearInterval(interval);
      }, [timerRunning, startTime, elapsed, currentSession, updateDisplay]);

    return (
        <div className="display-container">
            <h3 className="ui header">
                Session
            </h3>
            <div className="display">
                {timerRunning? timeRemaining : formatTime(currentSession) }
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
        state: state.state
    }
}

export default connect(
    mapStateToProps,
    {
        updateDisplay,
        start,
        pause,
        reset
    }
)(Display);



/*
class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerRunning: false,
            timeRemaining: 0,
            elapsed: 0,
            currentSession : this.props.state.session? this.props.state.sessionLength: this.props.state.breakLength
        }
    }

    handleClick = (event) => {
        const id = event.target.id;
        // TODO : destructure the variables used
        const { timerRunning } = this.state;
        const { pause, start, reset } = this.props;

        // get current time left
        if (timerRunning) {
            // if the timer is already running and someone hits start
            // nothing happens, the timer continues

            // if the timer is already running and someone hits pause
            // the timer stops
            if (id === "pause") {
                pause(Date.now());
                this.setState({
                    timerRunning: false
                })
            }
            
        }
        else {
            // if the timer is not running and someone hits start,
            // the timer starts
            if (id === "start") {
                start(Date.now());
                this.setState({
                    timerRunning: true,
                    timeRemaining: this.state.currentSession - this.state.elapsed
                }, () => this.runTimer())
            }
            // if the timer is not running and someone hits pause, nothing happens
            // reset resets the timer ONLY if timer is not running
            else if (id === "reset") {
                reset();
                this.setState({
                    timerRunning: false,
                    elapsed: 0,
                    timeRemaining: 0
                })
            }
        }
    }

    runTimer = () => {
        const { timerRunning, timeRemaining, elapsed } = this.state;
        const { startTime } = this.props.state;
        console.log('run timer');
        while (timerRunning && timeRemaining > 0) {
            this.interval = setInterval(() => {
                console.log("one second");
                // update time remaining every second
                let currentElapsed = (Date.now() - startTime) + elapsed;
                this.setState({
                    elapsed: currentElapsed,
                    timeRemaining: this.state.timeRemaining - elapsed
                })
                
            }, 1000)
        }
    }

    render() {
        const {timerRunning, timeRemaining } = this.state;

        return (
            <div className="display-container">
                <h3 className="ui header">
                    Session
                </h3>
                <div className="display">
                    {timerRunning? formatTime(timeRemaining) : formatTime(this.state.currentSession) }
                </div>
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
            </div>
        )
    }
}
*/