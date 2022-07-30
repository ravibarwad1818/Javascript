var array = [3, 9, 1, 44, 6],
    indices = [];

array
    .filter((v, i) => v % 2 && indices.push(i))
    .sort((a, b) => a - b)
    .forEach((v, i) => array[indices[i]] = v);

console.log(array);