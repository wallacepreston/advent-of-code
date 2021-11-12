import { getInput, textToNumbers } from "../../util.js";

const findSum = inputNums => {
  const hash = {};
  for(let currNum of inputNums) {
    if(hash[2020 - currNum]) return [2020 - currNum, currNum];
    else hash[currNum] = true;
  }
  
  return null;
}

getInput(import.meta.url, './input.txt')
  .then(text => {
    const inputs = textToNumbers(text);
    const [num1, num2] = findSum(inputs);
    console.log(num1 * num2);
  })
  .catch(console.error)
