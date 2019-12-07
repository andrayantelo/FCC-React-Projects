import { combineReducers } from 'redux';
import { SELECTED_AUDIO,
         MUTE_AUDIO,
         CHANGE_VOLUME,
         TOGGLE_BANK,
         CHANGE_TITLE,
         CHANGE_BUTTON_CLASS } from '../actions';

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

const buttonClassReducer = (className={piano: "ui teal button", heater: "ui teal active button"}, action) => {
    if (action.type === CHANGE_BUTTON_CLASS) {
        return action.payload;
    }
    return className;
}

const changeTitleReducer = (title='Heater', action) => {
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
    title: changeTitleReducer,
    className: buttonClassReducer
})

