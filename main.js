// Create gameboards for the player and computer
const playerGameboard = new Gameboard();
const computerGameboard = new Gameboard();

// Create player and computer players with their respective gameboards and board IDs
const player = new Player(playerGameboard, 'player-board');
const computerPlayer = new ComputerPlayer(computerGameboard, 'computer-board');

// Add ship placements for the player and computer players here
// Function to render the game boards on the HTML page
function renderGame() {
  // Render the player and computer gameboards
  renderBoard(playerGameboard, 'player-board');
  renderBoard(computerGameboard, 'computer-board');
}
// Function to render a specific gameboard on the HTML page
function renderBoard(gameboard, boardId) {
  // Get the HTML element representing the game board
  const board = document.getElementById(boardId);
  // Clear the board's existing content
  board.innerHTML = '';
  // Loop through each cell on the gameboard
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      // Create a div element for each cell
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.x = i;
      cell.dataset.y = j;
      // Check if the current cell is part of a ship that has been hit
      const shipHit = gameboard.ships.some(ship => ship.x === i && ship.y === j && !ship.ship.isSunk);
      // Check if the current cell is a missed attack
      const isMissed = gameboard.missedAttacks.some(attack => attack.x === i && attack.y === j);
      // Add appropriate CSS class based on the cell's status
      if (shipHit) {
        cell.classList.add('hit');
      } else if (isMissed) {
        cell.classList.add('miss');
      }
      // Append the cell to the game board
      board.appendChild(cell);
    }
  }
}
// Initial rendering of the game boards when the page loads
renderGame();
