class Graal {
    constructor() {
        this.size = 20
    }

    display(amp) {
        var vol = amp.getLevel()
        var mag = map(vol, 0, 1, 20, 3000)

        fill(200,200,200)
        strokeWeight(1)
        rotateX(-45)
        rotateY(frameCount * 0.045)
        triangle(
            -mag, mag,
            0, -mag,
            mag, mag
        )
        rotateX(45)
        rotateY(-frameCount * 0.045)
    }
}