


var min_html = document.getElementById('min')
var seconds_html = document.getElementById('second')
var milliseconds_html = document.getElementById('milliseconds')


var seconds = 0
var miliseconds = 0
var minutes = 0

var watchInterval;


function start () {
    watchInterval=setInterval(function(){
        miliseconds++
        milliseconds_html.innerHTML = miliseconds
        if (miliseconds === 100){
            seconds++
            miliseconds = 0
            seconds_html.innerHTML = seconds
        } 

        if(seconds === 60){
            minutes++
            seconds = 0
min_html.innerHTML=minutes
        }
    },1)
}
function stop () {
    clearInterval(watchInterval)
}
function Reset ()  {
    seconds =0
    minutes = 0
    miliseconds = 0

    milliseconds_html.innerHTML = miliseconds
    seconds_html.innerHTML = seconds
    min_html.innerHTML = minutes
    stop()
}