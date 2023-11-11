function mean(number) {
  number = number.toString();
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += parseInt(number[i]);
  }
  return sum / number.length;
}
