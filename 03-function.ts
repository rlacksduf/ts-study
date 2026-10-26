function add(a: number, b: number): number {
  return a + b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(5, 3));

const divide = (a: number, b: number): number => {
  return a / b;
};

console.log(divide(10, 2));

function greet(name?: string): void {
  console.log(`Hello ${name ?? "Guest"}`);
}
//?? → 왼쪽 값이 null 또는 undefined면 오른쪽 값을 사용

greet("Kim"); // Hello Kim
greet(); // Hello Guest
