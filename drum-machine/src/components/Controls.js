import React from 'react';
import { connect } from 'react-redux';
import { muteAudio, changeVolume } from '../actions';
import './style.css';

const Controls = ({ isMuted, audio, muteAudio, volume, changeVolume}) => {
    const handleChange = (event) => {
        muteAudio(!isMuted);
    }

    const handleVolume = (event) => {
        changeVolume(event.target.value);
        const clips = document.querySelectorAll('.clip');
        clips.forEach((clip) => clip.volume=event.target.value/10);
    }

    return (
        <div>
            <div className="powerContainer">
                <input
                    type="checkbox"
                    onChange={handleChange}
                    checked={!isMuted}
                />
                <label>Power</label>
            </div>
            <div className="title">
                {audio.name}
            </div>
            <div className="volumeControl">
                <input
                    onChange={handleVolume}
                    type="range"
                    id="start"
                    name="volume"
                    min="0"
                    max="10"
                    value={volume}
                />
                <label htmlFor="volume">Volume</label>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { audio: state.audio,
             isMuted: state.isMuted,
             volume: state.volume
            }
}

export default connect(
    mapStateToProps,
    { muteAudio, changeVolume }
)(Controls);