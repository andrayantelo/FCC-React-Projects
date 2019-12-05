import { combineReducers } from 'redux';
import { SELECTED_AUDIO, MUTE_AUDIO, CHANGE_VOLUME, TOGGLE_BANK, CHANGE_TITLE } from '../actions';

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

const toggleBankReducer = (bank=0, action) => {
    if (action.type === TOGGLE_BANK) {
        return action.payload;
    }
    return bank;
}

const changeTitleReducer = (title='', action) => {
    if (action.type === CHANGE_TITLE) {
        return action.payload;
    }
    return title;
}

export default combineReducers({
    audio: selectAudioReducer,
    isMuted: muteAudioReducer,
    volume: changeVolumeReducer,
    bank: toggleBankReducer,
    title: changeTitleReducer
})

