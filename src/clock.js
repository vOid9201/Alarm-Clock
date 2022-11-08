/*related to the clock functioning */

let curr = new Date();

let inSecs = curr.getSeconds()*(360 / 60) + "deg";
let inMins = (curr.getMinutes()*60 + curr.getSeconds())*(360 / 3600) + "deg";
let inHrs = (curr.getHours()*60*60 + curr.getMinutes()*60 + curr.getSeconds())*(360 / 43200) + "deg";

let fiSecs = (curr.getSeconds()*(360 / 60) + 359) + "deg";
let fiMins = ((curr.getMinutes()*60 + curr.getSeconds())*(360 / 3600) + 359) + "deg";
let fiHrs =  ((curr.getHours()*60*60 + curr.getMinutes()*60 + curr.getSeconds())*(360 / 43200) + 359) + "deg";
let r = document.querySelector(':root');

// console.log(inSecs , inMins , inHrs , fiSecs , fiMins , fiHrs);

r.style.setProperty('--ini-second', inSecs);
r.style.setProperty('--ini-minute' , inMins);
r.style.setProperty('--ini-hour' , inHrs);

r.style.setProperty('--fi-second' , fiSecs);
r.style.setProperty('--fi-minute' , fiMins);
r.style.setProperty('--fi-hour' , fiHrs);

document.getElementById('second').classList.add('anim-second');
document.getElementById('minute').classList.add('anim-minute');
document.getElementById('hour').classList.add('anim-hour');

