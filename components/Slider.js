class Slider extends p5.Element {
    constructor(pos, duration) {
        super();
        this.pos = pos;
        this.duration = duration;
    }

    show() {
        line(this.pos.x - 50, this.pos.y,
            this.pos.x + 50, this.pos.y
        )

        point(this.pos.x, this.pos.y)
    }

}