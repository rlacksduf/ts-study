//아렵다**

function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

function getId<T extends { id: number }>(item: T): number {
  return item.id;
}
console.log(getId({ id: 1, name: "Kim" }));
console.log(getId({ id: 2, age: 17 }));

function getItem<T extends { id: number }>(item: T): T {
  return item;
}
const itemUser = getItem({
  id: 1,
  name: "Kim",
  age: 17,
});

console.log(itemUser.name); // Kim
console.log(itemUser.age); // 17
