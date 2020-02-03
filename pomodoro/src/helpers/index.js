const leadingZero = (num) => {
    if (num < 10 && num >=0 ) {
        return `0${num}`;
    }
    return `${num}`;
}

export const formatTime = (milliseconds) => {
    // from milliseconds to
    // min:ss
    let seconds = leadingZero(Math.floor((milliseconds/1000)%60));
    console.log(seconds);
    let minutes = Math.floor(milliseconds/(1000*60)%60);
    console.log(minutes);
    
    return `${minutes}:${seconds}`;
}

export const timeToMs = (time) => {
    // time format mm:ss to milliseconds
    time = time.split(":");
    time = time.map(num => parseInt(num));
    time[0] = time[0]*60000;
    time[1] = time[1]*1000;
    console.log(time);
    return time;
}

export const startTimer = () => {
// gets current time (time at start)
    return Date.now();
}

export const stopTimer = () => {
// gets time at stop
    return Date.now();
}

export const elapsed = (startTime, stopTime) => {
    // returns stop time - start time
    return stopTime - startTime;
}

export const convertMinToMs = (minutes) => {
    // convert minutes to milliseconds
    return minutes * 60000
}

export const convertMsToMin = (milliseconds) => {
    return milliseconds/60000
}

export const getTimeLeft = (timeString) => {
    // gets a string "mm:ss" and extracts the time left, returns
    // number of milliseconds left
    timeString = timeString.split(':');
    
}

export const countdown = (countdown_time) => {
    // Ever second prints the time remaining in 
    // format "mm:ss"
    
    // while elapsed !== countdown_time

    /*setTimeout(() => {

    }, 1000);*/

}