function sumSalary(salaries) {
  let sumSalary = 0;
  for (let key in salaries) {
    let value = salaries[key];
    if (typeof value === 'number' && !isNaN(value) && value !== Infinity && value !== -Infinity) {
      sumSalary += value;
    }
  }
  return sumSalary;
}
