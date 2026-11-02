//제너릭
function getFirst<T>(value: T) {
  return value;
}
console.log(getFirst(100));
console.log(getFirst("Kim"));
console.log(getFirst(true));

//배열
function makeArray<T>(value: T): T[] {
  return [value];
}
console.log(makeArray(10));
console.log(makeArray("hello"));

//여러개
function makePair<T, U>(first: T, second: U) {
  return { first, second };
}
console.log(makePair("Kim", 17));
console.log(makePair(true, 100));

//상속
function getPrice<T extends { price: number }>(item: T): number {
  return item.price;
}
console.log(getPrice({ name: "Keyboard", price: 50000 }));
console.log(getPrice({ id: 1, price: 10000 }));

//키오브
type Game = {
  title: string;
  price: number;
  online: boolean;
};
type gameKey = keyof Game;
let key: gameKey = "price";
console.log(key);

//종합
function getGameValue<T, K extends keyof T>(game: T, key: K): T[K] {
  return game[key];
}
const myGame = {
  title: "Minecraft",
  price: 30000,
  online: true,
};

console.log(getGameValue(myGame, "title"));
console.log(getGameValue(myGame, "price"));
console.log(getGameValue(myGame, "online"));
