import { getInput, textToNumbers } from "../../util.js";

const numIncreases = nums => {
  let count = 0;
  for(let i = 0; i < nums.length - 1; ++i){
    const num = nums[i];
    const nextNum = nums[i + 1];
    if(nextNum > num) {
      count++;
    }    
  }
  return count;
}

const slidingIncreases = nums => {
  let count = 0;
  let runningSum = nums[0] + nums[1] + nums[2];
  for(let i = 1; i < nums.length - 2; ++i){
    // subtract the previous num
    const prevIdx = i - 1;
    const prevNum = nums[prevIdx];
    // add the next num
    const nextIdx = i + 2;
    const nextNum = nums[nextIdx];
    const currSum = runningSum - prevNum + nextNum;
    if(currSum > runningSum) {
      count++;
    }    
    runningSum = currSum;
  }
  return count;
}

getInput(import.meta.url, './input.txt')
  .then(text => {
    const inputs = textToNumbers(text);
    const result = numIncreases(inputs);
    console.log('result: ', result);
    const result2 = slidingIncreases(inputs);
    console.log('result2: ', result2);
  })
  .catch(console.error)
