import {Ship} from '../factories/ship'

let ship;

beforeEach(() => {
  ship = Ship(3);
});


test('Create a Ship', () => {
  expect(ship).toBeInstanceOf(Object);
  expect(ship.length).toBe(3);
  expect(ship.hits).toBeInstanceOf(Function);
  expect(ship.isSunk).toBeInstanceOf(Function);
});

test('takes a hit', () => {
  ship.hits()
  ship.hits()
  expect(ship.hits()).toBe(2)
});

test('sinks', () => {
  ship.hits()
  ship.hits()
  ship.hits()
  expect(ship.isSunk()).toBe(true)
});

// test('prevents being hit multiple times at the same spot', () => {
//   ship.hit(1)
//   ship.hit(1)
//   ship.hit(1)
//   expect(ship.ships.hits).toBe(1)
// })