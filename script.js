// задание 1
for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (isEven(i)) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }
}
for (let i = 0; i <= 10; i++)
    console.log(isEven(i));

// задание 2
const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);
// Задание 3
const myArray = [];
const numberGenerator = () => Math.ceil(Math.random() * (9 - 1) + 1);
for (let i = 0; i < 5; i++) {
    myArray[i] = numberGenerator();
}
console.log(myArray);
// 1
let sum = 0;
myArray.forEach(x => sum += x);
console.log(sum);
// 2
const minNumber = Math.min(...myArray);
console.log(minNumber);
// 3
let numberSerch = 3;
const isSerch = myArray.includes(numberSerch);
console.log((isSerch) ? `Число ${numberSerch} в заданном массиве присутствует` : `Число ${numberSerch} в заданном массиве отсутствует`);
