function boxSeq(step) {
  let _boxes_number = 1;
  for (let i = 0; i <= step; i++) {
    _boxes_number = ((i % 2 != 0) ? _boxes_number + 3 : _boxes_number - 1);
  }
  return _boxes_number;
}
