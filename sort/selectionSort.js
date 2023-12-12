function selectionSort(arr) {
  //[72, 16, 38, 56, 91, 23, 8, 2, 5, 12];
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the remaining unsorted array
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

module.exports = selectionSort;
