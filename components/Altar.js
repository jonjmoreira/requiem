class Altar {
    constructor() {
        this.size = 200
        this.rotationDegree = 120
        this.counter = 1
        this.switcher = 1
    }

    display() {
        this.counter += this.switcher
        if (this.counter > 100 || this.counter < 0) {
            this.switcher *= (-1)
        }

        var xDetail = Math.floor(map(this.counter, 1, 100, 2, 24).valueOf())
        var yDetail = Math.floor(map(this.counter, 1, 100, 2, 16).valueOf())

        this.color = color(100,100,50,80)
        
        fill(this.color)
        strokeWeight(2)
        stroke(200, 50, 0, 100)

        push()
        translate(0, 0, -this.size * 2)
        rotateX(-this.rotationDegree)
        rotateZ(frameCount)
        torus(this.size, this.size / 2, xDetail, yDetail)
        pop()
    }
}