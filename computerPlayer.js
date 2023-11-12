// Import the Player class, assuming it's defined in another file or module
class ComputerPlayer extends Player {
  // Method to make a random move on the game board
  makeRandomMove() {
    // Generate a random x-coordinate between 0 and 9
    const x = Math.floor(Math.random() * 10);

    // Generate a random y-coordinate between 0 and 9
    const y = Math.floor(Math.random() * 10);

    // Call the inherited 'attack' method from the Player class to make the move
    this.attack(x, y);
  }
}
// Export the ComputerPlayer class to make it available in other files or modules
module.exports = ComputerPlayer;
