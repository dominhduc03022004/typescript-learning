enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: string,
  age: number,
  hobbies: string[],
  role: string,
  roletuple: [number, string]
} = {
  name: 'Typescript',
  age: 11,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN, //Error
  roletuple: [2, 'author']
};

let favouriteActivites: any[];
favouriteActivites = [5, 'Sports', true];

if(person.role === Role.AUTHOR) {
  console.log('is author');
}

person.roletuple.push('admin');
person.roletuple[1] = 10; //Error
person.roletuple = [0, 'admin', 'user']; //Error