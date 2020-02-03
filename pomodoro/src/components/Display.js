import React, { Component } from 'react';
import { formatTime } from '../helpers';


class Display extends Component {
    constructor(props) {
        super(props);
        this.timerInterval = null;
        this.state = {
            currentSession : 25*60000,
            timerRunning: false,
            elapsed: 0,
            timeRemaining: 25*60000,
            startTime: 0,
            stopTime: 0
        }
    }

    handleClick = (event) => {
        const id = event.target.id;

        // get current time left
        if (this.state.timerRunning) {
            // if the timer is already running and someone hits start
            // nothing happens, the timer continues

            // if the timer is already running and someone hits pause
            // the timer stops
            if (id === "pause") {
                console.log("pause");            
                this.setState(() => {
                    return {
                        timerRunning: false,
                        stopTime: Date.now()
                    }
                })
            }
            
        }
        else {
            // if the timer is not running and someone hits start,
            // the timer starts
            if (id === "start") {
                this.setState(() => {
                    return {
                        timerRunning: true,
                        startTime: Date.now()
                    }
                })
            }
            // if the timer is not running and someone hits pause, nothing happens
            // reset resets the timer ONLY if timer is not running
            else if (id === "reset") {
                this.setState(() => {
                    return {
                        startTime: 0,
                        stopTime: 0,
                        elapsed: 0
                    }
                })
            }
        }
    }

    updateClock = () => {
        this.timerInterval = setInterval(() => {
            if (this.state.timerRunning) {
                //update timeRemaining to
                let elapsed = (Date.now() - this.state.startTime);
                let timeRemaining = this.state.currentSession - elapsed;
                this.setState(() => {
                    return {
                        elapsed,
                        timeRemaining
                    }
                })
            }
        }, 1000);
    }

    componentDidMount = () => {
        this.updateClock();
    };

      componentWillUnmount = () => {
          return () => clearInterval(this.timerInterval);
      }

    render() {

        return (
            <div className="display-container">
                <h3 className="ui header">
                    Session
                </h3>
                <div className="display">
                    {formatTime(this.state.timeRemaining)}
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


export default Display;



/*

const Display = (props) => {
    // startTime, elapsed, currentSession, timeRemaining
    //let initialState = {
    //    start: 0,
    //    elapsed: 0,
    //    currentSession: 25*60000,
    //    timeRemaining: 25*60000
    //}

    const { state, setState } = initialState;
    
    const dispatch = useDispatch();

    const { breakLength,
            sessionLength,
            session,
            startTime,
            stopTime,
            timerRunning,
            elapsed,
            timeRemaining
         } = props.state;

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
                //let updatedElapsed = (Date.now() - startTime) + elapsed;
                //let timeRemaining = currentSession - updatedElapsed;
                dispatch({type: 'UPDATE_DISPLAY'});
            }
        }, 1000);
        return () => clearInterval(interval);
      }, [timerRunning]);

    return (
        <div className="display-container">
            <h3 className="ui header">
                Session
            </h3>
            <div className="display">
                {timerRunning? formatTime(timeRemaining) : formatTime(currentSession) }
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

*/