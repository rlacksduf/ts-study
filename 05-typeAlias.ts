type Student = {
  name: string;
  age: number;
  isDeveloper: boolean;
  nickname?: string;
};

const student1: Student = {
  name: "Kim",
  age: 17,
  isDeveloper: true,
  nickname: "chan",
};

const student2: Student = {
  name: "Lee",
  age: 190,
  isDeveloper: false,
};
console.log(student1.name);
console.log(student1.age);
console.log(student1.isDeveloper);
console.log(student1.nickname);
console.log(student2.name);
console.log(student2.age);
console.log(student2.isDeveloper);
