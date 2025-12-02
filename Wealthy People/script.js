//#region Buttons
const btnAddUser = document.getElementById("btnAddUser");
const btnDoubleMoney = document.getElementById("btnDoubleMoney");
const btnShowMillionaires = document.getElementById("btnShowMillionaires");
const btnSort = document.getElementById("btnSort");
const btnoriginal = document.getElementById("original");
//#endregion

//#region DOM Elements
const divPersons = document.getElementById("persons");
//#endregion

let persons = [];
let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const getRandomUser = async () => {
  //#region Get new person
  let res = await (await fetch("https://randomuser.me/api")).json();
  let personResponse = res.results[0].name;
  let person = {
    name: `${personResponse.title} ${personResponse.first} ${personResponse.last}`,
    wealth: `${Math.random() * 10000000}`,
  };
  //

  // Add the new person to the 'Persons' array.
  persons.push(person);

  // Display all persons after adding a new one.
  refreshDom(persons);
};

const refreshDom = (dataSourcre) => {
  divPersons.replaceChildren();
  dataSourcre.forEach((P) => addPersonToDom(P));
  //persons[persons.length - 1](persons.length - 1);
  //!let lastIndex = persons[persons.length - 1];
  //!console.log(lastIndex);
  //!addPersonToDom(lastIndex);
  //let lastPerson = persons[persons.length - 1];
};

const addPersonToDom = (z) => {
  const divPerson = document.createElement("div");
  divPerson.classList.add("person");
  divPerson.innerHTML = `<span>${z.name}</span> <span>${USDollar.format(
    z.wealth
  )}</span>`;
  divPersons.appendChild(divPerson);
};
const doublePersonsWealth = () => {
  wealthDoubledPersons = persons.map((p) => {
    return { name: p.name, wealth: p.wealth * 2 };
  });
  refreshDom(wealthDoubledPersons);
};
const showOnlyMillionairs = () => {
  millionairs = persons.filter((p) => p.wealth >= 1000000);
  refreshDom(millionairs);
};

const sortPersonsByWealth = () => {
  sortedPersons = persons.sort(
    (person1, person2) => person2.wealth - person1.wealth
  );
  sortedPersons = persons.map((p) => {
    return { name: p.name, wealth: p.wealth };
  });
  sortedPersons.sort((person1, person2) => person2.wealth - person1.wealth);

  refreshDom(sortedPersons);
};
//console.log("sorted", sortedPersons);

const showOnlyOriginalData = () => {
  refreshDom(persons);
};
//console.log(doublePersonWealth);
//console.log("persons after doubling money", persons);
btnAddUser.addEventListener("click", getRandomUser);
btnDoubleMoney.addEventListener("click", doublePersonsWealth);
btnShowMillionaires.addEventListener("click", showOnlyMillionairs);
btnSort.addEventListener("click", sortPersonsByWealth);
btnoriginal.addEventListener("click", showOnlyOriginalData);
