//type User = {
//  name: string;
//  age: number;
//  isDeveloper: boolean;
//};

//type UserKey = keyof User;

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const My_user = {
  name: "Kim",
  age: 17,
  isDeveloper: true,
};

console.log(getProperty(My_user, "isDeveloper"));

type Product = {
  id: number;
  name: string;
  price: number;
};

type ProductKey = keyof Product;

const product = {
  id: 1,
  name: "Keyboard",
  price: 5000,
};

function getProductValue1(key: ProductKey) {
  return product[key];
}

console.log(getProductValue1("name"));
console.log(getProductValue1("price"));

function getProductValue<T, K extends keyof T>(p: T, k: K) {
  return p[k];
}

console.log(getProductValue(product, "name"));
console.log(getProductValue(product, "price"));
