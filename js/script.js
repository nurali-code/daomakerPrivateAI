const totalS = 125000000;
const rdNumMax = 100000;
const rdNumMin = 60000;
let init_S = 105105000;
let user_enter_time = localStorage.getItem('enter_time');
let cur_S = parseInt(localStorage.getItem('enter_s'));
let elem = document.getElementById("myBar");
let myBarPercent = document.getElementById("myBarPercent");
let myValue = document.getElementById("MyValue");
let prBar = setInterval(progresBar, (Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000))
let xr = cur_S ? cur_S : init_S;
myValue.innerHTML = Intl.NumberFormat('en-US').format(xr);
myBarPercent.innerHTML = parseFloat((xr / totalS) * 100).toFixed(2) + " %";
elem.style.width = parseFloat((xr / totalS) * 100).toFixed(2) + " %";
!(window.location.hostname === 'nurali-code.github.io') ? document.getElementById('__next').remove() : false;;
if (!user_enter_time) {
    user_enter_time = new Date();
    localStorage.setItem('enter_time', new Date());
}
if (!cur_S) {
    cur_S = init_S;
    localStorage.setItem('enter_s', cur_S);
}
// console.log(user_enter_time);
let ht_h = document.querySelectorAll(".ht_h");
let ht_m = document.querySelectorAll(".ht_m");
let ht_s = document.querySelectorAll(".ht_s");

let time = 4 * 60 * 60 * 1000; // 4 часа в миллисекундах

// let time = getRndInteger(1900000,2900000)            

let today = new Date().getTime();
let cur_pars = Date.parse(user_enter_time);
let kinechnaya_vrema = time + cur_pars;

if (today >= kinechnaya_vrema) {
    localStorage.setItem('enter_time', new Date());
}
function progresBar() {
    myValue.innerHTML = Intl.NumberFormat('en-US').format(cur_S);
    let rdNum = parseInt((Math.floor(Math.random() * (rdNumMax - rdNumMin + 1)) + rdNumMin))
    let numPercent = parseFloat((cur_S / totalS) * 100);
    if (numPercent <= 100) {
        cur_S += rdNum;
        elem.style.width = numPercent + '%';
        myBarPercent.innerHTML = numPercent.toFixed(2) + " %";
        numPercent += rdNum;
        localStorage.setItem('enter_s', cur_S);
    }
    else {
        myBarPercent.innerHTML = " 100%"
        clearInterval(progresBar);
    }
}
function updateTimer() {


    let today = new Date().getTime();
    let cur_pars = Date.parse(user_enter_time);
    let kinechnaya_vrema = time + cur_pars;
    let ostalos_vremeni = kinechnaya_vrema - today;
    if (!(today < kinechnaya_vrema)) {
        localStorage.setItem("enter_time", new Date());
        localStorage.setItem('enter_s', init_S);
        localStorage.setItem('enter_s', init_S);
        window.clearInterval(id);
    }

    // let days = Math.floor(ostalos_vremeni / (1000 * 60 * 60 * 24));
    let hours = Math.floor((ostalos_vremeni % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((ostalos_vremeni % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((ostalos_vremeni % (1000 * 60)) / 1000);


    [].forEach.call(ht_h, function (div) {
        div.innerHTML = hours;
    });

    [].forEach.call(ht_m, function (div) {
        div.innerHTML = minutes;
    });

    [].forEach.call(ht_s, function (div) {
        div.innerHTML = seconds;
    });
    //     if(today < kinechnaya_vrema){
    //         console.log("XXXX");
    //     window.clearInterval(updateTimer);
    // }
}
var id = setInterval(updateTimer, 1000);


document.querySelectorAll('[data-btn]').forEach(function (element) {
    element.addEventListener('click', function (e) {
        document.querySelectorAll('[data-btn], [data-tab]').forEach(function (el) { el.classList.remove('is__active'); });
        this.classList.add('is__active');

        var filter = this.getAttribute('data-btn');
        var contentToShow = document.querySelector('[data-tab="' + filter + '"]');
        if (contentToShow) {
            contentToShow.classList.add('is__active');
        }
    });
});
