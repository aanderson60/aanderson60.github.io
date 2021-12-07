var gradDate = new Date("May 8, 2023 09:00:00").getTime();

var x = setInterval(function() {
    var currDate = new Date().getTime();
    var timeLeft = gradDate - currDate;
    var days = Math.floor(timeLeft / (1000*60*60*24));
    var hours = Math.floor(timeLeft % (1000*60*60*24) / (1000*60*60));
    var minutes = Math.floor(timeLeft % (1000*60*60) / (1000*60));
    var seconds = Math.floor(timeLeft % (1000*60) / 1000);
    var milisec = Math.floor(timeLeft % 1000);
    var formatMs = milisec.toString().padEnd(3,'0');

    var formattedStr = days + ((days==1) ? " day, " : " days, ") + hours + ((hours==1) ? " hour, " : " hours, ") + minutes + ((minutes==1) ? " minute, " : " minutes, and ") + seconds + "." + formatMs + " seconds.";
    document.getElementById('counter').innerHTML = formattedStr;
    return false;
},10);