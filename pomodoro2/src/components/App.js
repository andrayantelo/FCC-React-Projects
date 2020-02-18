import React, { Component } from 'react';
import SessionList from './SessionList';
import Display from './Display';
import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breakLength: 3*1000,
            workLength: 120*1000,
            startTime: 0,
            pauseTime: 0,
            timerRunning: false,
            currentSession: "workLength",
            display: 120*1000
        }
    }

    incrementLength = (session) => {
        // TODO
        // if workLength is the one being updated,
        // then we need to update the display as well.
        const toUpdate = session === "Break" ? "breakLength" : "workLength";
        this.setState((prevState) => {
            if (toUpdate === "workLength") {
                return {
                        ...prevState,
                        display: prevState[toUpdate] + 60000,
                        [toUpdate]: prevState[toUpdate] + 60000
                }
            }
            return {
                ...prevState,
                [toUpdate]: prevState[toUpdate] + 60000
            }
        }, () => console.log(this.state))
    }

    decrementLength = (session) => {
        const toUpdate = session === "Break" ? "breakLength" : "workLength";
        this.setState((prevState) => {
            if (prevState[toUpdate] <= 60000) {
                return prevState;
            }
            else if (toUpdate === "workLength") {
                return {
                        ...prevState,
                        display: prevState[toUpdate] - 60000,
                        [toUpdate]: prevState[toUpdate] - 60000
                }
            }
            return {
                ...prevState,
                [toUpdate]: prevState[toUpdate] - 60000
            }
        })
    }

    handleClick = (event) => {
        const action = event.target.id;
        
        if (this.state.timerRunning) {
            // if the timer is already running and someone hits start
            // nothing happens, the timer continues

            // if the timer is already running and someone hits pause
            // the timer stops
            if (action === "pause") {
                // update timerRunning and pauseTime
                this.setState( (prevState) => {
                    return {
                        ...prevState,
                        timerRunning: false,
                        pauseTime: Date.now()
                    } 
                }, () => {
                    console.log(this.state)
                })  
            }
        }
        else {
            // if the timer is not running and someone hits start,
            // the timer starts
            if (action === "start") {
                // update timerRunning and startTime
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        timerRunning: true,
                        startTime: Date.now()
                    }
                })
            }
            // if the timer is not running and someone hits pause, nothing happens
            // reset resets the timer ONLY if timer is not running
            else if (action === "reset") {
                // update startTime, pauseTime, display, and maybe some others
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        timerRunning: false,
                        startTime: 0,
                        pauseTime: 0,
                        display: prevState[prevState.currentSession]
                    }
                })
            }
        }
    }

    startTimer = () => {
            this.interval = setInterval(() => { 
                //update timeRemaining to
                if (this.state.timerRunning) {
                    let newDisplay = this.state[this.state.currentSession] - (Date.now() - this.state.startTime);
                    this.setState((prevState) => {
                        return {
                            ...prevState,
                            display: newDisplay
                        }   
                    })
                }  
            }, 1000);
    }

    stopTimer = () => {
        if (this.state.display < 0) {
            // switch timer to other session
            // hard code for now TODO - change this
            this.setState((prevState) => {
                return {
                    ...prevState,
                    currentSession: prevState === "workLength"? "breakLength": "workLength",
                    display: 3*1000
                }
            })
        }
        else if (!this.state.timerRunning) {
            clearInterval(this.interval);
        }
    }

    render() {
        console.log('rerendering App');
        console.log(this.state);
        return (
            <div className="container">
                <div className="inner-container ui teal inverted segment">
                    <div className="outer-row">
                        <h1 className="ui centered huge header">Pomodoro</h1>
                    </div>
                    <div className="outer-row">
                        <SessionList
                            breakLength={this.state.breakLength}
                            workLength={this.state.workLength}
                            incrementLength={this.incrementLength}
                            decrementLength={this.decrementLength}
                            handler={this.updateLength}
                        />
                    </div>
                    <div className="outer-row">
                        <Display
                            handleClick={this.handleClick}
                            startTimer={this.startTimer}
                            stopTimer={this.stopTimer}
                            display={this.state.display}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
