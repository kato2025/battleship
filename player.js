// Define a Player class
class Player {
  // Constructor takes a gameboard and boardId as parameters
  constructor(gameboard, boardId) {
      // Assign the provided gameboard to the player's gameboard property
      this.gameboard = gameboard;
      // Get the HTML element with the specified boardId and assign it to the player's board property
      this.board = document.getElementById(boardId);
      // Add an event listener to the board for 'click' events, calling the handleAttack method when clicked
      this.board.addEventListener('click', this.handleAttack.bind(this));
  }
  // Method to handle the 'click' event on the game board
  handleAttack(event) {
      // Get the clicked target element
      const target = event.target;
      // Retrieve the x and y coordinates from the clicked target's dataset
      const x = parseInt(target.dataset.x);
      const y = parseInt(target.dataset.y);

      // Check if the coordinates are valid numbers
      if (!isNaN(x) && !isNaN(y)) {
          // If valid, call the attack method with the coordinates as arguments
          this.attack(x, y);
      }
  }
  // Method to perform an attack on the opponent's gameboard at the specified coordinates
  attack(x, y) {
      // Call the receiveAttack method of the opponent's gameboard with the specified coordinates
      this.gameboard.receiveAttack(x, y);
      // Render the updated game state (assuming there is a renderGame() function available)
      renderGame();
  }
}
// Export the Player class to be used in other modules
module.exports = Player;
