const selectionSort = require("./sort/selectionSort");
const binarySearch = require("./search/binarySearch");

// Example usage
const unsortedArray = [72, 16, 38, 56, 91, 23, 8, 2, 5, 12];
const targetValue = 23;
let sortedArray = selectionSort(unsortedArray);
const resultIndex = binarySearch(sortedArray, targetValue);

if (resultIndex !== -1) {
  console.log(`Target ${targetValue} found at index ${resultIndex}.`);
} else {
  console.log(`Target ${targetValue} not found in the array.`);
}
