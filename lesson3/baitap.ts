// bai 1

const addNumber = ():number => {
    let a: number = 5;
    let b: number = 5;

    let tong:number = a + b;
    return tong;
}

console.log(addNumber());

// bai 2
const add2Num = (a:number = 5, b:number=10): number => {
    return a + b;
}
console.log(add2Num());

const showName = (name?:string):string => {
    return `chao ${name}`;
}
console.log(showName());

const sumRest = (...numbers:number[]):number => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};
console.log(sumRest(1, 2));
console.log(sumRest(1, 2, 3, 4));

// bai 3
const hobbies:any = ['Sports', 'Cooking'];
const activehobbies:any = ['Hiking'];
activehobbies.push(hobbies);
activehobbies.push(hobbies[0], hobbies[1]);
activehobbies.push(...hobbies);
console.log(activehobbies);