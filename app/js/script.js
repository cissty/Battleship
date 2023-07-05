import '../scss/style.scss'

class Ship {
    constructor(length, timesBeenHit, hasSunk){
        this.length = length;
        this.timesBeenHit = timesBeenHit;
        this.hasSunk = hasSunk;
    }
    hit() {
        this.timesBeenHit++;
    }
    isSunk(){
        let IsShipOut = false;
        if(this.length === this.timesBeenHit){
            IsShipOut = true;
            this.hasSunk = true;
            return `Ship is out: ${IsShipOut}`
        }
        return `Ship is out: ${IsShipOut}`
    }
}
// const ceno = new Ship(5, 4, false)


// class GameBoard {
//     constructor()
// }

// module.exports = {
//     ceno
// }
