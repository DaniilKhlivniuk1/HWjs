const age = 14;
console.log(age);

const name = "Daniil";
console.log(name);

const isStudent = true;
console.log(isStudent);

const myString = "Не важливо скільки днів у твоєму житті, важливо скільки життя у твоїх днях";
console.log(myString);

let myNumber = 5;
myNumber = myNumber + 10;
console.log(myNumber);

const myNull = null;
console.log(myNull);


const userName = prompt("Як вас звати?");
console.log(userName);
if (userName) {
  console.log(userName);
  alert("Привіт, " + userName + "!");
}

const isConfirm = confirm("Підтвердіть дію");
if (isConfirm) {
  console.log("Дякую за підтвердження!");
} else {
  console.log("Дію відмінено!");
}

const message = alert("Підтвердіть загруження невідомого файла");
const isTransfering = confirm("Чи впевнені у цій дії");
if (isConfirm) {
  console.log("Дякую за підтвердження!");
} else {
  console.log("Дію відмінено!");
}