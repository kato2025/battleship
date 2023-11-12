// Define a class called Gameboard to represent the game board.
class Gameboard {
  // Constructor initializes the game board with empty arrays for ships and missed attacks.
  constructor() {
      this.ships = [];           // Array to store the ships on the game board.
      this.missedAttacks = [];   // Array to store the coordinates of missed attacks.
  }
  // Method to place a ship on the game board at specified coordinates.
  placeShip(ship, x, y) {
      this.ships.push({ ship, x, y }); // Add ship data to the array of ships.
  }
  // Method to receive an attack at specified coordinates and determine if it's a hit or miss.
  receiveAttack(x, y) {
      let isHit = false; // Flag to track whether the attack is a hit or miss.

      // Iterate through each ship on the game board.
      for (const shipData of this.ships) {
          const { ship, x: shipX, y: shipY } = shipData;
          // Check if the attack coordinates match the coordinates of a ship.
          if (x === shipX && y === shipY) {
              ship.hit();   // If there's a match, call the ship's hit method.
              isHit = true; // Set the flag to indicate a hit.
              break;        // Exit the loop since the attack has been processed.
          }
      }
      // If the attack did not hit any ship, add the coordinates to the array of missed attacks.
      if (!isHit) {
          this.missedAttacks.push({ x, y });
      }
  }
  // Method to check if all ships on the game board are sunk.
  allShipsSunk() {
      // Check if every ship on the game board is sunk by using the 'every' array method.
      return this.ships.every((shipData) => shipData.ship.isSunk);
  }
}
// Export the Gameboard class to make it available for use in other modules.
module.exports = Gameboard;