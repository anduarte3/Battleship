import Ship from '../battleship.js'

describe('Battleship game', () => {
  
    describe('Placing a ship on the board', () => {
      it('should not allow a ship to be placed out of bounds', () => {
        // Test code to verify that a ship cannot be placed out of bounds goes here
      });
  
      it('should not allow ships to overlap', () => {
        // Test code to verify that ships cannot overlap goes here
      });
    });
  
    describe('Attacking a ship', () => {
      it('should mark the correct grid square as hit', () => {
        // Test code to verify that an attack marks the correct grid square as hit goes here
      });
  
      it('should mark the correct grid square as missed if no ship is present', () => {
        // Test code to verify that an attack marks the correct grid square as missed if no ship is present goes here
      });
    });
  });