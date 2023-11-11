function arrayOfMultiples(number, limit) {
  let multiples = [];
  for (let i = 0; i < limit; i++) {
    multiples[i] = number * (i + 1);
  }
  return multiples;
}
