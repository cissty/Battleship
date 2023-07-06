class Ship {
    constructor(name ,length, timesBeenHit, hasSunk){
        this.name = name;
        this.length = length;
        this.timesBeenHit = timesBeenHit;
        this.hasSunk = hasSunk;
    }
    hit() {
        this.timesBeenHit++;
        if(this.length === this.timesBeenHit){
            this.hasSunk = true;
        }
    }
    isSunk(){
        if(this.length === this.timesBeenHit){
            return `Ship is out: ${this.hasSunk}`
        }else{
             return `Ship is out: ${this.hasSunk}`
        }
    }
}

class GameBoard {
    constructor(columns, rows){ // coordinates of the ships.
        this.columns = columns;
        this.rows = rows;
        this.ships = [];
        this.receivedAttackCoordinates = [];
        this.missedAttackCoordinates = [];
    }

      placeShips(ship, startColumn, startRow, endColumn, endRow) {
        ship.startColumn = startColumn;
        ship.startRow = startRow;
        ship.endColumn = endColumn;
        ship.endRow = endRow;
        this.ships.push(ship);
      }

      isHit(column, row) {
        for (const ship of this.ships) {
          if (
            column >= ship.startColumn &&
            column <= ship.endColumn &&
            row >= ship.startRow &&
            row <= ship.endRow ){
            return ship;
          }
        }
        return null;
      }
   // keep records the coordinates of the missed shots and hit shots.
    receiveAttack(ship,column, row) {
        const attackedShip  = this.ships.find(s => s === ship && this.isHit(column, row));
        if (attackedShip) {
            attackedShip.hit();
            console.log(`Ship ${attackedShip.name} hit!`);
            this.receivedAttackCoordinates.push({ column, row });
        } else {
            console.log('It was a Miss!');
            this.missedAttackCoordinates.push({ column, row });
    }
  }
}
const destroyer  = new Ship('destroyer',5, 2, false)
const carrier  = new Ship('carrier',3, 0, false)
const gameBoard = new GameBoard(10, 10);

gameBoard.placeShips(destroyer, 1, 4, 4, 4);
gameBoard.placeShips(carrier, 1, 4, 4, 4);

gameBoard.receiveAttack(destroyer, 2,4)
gameBoard.receiveAttack(carrier, 7,4)

