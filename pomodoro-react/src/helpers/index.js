const leadingZero = (num) => {
    if (num < 10 && num >=0 ) {
        return `0${num}`;
    }
    return `${num}`;
}

export const formatTime = (milliseconds) => {
    
    let seconds = leadingZero(Math.floor((milliseconds/1000)%60));
    let minutes = Math.floor(milliseconds/(1000*60)%60);
    
    let hours = ("0" + Math.floor((milliseconds / 3600000) % 60));
    if (hours === 1) {
        return `60:00`
    }

    return `${minutes}:${seconds}`;
}