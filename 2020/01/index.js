import { getInput, textToNumbers } from "../../util.js";

const arrayTwoSum = inputNums => {
  const hash = {};
  for(let currNum of inputNums) {
    if(hash[2020 - currNum]) return [2020 - currNum, currNum];
    else hash[currNum] = true;
  }
  return null;
}

const arrayThreeSum = inputNums => {
  inputNums.sort((a, b) => a < b ? -1 : 1);
  let numsRemaining = inputNums.slice(0);
  // while there's length in the slice array
  while (numsRemaining.length >= 3) {
    // go to middle
    let currIdx = Math.floor(numsRemaining.length / 2);
    const threeNums = [numsRemaining[currIdx], numsRemaining[currIdx + 1], numsRemaining[currIdx + 2]];
    const sum = threeNums.reduce((acc, elem) => acc + elem, 0);
    // if the sum is 2020, return the 3 nums. 
    if(sum === 2020) return threeNums
    // if the 2020 is less than the sum, go left, otherwise right
    else if (2020 < sum) {
      // slice the array and that's our new array
      numsRemaining = numsRemaining.slice(0, currIdx);
    } else {
      numsRemaining = numsRemaining.slice(currIdx, numsRemaining.length);
    }
  }
  
  return null;
}

getInput(import.meta.url, './input.txt')
  .then(text => {
    const inputs = textToNumbers(text);
    const [num1, num2] = arrayTwoSum(inputs);
    console.log(num1 * num2);
    const nums = arrayThreeSum(inputs);
  })
  .catch(console.error)
