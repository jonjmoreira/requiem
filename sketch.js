var song, songLen;
var amp, vol, mag;
var playBtn;
var vlmSlider, sngSlider;
var vlmSliderLabel, sngSliderLabel;
var songButton;
var graal;
var hasLoaded = false;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    song = loadSound('static/01-Introitus.mp3', contentLoaded)
    amp = new p5.Amplitude();

    vlmSlider = createSlider(0, 1, 0.5, 0.01)
    vlmSlider.id('vlmSlider')
}

function contentLoaded() {
    songLen = song.duration()

    sngSlider = createSlider(0, songLen, 0, 0.01)
    sngSlider.id('sngSlider')
    sngSlider.mouseClicked(jumpSlide)

    playBtn = createButton('Play')
    playBtn.position(20,50)
    playBtn.mouseClicked(playSong)

    vlmSliderLabel = createElement('label', 'Volume')
    vlmSliderLabel.attribute('for', 'vlmSlider')
    vlmSliderLabel.position(160, 80)
    vlmSlider.position(20, 80)

    sngSliderLabel = createElement('label', 'Song Control')
    sngSliderLabel.attribute('for', 'sngSlider')
    sngSliderLabel.position(160, 100)
    sngSlider.position(20, 100)

    songButton = new Button()
    graal = new Graal()

    hasLoaded = true;
}

function mouseClicked() {
    if (songButton.clicked()) {
        playSong()
    }
}

function playSong() {
    if (!song.isPlaying()) {
        song.play()
        playBtn.html('Pause')
        console.log("Play")
    } else {
        song.pause()
        playBtn.html('Play')
        console.log("Pause")
    }
}

function jumpSlide() {
    song.jump(sngSlider.value())
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    song.setVolume(vlmSlider.value())

    background(0,0,0,200)

    // Show Play/Pause Button if the song has been loaded
    if (hasLoaded) {
        songButton.display()
        graal.display(amp)
    }
}
