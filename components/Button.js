class Button {
    color

    constructor(){
        this.buttonType = 'play'
        this.counter = random(0, 255)
        this.switcher = 1
        this.buttonHeight = -height / 2.5
        this.x = width / 2
        this.y = (height / 2) - (height / 2.5)
        this.size = 15;
    }

    display() {
        this.updateCoordinates

        // Construct the color
        this.counter += this.switcher
        if (this.counter > 255 || this.counter < 0) {
            this.switcher *= (-1)
        }
        var r = map(this.counter, 0, 255, 100, 120)
        var g = map(this.counter, 0, 255, 50, 150)
        var b = map(this.counter, 0, 255, 150, 200)
        var alpha = map(this.counter, 0, 255, 150, 255)
        this.color = color(r, g, b, alpha)
        fill(this.color)
        strokeWeight(0)

        // Translate the position to draw the shape
        translate(0, this.buttonHeight)

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

        // Translate back after drawing so it won't mess up the others
        translate(0, -this.buttonHeight)
    }

    clicked() {
        // Check if the click coordinates matches the button's coordinates
        if (dist(mouseX, mouseY, this.x, this.y) < this.size * 1.5) {
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
        this.y = (height / 2) - (height / 2.5)
        console.log(x, y)
    }
}