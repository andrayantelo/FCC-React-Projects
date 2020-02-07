import React, { Component } from 'react';
import Controls from './Controls';
import { formatTime } from '../helpers';

/*
state {
    startTime: 0,
    pauseTime: 0,
    timerRunning: false,
    currentSession: (whatever the currentsession is),
    display: whatever current session is, or whatever it was before pausing
}
*/

class Display extends Component {
    componentDidMount () {
        this.props.startTimer();
    }

    componentDidUpdate() {
        this.props.stopTimer();
    }

    render() {
        console.log(this.state);
        return(
            <div className="display-container">
                <h3 className="ui header">
                    Session
                </h3>
                <div className="display">
                    {formatTime(this.props.display)}
                </div>
                <Controls handleClick={this.props.handleClick} />
            </div>
        )
    }
}

export default Display;