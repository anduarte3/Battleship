import Ship from '../factories/ship'

describe('Ship', () => {
  let ship;
  beforeEach(() => {
    ship = Ship(3)
  })
  //Quando dou call na funcao Ship(length) recebo objecto ship com as propriedades corretas
  // test('creates a ship', () => {
  //   expect(Ship).toEqual(length = 3, hits = 0);
  // });
  // //Se os hits estao a ser bem registados
  // test('Takes a hit', () => {
  //   Ship.hit()
  //   expect(Ship).toBe(length);
  // });

  //Se quando hits = length do ship sunk passa para true
  test('Sinks', () => {
    Ship(3).hit();
    Ship(3).hit();
    Ship(3).hit();
    expect(Ship(3).isSunk()).toBe(true)
  })
})
