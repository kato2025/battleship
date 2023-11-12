// Import the necessary classes from their respective modules
const Gameboard = require('../gameboard');
const Ship = require('../ship');

// Test for the 'receiveAttack' function
test('receiveAttack function', () => {
  // Create a new instance of the Gameboard class
  const gameboard = new Gameboard();
  
  // Create a new Ship instance with a length of 3
  const ship = new Ship(3);
  
  // Place the ship on the gameboard at coordinates (0, 0)
  gameboard.placeShip(ship, 0, 0);
  
  // Call the 'receiveAttack' function on the gameboard at the ship's coordinates
  gameboard.receiveAttack(0, 0);
  
  // Expect that the ship's 'hits' property is now 1
  expect(ship.hits).toBe(1);
});

// Test for the 'allShipsSunk' function
test('allShipsSunk function', () => {
  // Create a new instance of the Gameboard class
  const gameboard = new Gameboard();
  
  // Create two new Ship instances with lengths of 2 and 3
  const ship1 = new Ship(2);
  const ship2 = new Ship(3);
  
  // Place the ships on the gameboard at different coordinates
  gameboard.placeShip(ship1, 0, 0);
  gameboard.placeShip(ship2, 1, 1);
  
  // Simulate attacks on specific coordinates of the gameboard
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(0, 1);
  gameboard.receiveAttack(0, 2);
  gameboard.receiveAttack(1, 1);
  gameboard.receiveAttack(1, 2);
  
  // Expect that not all ships are sunk at this point
  expect(gameboard.allShipsSunk()).toBe(false);
});
