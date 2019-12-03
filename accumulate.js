//
// This is only a SKELETON file for the 'Accumulate' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// No array methods allowed
export const accumulate = (array = [], accumulator = () => null) => {
  let processedArray = [];

  for (let i = 0; i < array.length; i++) {
    const processedEntry = accumulator(array[i]);
    processedArray.push(processedEntry);
  }

  return processedArray;
};
