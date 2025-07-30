function namify(users) {
  const arr = [];
  
  for (let index = 0; index < users.length; index += 1) {
     arr.push(users[index].name);
  }
  return arr;
}
