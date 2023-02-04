import {Gameboard} from "./gameboard";

function Player() {
   let gameBoard = Gameboard();
   let player;
   let computer;
   let turn = player;
   
   function placementPlayer() {
      //Adding all Ships of Player to gameboard
      for (let i=0; i < 5 ; i++) { gameBoard.placeShip(); }
   }
   function placementComputer() {
      //Adding all Ships of Computer to gameboard
      for (let j=0; j < 5 ; j++) { gameBoard.placeRandom(); }
   }
   //Ships placed
   //While there are still ships not sunk the game still continues
   //Player attacks, then Computer

   //There should be a function that gets called with the coords
   function gameLogic() {
      while (gameBoard.receiveHit.GameOver() === true) {
         if (turn === player) { turn = computer; playerAttack(gameBoard); } 
         else if (turn === computer) { turn = player; randomAttack(gameBoard); }
      }
      function playerAttack(gameBoard) { 
         //Take user coords (x,y)
         let positionX = Math.floor(Math.random() * 10); // x coord
         let positionY = Math.floor(Math.random() * 10); // y coord

         gameBoard.receiveAttack(positionX, positionY);
      }
      function randomAttack(gameBoard) {
         let positionX = Math.floor(Math.random() * 10); // x coord
         let positionY = Math.floor(Math.random() * 10); // y coord
         
         //Should be able to 
         gameBoard.receiveAttack(positionX, positionY);
      }    
   }     
      //gameBoard.receiveHit(randomAttack().positionX, randomAttack().positionY);
   return {placementPlayer, placementComputer, gameLogic}
}

let test = Player();
console.log(test);

export {Player};
