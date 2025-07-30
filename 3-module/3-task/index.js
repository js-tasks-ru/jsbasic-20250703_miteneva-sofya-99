function camelize(str) {
  const arr = str.split('-');
  const arr2 = arr.map((word, index) => {
    if (index === 0) {
        return word; 
      }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return arr2.join('');
}