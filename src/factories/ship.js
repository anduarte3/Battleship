function Ship(length) {
    const ships = {
        length,
        positions: [],
        hits: 0,
        sunk: false,
    }
    const hit = () => ships.hits++; 
    const isSunk = () => ships.sunk = true; 
    
    return {ships, isSunk, hit} 
}

export {Ship};