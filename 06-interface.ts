interface Person {
  readonly id: number;
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
  github?: string;
}

const developer1: Developer = {
  id: 1,
  name: "Kim",
  age: 17,
  language: "ts",
  github: "https://github.com/rlacksduf",
};

const developer2: Developer = {
  id: 2,
  name: "Jo",
  age: 17,
  language: "python",
};

console.log(developer1.id);
console.log(developer1.name);
console.log(developer1.age);
console.log(developer1.language);
console.log(developer1.github);

console.log(developer2.id);
console.log(developer2.name);
console.log(developer2.age);
console.log(developer2.language);
