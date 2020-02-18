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
    componentDidMount() {
        this.props.startTimer();
    }

    componentDidUpdate() {
        this.props.stopTimer();
    }

    render() {
        let displayClass = 'display';
        if (this.props.display <= 60000 && this.props.display > 0) {
            displayClass += ' critical';
        }
        return(
            <div className="outer-display-container">
                <div className="display-container">
                    <h3 className="ui header">
                        Session
                    </h3>
                    <div className={displayClass}>
                        {formatTime(this.props.display)}
                    </div>
                    <Controls handleClick={this.props.handleClick} />
                </div>
            </div>
        )
    }
}

export default Display;