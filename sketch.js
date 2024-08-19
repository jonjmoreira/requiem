var requiem = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(244,32,122,110)
    requiem = [ 
        loadSound('static/01-Introitus.mp3'), 
        loadSound('static/02-Kyrie.mp3')
    ]
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {

}

function playSong() {
    if (!requiem[0].isPlaying()) {
        requiem[0].play()
        document.getElementById('controlBtn').innerText = 'Pause'
        console.log("Play")
    } else {
        requiem[0].pause()
        document.getElementById('controlBtn').innerText = 'Play'
        console.log("Pause")
    }
}