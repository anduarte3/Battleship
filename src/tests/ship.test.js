import {Ship} from '../factories/ship'
const ship = Ship(3);

test('Create a Ship', () => {
  expect(ship).toBeInstanceOf(Object);
  expect(ship.ships.length).toBe(3);
  expect(ship.hit).toBeInstanceOf(Function);
  expect(ship.isSunk).toBeInstanceOf(Function);
});

test('takes a hit', () => {
  ship.hit()
  ship.hit()
  expect(ship.ships.hits).toBe(2)
});

test('sinks', () => {
  ship.hit()
  ship.hit()
  ship.hit()
  expect(ship.isSunk()).toBe(true)
});

// test('prevents being hit multiple times at the same spot', () => {
//   ship.hit(1)
//   ship.hit(1)
//   ship.hit(1)
//   expect(ship.ships.hits).toBe(1)
// })
// })