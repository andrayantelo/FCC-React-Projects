export const SELECTED_AUDIO = 'SELECTED_AUDIO';
export const MUTE_AUDIO = 'MUTE_AUDIO';
export const CHANGE_VOLUME = 'CHANGE_VOLUME';
export const TOGGLE_BANK = 'TOGGLE_BANK';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_BUTTON_CLASS = 'CHANGE_BUTTON_CLASS';

export const selectAudio = (audio) => {
    return {
        type: SELECTED_AUDIO,
        payload: audio
    }
}

export const muteAudio = (isMuted) => {
    return {
        type: MUTE_AUDIO,
        payload: isMuted
    }
}

export const changeVolume = (volume) => {
    return {
        type: CHANGE_VOLUME,
        payload: volume
    }
}

export const toggleBank =  (bank) => {
    return {
        type: TOGGLE_BANK,
        payload: bank
    }
}

export const buttonClass = (className) => {
    return {
        type: CHANGE_BUTTON_CLASS,
        payload: className
    }
}

export const changeTitle = (title) => {
    return {
        type: CHANGE_TITLE,
        payload: title
    }
}

