function diceGame(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let child_array = array[i];
    if (child_array[0] == child_array[1]) {
      sum = 0;
      break;
    }
    sum += sum_array(child_array);
  }
  return sum;
}

function sum_array(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
