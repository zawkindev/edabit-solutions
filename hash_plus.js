function hashPlusCount(str) {
  let lst = [0, 0];
  for (let i = 0; i < str.length; i++) {
    str[i] == "#" ? lst[0]++ : lst[1]++;
  }
  return lst;
}
