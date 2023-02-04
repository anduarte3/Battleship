import {Ship} from '../factories/ship'

// describe('Ship', () => {
//   let ship = Ship(3);

//   beforeEach(() => {
//     ship;
//   })

  test('creates ship', () => {
    expect(ship.ships.length).toBe(Ship(3).ships.length)
  }) 

  // test('takes a hit', () => {
  //   ship.hit()
  //   ship.hit()
  //   expect(ship.ships.hits).toContain(2)
  // })

  // test('sinks', () => {
  //   ship.hit()
  //   ship.hit()
  //   ship.hit()
  //   expect(ship.isSunk()).toBe(true)
  // })

  // test('prevents being hit multiple times at the same spot', () => {
  //   ship.hit(1)
  //   ship.hit(1)
  //   ship.hit(1)
  //   expect(ship.ships.hits).toBe(1)
  // })
//})