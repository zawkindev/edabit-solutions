function uniqueSort(arr) {
  let _unique_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (_unique_arr.length == 0) {
      _unique_arr.push(arr[i]);
    } else if (isExist(arr[i], _unique_arr) != true) {
      _unique_arr.push(arr[i]);
      _unique_arr = _unique_arr.sort();
    }
  }
  return sort(_unique_arr);
}

function isExist(element, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (element == arr[i]) {
      return true;
    }
  }
  return false;
}

function sort(array) {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length;) {
      let current = array[i];
      let next = array[i + 1];
      if (current > next) {
        array[i] = next;
        array[i + 1] = current;
      } else {
        i++;
      }
    }
  }

  return array;
}
