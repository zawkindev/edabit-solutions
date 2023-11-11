function countOnes(array) {
  let _ones_count = 0;
  for (let i = 0; i < array.length; i++) {
    let child_array = array[i];
    for (let j = 0; j < child_array.length; j++) {
      if (child_array[j] == 1) {
        _ones_count++;
      }
    }
  }
  return _ones_count;
}
