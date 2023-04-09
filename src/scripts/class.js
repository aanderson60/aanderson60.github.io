var currDate = new Date().getTime();
var seniorDate = new Date("August 18, 2022 07:00:00 CST").getTime();
var bsDate = new Date("May 13, 2023 14:00:00 CST").getTime();
var intro1 = "I am a"
var intro2 = "electrical engineer planning to graduate in May 2023, or in:"
function checkDate() {
    if (currDate > seniorDate && currDate < bsDate) {
        document.getElementById('classYear').innerHTML = intro1 + " senior " + intro2;
    } else if (currDate > bsDate) {
        document.getElementById('classYear').innerHTML = "I am a graduate electrical engineering student."
    } else {
        document.getElementById('classYear').innerHTML = intro1 + " junior " + intro2;
    }
    return 0;
}
checkDate();