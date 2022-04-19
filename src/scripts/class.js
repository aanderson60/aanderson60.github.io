var currDate = new Date().getTime();
var seniorDate = new Date("August 22, 2023 07:00:00 CST").getTime();
var intro1 = "I am a"
var intro2 = "electrical engineer planning to graduate in May 2023, or in:"
function checkDate() {
    if (currDate > seniorDate) {
        document.getElementById('classYear').innerHTML = intro1 + " senior " + intro2;
    } else {
        document.getElementById('classYear').innerHTML = intro1 + " junior " + intro2;
    }
    return 0;
}
checkDate();