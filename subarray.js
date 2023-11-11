function matrix(main_array, sub_array, item) {
  let array = [];
  for (let i = 0; i < main_array; i++) {
    array.push([])
    for (let j = 0; j < sub_array; j++) {
      array[i].push(item)
    }
  }
  return array;
}

