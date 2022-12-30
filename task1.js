const value = +prompt("Ведите число");

if (typeof value === "number" && !isNaN(value)) {
  if (value % 2) {
    console.log("Нечетное");
  } else {
    console.log("Четное");
  }
} else {
  console.log("Упс, кажется, вы ошиблись");
}
