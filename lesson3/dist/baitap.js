"use strict";
// bai 1
Object.defineProperty(exports, "__esModule", { value: true });
const addNumber = () => {
    let a = 5;
    let b = 5;
    let tong = a + b;
    return tong;
};
console.log(addNumber());
// bai 2
const add2Num = (a = 5, b = 10) => {
    return a + b;
};
console.log(add2Num());
const showName = (name) => {
    return `chao ${name}`;
};
console.log(showName());
const sumRest = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
};
console.log(sumRest(1, 2));
console.log(sumRest(1, 2, 3, 4));
// bai 3
const hobbies = ['Sports', 'Cooking'];
const activehobbies = ['Hiking'];
activehobbies.push(hobbies);
activehobbies.push(hobbies[0], hobbies[1]);
activehobbies.push(...hobbies);
console.log(activehobbies);
