// forEach, Map, Filter

// forEach
// const users = ["Nick", "George", "Anna"];

// users.forEach((user) => {
//   console.log("sending email to: " + user);
// });

// Map
// const numbers = [1, 2, 3];

// numbers.map((num) => num * 2);

// console.log(numbers);

// const users = [
//   {
//     name: "George",
//     age: 35,
//   },
//   {
//     name: "Nick",
//     age: 25,
//   },
//   {
//     name: "Anna",
//     age: 45,
//   },
// ];

// const userAge = users.map((user) => user.age);

// console.log(userAge);

// Filter
// const guests = ["George", "", "Luka", "Tako", "", "Sandro"];

// const cleanedArr = guests.filter((name) => name !== "");

// console.log(cleanedArr);

// console.log(window)

// const person = {
//   name: "Luka",
//   age: 34,
//   greeting: () => {
//     console.log("Hello World! " + "I am " + this.name);
//   },
// };

// person.greeting();

// console.log(document);

// const mainTitle = document.getElementById("title");

// mainTitle.textContent = "Writing from JS file!";

// const para = document.querySelector(".desc");

// // console.log(para);

// para.textContent = "this is p tag";

// const listItem = document.querySelectorAll(".nav-item");

// listItem.forEach((el) => {
//   el.innerHTML = `<a href='#'>${el.textContent}</a>`;
// });

// const list = document.querySelector("ul");

// console.log(list);

// const newP = document.createElement("p");
// newP.textContent = "New Paragraph from index.js";
// document.body.appendChild(newP);

const sendEmailBtn = document.querySelector(".btn");

console.log(sendEmailBtn);

sendEmailBtn.style.backgroundColor = "red";
sendEmailBtn.style.color = "white";
sendEmailBtn.style.border = "1px solid #ccc";
sendEmailBtn.style.padding = "12px 18px";
sendEmailBtn.style.borderRadius = "4px";
sendEmailBtn.style.cursor = "pointer";

sendEmailBtn.addEventListener("click", () => {
  const newP = document.createElement("p");
  newP.textContent = "New Paragraph from index.js";
  document.body.appendChild(newP);
});

sendEmailBtn.addEventListener("mouseenter", () => {
  console.log("hover on send email btn");
  sendEmailBtn.style.backgroundColor = "green";
});

sendEmailBtn.addEventListener("mouseleave", () => {
  sendEmailBtn.style.backgroundColor = "red";
});
