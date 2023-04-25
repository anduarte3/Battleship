function Ship(length) {
  const shipId = length;
  const positions = [];

  let hits = 0;
  let sunk;

  function hit() {
    hits++
  }
  function getHits() {
    return hits
  }
  function isSunk() {
    if (this.getHits() >= length) {
      sunk = true
      return sunk
    }
  }

  return {
    shipId,
    positions,
    hit,
    getHits,
    isSunk
  }
}

const shipOne = Ship(3);

// console.log(ship.hit())
// console.log(ship.hit())
// console.log(ship.hit())
// console.log(ship.hit())
// console.log(ship.getHits());
// console.log(ship.isSunk());

// console.log(ship); // Doesn't show hits


export {Ship};