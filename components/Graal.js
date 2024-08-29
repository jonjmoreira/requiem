class Graal {
    constructor() {
        this.size = 20
        this.ampHits = []
    }

    display(amp) {
        var vol = amp.getLevel()
        var mag = map(vol, 0, 1, 0, -height)

        var magHits = map(vol, 0, 1, height / 4, -height)
        this.ampHits.push(magHits)

        strokeWeight(2)
        stroke(50, 100, 50, 100)

        beginShape()
            noFill()
            if (this.ampHits.length > width) {
                this.ampHits.splice(0, dist(0, this.ampHits.length, 0, width))
            }
            for (var i = 0; i < this.ampHits.length; i++) {
                vertex((-width / 2) + i, this.ampHits[i])
            }
        endShape()

        fill(50, 100, 50, 100)

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