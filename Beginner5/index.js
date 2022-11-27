const timeLabel         = document.getElementById("timeLabel")
const dayLabel          = document.getElementById("dayLabel")
const stopButton        = document.getElementById("stopButton")
const startButton       = document.getElementById("startButton")

let timeState       = true
let timeInterval    = setInterval(update, 1)

function update(){
    let date            = new Date()
    timeLabel.innerHTML = times(date)
    dayLabel.innerHTML  = days(date)
}

function times(time){
    return time.toLocaleString("id-ID", {
        hour     : "2-digit",
        minute   : "2-digit",
        second   : "2-digit",
        fractionalSecondDigits : 2,
        hour12   : false
    })
}

function days(day){
    return day.toLocaleString("id-ID", {
        day     : "numeric",
        month   : "long",
        year    : "numeric"
    })
}

stopButton.onclick = () => {
    if (timeState){
        clearInterval(timeInterval)
        timeState   = false
    } 
}

startButton.onclick = () => {
    if (!timeState){
        timeInterval = setInterval(update, 1)
        timeState   = true
    }
}
