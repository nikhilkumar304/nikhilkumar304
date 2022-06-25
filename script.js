const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');

const newyears = '1 jan 2022';

function countdown(){
const newyearsDate = new Date(newyears);
const currentDate = new Date();

 const Totalseconds = (newyearsDate-currentDate)/1000;

 const days = Math.floor(Totalseconds/3600/24);
 const hours = Math.floor(Totalseconds/3600) %24;
 const mins = Math.floor(Totalseconds/60) %60;
 const seconds = Math.floor(Totalseconds %60);

 daysE1.innerHTML = days;
 hoursE1.innerHTML = hours;
 minsE1.innerHTML = mins;
 secondsE1.innerHTML = seconds;

}
//initial call
countdown();
setInterval(countdown,1000);
