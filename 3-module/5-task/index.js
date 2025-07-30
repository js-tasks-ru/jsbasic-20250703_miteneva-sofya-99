function getMinMax(str) {
  let arr = str.split(' ');
   let filteredArray = arr.map(item => parseFloat(item)).filter(item => !isNaN(item));

  
  let min = filteredArray[0];
  let max = filteredArray[0];

  // Проходимся по массиву и находим min и max
  for (let i = 1; i < filteredArray.length; i++) {
    if (filteredArray[i] < min) {
      min = filteredArray[i];
    }
    if (filteredArray[i] > max) {
      max = filteredArray[i];
    }
  }

  return { min, max };
}
