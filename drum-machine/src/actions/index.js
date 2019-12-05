export const SELECTED_AUDIO = 'SELECTED_AUDIO';
export const MUTE_AUDIO = 'MUTE_AUDIO';
export const CHANGE_VOLUME = 'CHANGE_VOLUME';

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

