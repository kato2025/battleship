// Define a class named Ship to represent a ship in a game
class Ship {
  // Constructor method to initialize a ship with a given length
  constructor(length) {
    // Set the length of the ship
    this.length = length;
    // Initialize the number of hits on the ship to 0
    this.hits = 0;
    // Initialize the status of the ship to not sunk
    this.isSunk = false;
  }
  // Method to record a hit on the ship
  hit() {
    // Increment the number of hits
    this.hits += 1;
    // Check if the number of hits is equal to the length of the ship
    if (this.hits === this.length) {
      // If so, set the isSunk property to true
      this.isSunk = true;
    }
  }
}
// Export the Ship class to make it available for use in other modules
module.exports = Ship;

  