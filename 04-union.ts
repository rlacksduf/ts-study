let value: number | string = 100;
console.log(value);
value = "hello";
console.log(value);

function printValue(a: number | string) {
  if (typeof a === "string") {
    console.log(a.toUpperCase());
  } else {
    console.log(a);
  }
}

printValue(100);
printValue("ang");
