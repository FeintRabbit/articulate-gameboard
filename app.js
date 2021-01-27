// import { category } from "./JS/category.js";

// manual import...

const cardCategories = ["person", "world", "object", "action", "nature", "random"];

function category(position) {
  const index = position - Math.floor(position / 6) * 6;
  return cardCategories[index];
}
// end manual import

let position = 6;
let points = 7;

console.log("position: " + category(position));

console.log("points: " + points);

position += points;
console.log("position: " + category(position));
