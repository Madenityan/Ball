let delay = 50,
    i = 0;

let startTimer = function(pixels) {
    let myBall = document.getElementById('ball');
    let bottom = myBall.offsetTop;

    if ((pixels > 0 && bottom > 250) || (pixels < 0 && bottom < 90)) {
        clearInterval(timer);

         timer = setInterval(function() {
            startTimer(pixels * -1)
        }, delay);
    }
    myBall.style.top = bottom + pixels + 'px';
    i++;
};

let timer = setInterval(function() {
    startTimer(20)
}, delay);

