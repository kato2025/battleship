// Import the Ship class from the '../ship' module
const Ship = require('../ship');

// Test case for the 'hit' function of the Ship class
test('ship hit function', () => {
  // Create a new Ship instance with a length of 3
  const ship = new Ship(3);
  
  // Call the 'hit' function on the ship
  ship.hit();
  
  // Expect the 'hits' property of the ship to be 1
  expect(ship.hits).toBe(1);
});

// Test case for the 'isSunk' function of the Ship class
test('ship isSunk function', () => {
  // Create a new Ship instance with a length of 3
  const ship = new Ship(3);
  
  // Call the 'hit' function on the ship three times
  ship.hit();
  ship.hit();
  ship.hit();
  
  // Expect the 'isSunk' property of the ship to be true
  expect(ship.isSunk).toBe(true);
});
