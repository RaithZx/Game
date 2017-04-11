// window.addEventListener("load", init)

let canvas = document.getElementById("canvas")
let c = canvas.getContext('2d')


// function init() {
    // let game = new Game(0,0,600,600)
    // let game = new Game(0,0,600,500)

    // var player = new Player(20, 20, 10, 10)
    // player.draw()

// }

class Player {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
    draw() {
        c.fillStyle = "white"
        c.fillRect(this.x, this.y, this.width, this.height)
    }
}

class Game {
    constructor(x, y, width, height) {
        canvas.width = width
        canvas.height = height
        c.fillStyle = "black"
        c.fillRect(0, 0, width, height);

        let player = new Player(50,50,10,10)
        player.draw()
    }

    update() {
        
    }

    draw() {


    }
}

let game = new Game(0,0,600,600)