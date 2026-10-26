function makePair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

console.log(makePair("Kim", 17));
console.log(makePair(100, true));

function createPair<T, U>(first: T, second: U): { first: T; second: U } {
  return { first, second };
}

console.log(createPair("10", 10));
