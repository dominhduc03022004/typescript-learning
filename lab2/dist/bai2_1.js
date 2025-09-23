"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
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
let favouriteActivites;
favouriteActivites = [5, 'Sports', true];
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
person.roletuple.push('admin');
person.roletuple[1] = 10; //Error
person.roletuple = [0, 'admin', 'user']; //Error
