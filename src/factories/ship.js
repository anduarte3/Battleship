function Ship(name, length) {
    const ships = {
        name,
        length,
        positions: [],
        hits: 0,
        sunk: false,
    }
    const hit = () => {
        ships.hits++;
    }
    const isSunk = () => {
        if (ships.hits = ships.length) {
            ships.sunk = true; 
            console.log(ships.sunk);
        }
    }
    return {ships, isSunk, hit} 
}

export {Ship};