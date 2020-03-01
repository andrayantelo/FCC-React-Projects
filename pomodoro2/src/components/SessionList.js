import React from 'react';
import { connect } from 'react-redux';
import Session from './Session';

const SessionList = (props) => {
    return (
        <div className="sessions-container">
            <Session
                title="Break"
                sessionLength={props.breakLength}
            />
            <Session
                title="Session"
                sessionLength={props.workLength}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        workLength : state.timer.workLength,
        breakLength : state.timer.breakLength
    }
}

export default connect(
    mapStateToProps
)(SessionList);