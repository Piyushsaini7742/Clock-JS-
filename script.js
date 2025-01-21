setInterval(() => {

    d = new Date();
    hourtime = d.getHours();
    mintime = d.getMinutes();
    sectime = d.getSeconds();

    hourrotation = 30 * hourtime + mintime / 2;
    minrotation = 6 * mintime;
    secrotation = 6 * sectime;

    hour.style.transform = `rotate(${hourrotation}deg)`;
    min.style.transform = `rotate(${minrotation}deg)`;
    sec.style.transform = `rotate(${secrotation}deg)`;
}, 1000);