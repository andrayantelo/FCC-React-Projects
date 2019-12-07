import React from 'react';
import { connect } from 'react-redux';
import { muteAudio, changeVolume, toggleBank, changeTitle, buttonClass } from '../actions';
import './style.css';

const Controls = ({ isMuted,
                    audio,
                    muteAudio,
                    volume,
                    changeVolume,
                    bank,
                    toggleBank,
                    title,
                    changeTitle,
                    className,
                    buttonClass
                    }) => {
    const handleClick = (event) => {
        muteAudio(!isMuted);
    }
    const handleChange = (event) => {
        const bankName = event.target.name;
        bank = 1 - bank;
        const newTitle = bank? "Smooth Piano" : "Heater";
        changeTitle(newTitle);
        toggleBank(bank);
        className[bankName] = 'ui teal active button';
        const inactiveButton = bankName === 'piano'? 'heater': 'piano';
        className[inactiveButton] = 'ui teal button';
        buttonClass(className)
    }

    const handleVolume = (event) => {
        changeVolume(event.target.value);
        const clips = document.querySelectorAll('.clip');
        clips.forEach((clip) => clip.volume=event.target.value/10);
    }

    return (
        <div className="controlsContainer ui inverted segment">
            <div className="powerContainer controls">
                <button 
                    id="powerButton"
                    className="circular ui purple icon button"
                    onClick={handleClick}
                >
                    <i className="large inverted purple power off icon"></i>
                </button>
            </div>
            <div className="title controls">
                {title}
            </div>
            <div className="volumeControl controls">
                <input
                    onChange={handleVolume}
                    type="range"
                    id="start"
                    name="volume"
                    min="0"
                    max="10"
                    value={volume}
                />
            </div>
            <div className="bank controls">
                <div className="ui large buttons">
                    <button 
                        className={className.heater}
                        onClick={handleChange}
                        name="heater"
                    >
                        Heater
                    </button>
                <div className="or"></div>
                    <button 
                        className={className.piano}
                        onClick={handleChange}
                        name="piano"
                    >
                        Smooth Piano
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { audio: state.audio,
             isMuted: state.isMuted,
             volume: state.volume,
             bank: state.bank,
             title: state.title,
             className: state.className
            }
}

export default connect(
    mapStateToProps,
    { muteAudio, changeVolume, toggleBank, changeTitle, buttonClass}
)(Controls);