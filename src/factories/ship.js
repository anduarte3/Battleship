function Ship(length) {
    const ships = {
        length,
        positions: [],
        hehe: 'O',
        hits: 0,
        sunk: false,
    }
    const hit = () => ships.hits++; 
    const isSunk = () => {
        if (ships.hits === ships.length) { return ships.sunk = true; }
    }
    return {ships, isSunk, hit} 
}

export {Ship};