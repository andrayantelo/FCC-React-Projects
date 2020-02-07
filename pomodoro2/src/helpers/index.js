const leadingZero = (num) => {
    if (num < 10 && num >=0 ) {
        return `0${num}`;
    }
    return `${num}`;
}

export const formatTime = (milliseconds) => {
    // from milliseconds to
    // min:ss

    // get minutes first, then the remainder is the seconds left
    //let minutes = Math.floor(milliseconds/60000);
    // get the remainder (which is the remaining milliseconds),
    // then convert it to seconds
    //let seconds = leadingZero(Math.round((milliseconds%60000)/1000));
    let seconds = leadingZero(Math.floor((milliseconds/1000)%60));
    let minutes = Math.floor(milliseconds/(1000*60)%60);
    
    return `${minutes}:${seconds}`;
}

export const timeToMs = (time) => {
    // time format mm:ss to milliseconds
    time = time.split(":");
    time = time.map(num => parseInt(num));
    time[0] = time[0]*60000;
    time[1] = time[1]*1000;
    time = time.reduce((a, b) => a + b, 0);
    return time;
}