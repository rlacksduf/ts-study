const character = {
  name: "Steve",
  level: 50,
  alive: true,
};

//제너릭 + 상속
function getLevel<T extends { level: number }>(character: T): number {
  return character.level;
}

//제너릭 + 키오브
function getCharacterProperty<T, K extends keyof T>(
  character: T,
  key: K,
): T[K] {
  return character[key];
}

console.log(getLevel(character));
console.log(getCharacterProperty(character, "name"));
console.log(getCharacterProperty(character, "alive"));
