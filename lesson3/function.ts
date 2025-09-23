function addNumber(numb1: number): number {
    return 1;
}

const addNumberArrow = (): void => {}

function showName(name?:string, age:number = 22) : string {
    return `xin chao ban ${name}, ${age} tuoi`;
}

const myName = showName("ducdm");
console.log(myName);
