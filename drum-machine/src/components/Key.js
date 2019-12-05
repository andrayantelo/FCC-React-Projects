import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAudio, muteAudio } from '../actions';
import './style.css';

class Key extends Component {
    handleClick = (event) => {
        this.props.selectAudio(this.props.audioSrc);
        const audioId = this.props.audioSrc.name;
        const audio = document.getElementById(audioId);
        audio.play();
    }
    handleKeyPress = (event) => {
        if (event.key.toUpperCase() === this.props.keyName) {
            this.handleClick();
        }
        
    }

    componentDidMount = () => {
        document.addEventListener("keydown", e => this.handleKeyPress(e))
    }
    render() {
        return (
            <div className="keyPad">
                <button
                    className="drum-pad"
                    onClick={this.handleClick}
                    onKeyPress={(e) => console.log(e)}
                >
                    {this.props.keyName}
                </button>
                <audio
                    className="clip"
                    id={this.props.audioSrc.name}
                    src={this.props.audioSrc.link}
                    muted={this.props.isMuted}
                >
    
                </audio>
                
            </div>
        )
    }  
}

const mapStateToProps = (state) => {
    return { isMuted: state.isMuted, volume: state.volume }
}
 

export default connect(
    mapStateToProps,
    { selectAudio, muteAudio }
)(Key);