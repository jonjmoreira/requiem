class Altar {
    constructor() {
        this.size = 200
        this.rotationDegree = 120
        this.maxCount = 100
        this.counter = 1
        this.switcher = 1
    }

    display() {
        this.counter += this.switcher
        if (this.counter > 100 || this.counter < 0) {
            this.switcher *= (-1)
        }

        var xDetail = Math.floor(map(this.counter, 1, 100, 3, 3).valueOf())
        var yDetail = Math.floor(map(this.counter, 1, 100, 8, 16).valueOf())

        this.color = color(100,100,50,80)
        
        fill(this.color)
        strokeWeight(1)
        stroke(250, 50, 50, 100)

        push()
        translate(0, 0, -this.size * 2)
        rotateX(-this.rotationDegree)
        rotateZ(frameCount)
        torus(this.size, this.size / 3, xDetail, yDetail)
        pop()
    }
}