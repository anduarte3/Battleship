//import './style.css';

const Ship = (l, hit) => {
    const length = l;
    let numberHit = hit;
    const updateHit = () => {
        numberHit++;
    } 
    const isSunk = () => {
        console.log(length);
        console.log(numberHit);
        if (length <= numberHit) {
            return console.log('Ship is SUNK! ${length} ${numberHit}');
        }
        else {
            return console.log('Ship is not SUNK! ${length} ${numberHit}');
        }
    }

    return {length, updateHit, isSunk}
}

const ShipTest = Ship(3, 3);
console.log(ShipTest.updateHit());
console.log(ShipTest.isSunk());

module.exports = Ship;