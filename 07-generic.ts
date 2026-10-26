function getValue<T>(value: T): T {
  return value;
}

console.log(getValue<number>(100));
console.log(getValue<string>("type"));
console.log(getValue<boolean>(true));

function getValueGuess<T>(value: T): T {
  return value;
}

console.log(getValueGuess(100));
console.log(getValueGuess("hello"));

function wrapInArray<T>(value: T): T[] {
  return [value];
}

console.log(wrapInArray(10));
console.log(wrapInArray("hello"));
console.log(wrapInArray(true));
