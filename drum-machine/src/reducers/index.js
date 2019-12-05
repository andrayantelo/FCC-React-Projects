import { combineReducers } from 'redux';
import { SELECTED_AUDIO, MUTE_AUDIO, CHANGE_VOLUME } from '../actions';

const selectAudioReducer = (initialState = {}, action) => {
    if (action.type === SELECTED_AUDIO) {
        return action.payload;
    }
    return initialState;
};

const muteAudioReducer = (isMuted = false, action) => {
    if (action.type === MUTE_AUDIO) {
        return action.payload;
    }
    return isMuted;
}

const changeVolumeReducer = (volume= 5, action) => {
    if (action.type === CHANGE_VOLUME) {
        return action.payload;
    }
    return volume;
}

export default combineReducers({
    audio: selectAudioReducer,
    isMuted: muteAudioReducer,
    volume: changeVolumeReducer
})

