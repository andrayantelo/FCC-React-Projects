import React from 'react';
import { connect } from 'react-redux';
import { muteAudio, changeVolume, toggleBank, changeTitle } from '../actions';
import './style.css';

const Controls = ({ isMuted, audio, muteAudio, volume, changeVolume, bank, toggleBank, title, changeTitle}) => {
    const handleChange = (event) => {
        if (event.target.name === "isMuted") {
            muteAudio(!isMuted);
            return
        }
        bank = 1 - bank;
        const newTitle = bank? "Smooth Piano Kit" : "Heater Kit";
        changeTitle(newTitle);
        toggleBank(bank);
        
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
                    name="isMuted"
                    onChange={handleChange}
                    checked={!isMuted}
                />
                <label>Power</label>
            </div>
            <div className="title">
                {title}
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
            <div className="bank">
                <input
                    type="checkbox"
                    name="bank"
                    onChange={handleChange}
                    checked={bank}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { audio: state.audio,
             isMuted: state.isMuted,
             volume: state.volume,
             bank: state.bank,
             title: state.title
            }
}

export default connect(
    mapStateToProps,
    { muteAudio, changeVolume, toggleBank, changeTitle }
)(Controls);