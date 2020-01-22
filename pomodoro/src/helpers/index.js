export const formatTime = (time) => {
    return `${time}:00`;
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