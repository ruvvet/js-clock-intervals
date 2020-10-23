time = () => {
    let date = new Date();
    let s = date.getSeconds();
    let m = date.getMinutes();
    let h = date.getHours();

    document.querySelector('#second').style.transform = "rotate(" + s + "deg)";
    document.querySelector('#minute').style.transform = "rotate(" + m + "deg)";
    document.querySelector('#hour').style.transform = "rotate(" + h + "deg)";

    // while (r<60) {
    //     r++;
    //     document.querySelector('#second').style.transform = "rotate(" + (r) + "deg)";

    // }

    requestAnimationFrame(time);


}

time();