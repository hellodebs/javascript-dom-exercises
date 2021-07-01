const formElement = document.querySelector(".super-form");
const data = [];

console.log(formElement.name);
console.log(formElement.age);
console.log(formElement.married);

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = formElement.name.value;
  const age = formElement.age.value;
  const married = formElement.married.checked;
  const hobbies = formElement.hobbies.value;
  console.log(name, age, married, hobbies);

  const person = {
    name,
    age,
    married,
    hobbies,
  };
  data.push(person);
  console.log(data);
  formElement.reset();
});
