function Ship(length) {
  let hits = 0;
  let sunk = false;
  const shipId = length;
  const positions = [];

  return {
    hit() { hits++; },
    getHits() { return hits },
    isSunk() { 
      if (Ship(length).getHits() === length) return sunk = true 
      return sunk = false
    },
    length,
    shipId,
    positions,
    hits,
    sunk,
  }
}

// const1 ship = Ship(3);
// ship.hit();
// ship.hit();
// ship.hit();
// console.log(ship.isSunk())
// console.log(ship.sunk);
// console.log(ship.getHits());
// console.log(ship);
// console.log(ship.isSunk()); // logs false
// console.log(ship.hits()); // logs 3
// console.log(ship.isSunk()); // logs true

export {Ship};