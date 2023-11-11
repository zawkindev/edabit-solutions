const numberSplit = (number) => {
  let parts = [];
  let remainder = number % 2;
  if (remainder != 0) {
    parts[1] = (number - remainder) / 2;
    parts[0] = number - parts[1];
  } else {
    parts[0] = number / 2;
    parts[1] = parts[0];
  }

  return parts.sort((a, b) => a - b);
};
