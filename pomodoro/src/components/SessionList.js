import React from 'react';
import { connect } from 'react-redux';
import Session from './Session';
import { updateBreak, updateWork } from '../actions';

const SessionList = ({ breakLength, sessionLength, updateBreak, updateWork }) => {
    return (
        <div className="sessions-container">
            <Session
                title="Break Length"
                display= { breakLength }
                handler= { updateBreak }
            />
            <Session
                title="Session Length"
                display= { sessionLength }
                handler = { updateWork }
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        breakLength: state.breakLength,
        sessionLength: state.sessionLength
    }
}

export default connect(
    mapStateToProps,
    {
        updateBreak,
        updateWork
    }
)(SessionList);