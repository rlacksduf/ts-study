type User = {
  name: string;
  age: number;
  email: string;
};

//Partial = 모든 속성을 선택 사항으로

//const user: User = {
//  name: "Kim",
//}; // ❌ age와 email이 없어서 오류
const user: Partial<User> = {
  name: "Kim",
}; //user에 속성에 ?를 붙여주는 것과 같다
type Character = {
  name: string;
  level: number;
  hp: number;
};
type CharacterUpdate = Partial<Character>;
const update: CharacterUpdate = {
  level: 50,
};
console.log(update);

//Pick 원하는거만 골라서 픽

type Product1 = {
  id: number;
  name: string;
  price: number;
  stock: number;
};
type ProductPreview = Pick<Product1, "name" | "price">;
const preview: ProductPreview = {
  name: "키보드",
  price: 50000,
};
console.log(preview);

//Omit = 원하지 않는 속성 제거하기

type ProductWithoutStock = Omit<Product1, "stock">;
const productInfo: ProductWithoutStock = {
  id: 1,
  name: "Mouse",
  price: 30000,
};
console.log(productInfo);
//Omit은 TypeScript의 타입에서 속성을 제외하는 기능이지, 실제 객체에서 값을 삭제하는 기능은 아님

//혼합

type Student = {
  id: number;
  name: string;
  age: number;
  password: string;
  grade: number;
};
type StudentUpdate = Partial<Student>;
type StudentPreview = Pick<Student, "name" | "grade">;
type StudentPublic = Omit<Student, "password">;

type StudentEdit = Partial<Pick<Student, "name" | "grade">>;
