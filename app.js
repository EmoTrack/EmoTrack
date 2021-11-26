/* Only register a service worker if it's supported */
var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var isFirefox = /firefox|fxios/.test(navigator.userAgent);
console.log(isIOS);
console.log(isFirefox);

if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('sw.js');

}

//let link = "https://www.soscisurvey.de/demotrack/?l=ger&d=";

function fun1() {
let params1 = new URLSearchParams(document.location.search.substring(1));
let key = params1.get("d"); 
localStorage.setItem('serial', key);
}

function fun2() {
let params = new URLSearchParams(document.location.search.substring(1));
first = parseInt(params.get("first"), 10);
}

fun2();

if (isIOS && (first == 123)) {
document.getElementById("ios-prompt").style.display = "block";
}

if (isFirefox && (first == 123)) {
document.getElementById("firefox-prompt").style.display = "block";
}

if (first == 123) {
document.getElementById("android-prompt").style.display = "block";
}


if (first == 567) {
let params1 = new URLSearchParams(document.location.search.substring(1));
let key = params1.get("d"); 
localStorage.setItem('serial', key);
console.log(key);
link = link+key;
document.write("<table><tr><td>"+"EmoTrack Starten".link(link)+"</td></tr></table>");
}

if (isNaN(first)) {
key= 123;
localStorage.setItem('serial', key);
let serial = localStorage.getItem('serial');
serial = String(serial); 
//window.location.href = link;
document.write("<p>"+serial+"</p>");
}

console.log (first);
