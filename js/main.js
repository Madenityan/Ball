let myBall = document.getElementById('ball');
let startPosition = 0;

let timer = setInterval(move,10);

function move() {
    let top = myBall.offsetTop;

    if (top < 500) {
        myBall.style.top = top + 10 + 'px';
    }

}

