import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAudio, muteAudio, changeTitle } from '../actions';
import './style.css';

class Key extends Component {
    handleClick = (event) => {
        this.props.selectAudio(this.props.audioSrc);
        this.props.changeTitle(this.props.audioSrc.name);
        const audioId = this.props.audioSrc.keyName;
        const audio = document.getElementById(audioId);
        audio.play();
    }
    handleKeyPress = (event) => {
        if (event.key.toUpperCase() === this.props.audioSrc.keyName) {
            this.handleClick();
        }
        
    }

    componentDidMount = () => {
        document.addEventListener("keydown", e => this.handleKeyPress(e));
    }
    render() {
        return (
            <div className="drum-pad-container">
                <button
                    className="drum-pad ui inverted pink button"
                    onClick={this.handleClick}
                    onKeyPress={(e) => console.log(e)}
                >
                    {this.props.audioSrc.keyName}
                </button>
                <audio
                    className="clip"
                    id={this.props.audioSrc.keyName}
                    src={this.props.audioSrc.link}
                    muted={this.props.isMuted}
                >
    
                </audio>
                
            </div>
        )
    }  
}

const mapStateToProps = (state) => {
    return { isMuted: state.isMuted, volume: state.volume}
}
 

export default connect(
    mapStateToProps,
    { selectAudio, muteAudio, changeTitle }
)(Key);