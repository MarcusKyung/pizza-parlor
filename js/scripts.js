//Business Logic
function Pizza(name, size, gluten, cheese, meat, nonMeat) {
  this.name = name;
  this.sizeSelection = size;
  this.glutenSelection = gluten;
  this.extraCheeseSelection = cheese;
  this.meatsSelection = meat;
  this.nonMeatsSelection = nonMeat;
}

Pizza.prototype.checkName = function(){
  if (this.name.length < 4) {
    this.name = "invalid name"
  }
  };

Pizza.prototype.findPrice = function(){
  let price = 0;
  if (this.sizeSelection === "Small"){
    price = price + 10;
  } else if (this.sizeSelection === "Medium") {
    price = price + 12;
  } else if (this.sizeSelection === "Large"){
    price = price + 14;
  }
  
  if (this.glutenSelection === "Gluten Free Dough"){
    price = price + 2;
  }

  if (this.extraCheeseSelection === "Extra Cheese"){
    price = price + 2;
  }

  if (this.meatsSelection === "Pepperoni"){
    price = price + 1;
  } else if (this.meatsSelection === "Sausage") {
    price = price + 2;
  } else if (this.meatsSelection === "Prosciutto"){
    price = price + 4;
  } else if (this.meatsSelection === "No Meat"){
    price = price + 0;
  }


  if (this.nonMeatsSelection.includes("Pineapple") && this.nonMeatsSelection.includes("Peppers") && this.nonMeatsSelection.includes("Onions")){
    price = price + 6;
  } else if (this.nonMeatsSelection.includes("Pineapple") && this.nonMeatsSelection.includes("Peppers")){
    price = price + 5;
  } else if (this.nonMeatsSelection.includes("Peppers") && this.nonMeatsSelection.includes("Onions")){
    price = price + 3;
  } else if (this.nonMeatsSelection.includes("Pineapple") && this.nonMeatsSelection.includes("Onions")){
    price = price + 4;
  } else if (this.nonMeatsSelection.includes("Pineapple")){
    price = price + 3;
  } else if (this.nonMeatsSelection.includes("Peppers")){
    price = price + 2;
  } else if (this.nonMeatsSelection.includes("Onions")){
    price = price + 1;
  } return price;
};


//User Logic
function handleDescription1(){
  const header1 =  document.querySelector("#size-description");
  if (header1.classList.contains ("hidden")) {
    header1.removeAttribute("class");
  } else {
    header1.setAttribute("class", "hidden");
  }
}

function handleDescription2(){
  const header2 =  document.querySelector("#dough-description");
  if (header2.classList.contains ("hidden")) {
    header2.removeAttribute("class");
  } else {
    header2.setAttribute("class", "hidden");
  }
}

function handleDescription3(){
  const header3 =  document.querySelector("#cheese-description");
  if (header3.classList.contains ("hidden")) {
    header3.removeAttribute("class");
  } else {
    header3.setAttribute("class", "hidden");
  }
}

function handleDescription4(){
  const header4 =  document.querySelector("#meat-description");
  if (header4.classList.contains ("hidden")) {
    header4.removeAttribute("class");
  } else {
    header4.setAttribute("class", "hidden");
  }
}

function handleDescription5(){
  const header5 =  document.querySelector("#nonmeat-description");
  if (header5.classList.contains ("hidden")) {
    header5.removeAttribute("class");
  } else {
    header5.setAttribute("class", "hidden");
  }
}

function ingredientConfirm(name, size, gluten, cheese, meat, nonMeat){
  document.querySelector("li#nameConfirm").innerText = name;
  document.querySelector("li#sizeConfirm").innerText = size;
  document.querySelector("li#gfConfirm").innerText = gluten;
  document.querySelector("li#cheeseConfirm").innerText = cheese;
  document.querySelector("li#meatConfirm").innerText = meat;
  if (nonMeat.length > 0) {
    document.querySelector("li#nonMeatConfirm").innerText = nonMeat.join(", ");
  } else {
    document.querySelector("li#nonMeatConfirm").innerText = "No Toppings";
  }
}

function handleFormSubmission(event) {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const size = document.querySelector("#pizza-size").value;
  const gluten = document.querySelector("#gf-selection").value;
  const cheese = document.querySelector("#cheese-ammount").value;
  const meat = document.querySelector("#meat-selection").value;
  const nonMeat = Array.from(document.querySelectorAll("input[name=non-meats]:checked")).map(node => node.value);
  ingredientConfirm(name, size, gluten, cheese, meat, nonMeat);
  document.querySelector("#confirmation-ul").removeAttribute("class");
  let pizzaOrder = new Pizza(name, size, gluten, cheese, meat, nonMeat);
  let pizzaPrice = pizzaOrder.findPrice();
  pizzaOrder.checkName();
  console.log(pizzaOrder);
  document.getElementById("pizza-price").innerText = "$"+pizzaPrice+".00";
}

window.addEventListener("load", function (){
  document.querySelector("form#pizza-options").addEventListener("submit", handleFormSubmission);
  document.querySelector(".menu-header1").addEventListener("click", handleDescription1);
  document.querySelector(".menu-header2").addEventListener("click", handleDescription2);
  document.querySelector(".menu-header3").addEventListener("click", handleDescription3);
  document.querySelector(".menu-header4").addEventListener("click", handleDescription4);
  document.querySelector(".menu-header5").addEventListener("click", handleDescription5);

});