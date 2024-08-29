class Button {
    constructor(){
        this.buttonType = 'play'
        this.maxCount = 100
        this.counter = random(0, this.maxCount)
        this.switcher = 0.1
        this.desiredY = height * 0.1
        this.size = 15;
    }

    display() {
        this.updateCoordinates()

        // Construct the color
        this.counter += this.switcher
        if (this.counter > 100 || this.counter < 0) {
            this.switcher *= (-1)
        }

        var h = map(this.counter, 0, this.maxCount, 20, 340 )
        var s = map(this.counter, 0, this.maxCount, 70, 80)
        var b = map(this.counter, 0, this.maxCount, 85, 100)
        var alpha = map(this.counter, 0, this.maxCount, 80, 90)
        this.color = color(h, s, b, alpha)
        fill(this.color)
        noStroke()

        // Translate the position to draw the shape
        push()
        translate(0, this.y)

        // Verify buttonType to decide which button to draw
        switch(this.buttonType) {
            case 'play':
                // Draw the play button
                triangle(
                    -this.size, -this.size,
                    this.size + 1, 0,
                    -this.size, this.size,
                )
                break
            case 'pause':
                // Draw the pause button
                rectMode(CENTER)
                rect(
                    -this.size / 2, 0, 
                    this.size / 2, this.size * 2
                )
                rect(
                    this.size / 2, 0, 
                    this.size / 2, this.size * 2
                )
                break
        }

        // Undo transformations
        pop()
    }

    clicked() {
        // Check if the click coordinates matches the button's coordinates
        if (dist(mouseX, mouseY, this.x, this.desiredY) < this.size * 1.5) {
            this.update()

            // The return is necessary in order to show the button properly
            return true
        } else {
            return false
        }
    }

    update() {
        // Modify buttonType based on the current value
        switch(this.buttonType) {
            case 'play':
                this.buttonType = 'pause'
                break
            case 'pause':
                this.buttonType = 'play'
                break
            default:
                break
        }
    }

    updateCoordinates() {
        this.x = width / 2
        this.y = (-height / 2) + this.desiredY
    }
}