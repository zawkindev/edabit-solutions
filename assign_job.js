function assignPersonToJob(names, jobs) {
  let assignments = {};
  let i = 0;
  while (i < names.length) {
    assignments[names[i]] = jobs[i];
    i++;
  }
  return assignments;
}
