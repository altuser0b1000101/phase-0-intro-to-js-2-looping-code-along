// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
//console.log(`I'm ${age} years old. Happy Birthday to me!`)
//}

// const gifts = ["teddy bear", "drone", "doll"];
// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++ ) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//      }
//      return gifts;
// }

function writeCards(cards, event){
    const emptyArray = [];
    for (let i = 0; i < cards.length; i++) {
    emptyArray.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
}
return emptyArray;
}


function countDown(integer) {

    while (integer >= 0) {
      console.log(integer);
      integer--
    }
}


// function countDown() {
// const integer = 5;
//   while (integer > 10) {
//     console.log(countDown(10));
//     }
// }