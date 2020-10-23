time = () => {

    let deg = 0;

    rotate = (deg) => {
        r = deg*((2 * Math.PI) /12)
        return r++
    }



    let seconds = setInterval(rotate(deg), 1000);
    console.log(seconds);

    //Date.get





}

time();