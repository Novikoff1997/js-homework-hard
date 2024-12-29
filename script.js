let num = 266219;

const numToString = num.toString();
const numLength = numToString.length;
let numsArray = [];
let result = 1;

for (let i = 0; i < numLength; i++) {
  numsArray.push(numToString[i]);
}
for (let i = 0; i < numsArray.length; i++) {
  result = numsArray[i] * result;
}
console.log(result);

let resultExp = result ** 3;
let resultExptoString = resultExp.toString();

console.log(resultExptoString[1], resultExptoString[0]);
