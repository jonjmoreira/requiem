class Graal {
    constructor() {
        this.size = 20
    }

    display(amp) {
        var vol = amp.getLevel()
        var mag = map(vol, 0, 1, 20, 3000)

        fill(50, 100, 50, 100)
        strokeWeight(1)

        push()
        rotateX(-45)
        rotateY(frameCount)
        triangle(
            -mag, mag,
            0, -mag,
            mag, mag
        )
        pop()
    }
}