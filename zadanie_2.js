a = [1, 5, 12, 4, 3]
b = [2, 3, 4, 5, 6, 7, 8, 9, 10]
c = [3, 10, 17]

function avarage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }

console.log(avarage(a))
console.log(avarage(b))
console.log(avarage(c))