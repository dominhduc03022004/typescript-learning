class Person {
  public name: string;
  protected gender: boolean;
  private age: number;
  readonly point: number;

  constructor(name: string, gender: boolean, age: number, point: number) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.point = point;
  }

  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person = new Person("Alice", true, 30, 10);
person.greet();

class User extends Person {
  public role: string;
  constructor(
    name: string,
    gender: boolean,
    age: number,
    point: number,
    role: string
  ) {
    super(name, gender, age, point);
    this.role = role;
  }

  //override : ghi de
  greet(): void {
    console.log(`xin chao ${this.name}`);
  }
}

const u1 = new User("ducdm", true, 22, 9, "boss");
console.log(u1);
console.log(u1.greet());

// interface : object
interface iPerson {
  name: string;
  age: number;
  gender: boolean;
  point: number;
  say(): void;
}
