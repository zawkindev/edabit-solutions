function allTruthy(...args) {
  for (let i = 0; i < args.length; i++) {
    if (!args[i] == true) {
      return false;
    }
  }
  return true;
}
