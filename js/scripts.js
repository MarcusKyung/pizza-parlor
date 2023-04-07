//Business Logic
function Pizza(size, gluten, cheese, meat, nonMeat) {
  this.sizeSelection = size;
  this.glutenSelection = gluten;
  this.extraCheeseSelection = cheese;
  this.meatsSelection = meat;
  this.nonMeatsSelection = nonMeat;
}

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

  if (this.nonMeatsSelection[0] === pineapple){
    price = price + 3;
  }

  if (this.nonMeatsSelection[1] === peppers){
    price = price + 2;
  }

  if (this.nonMeatsSelection[2] === onions){
    price = price + 1;
  }
  return price;
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

function ingredientConfirm(size, gluten, cheese, meat, nonMeat){
  document.querySelector("li#sizeConfirm").innerText = size;
  document.querySelector("li#gfConfirm").innerText = gluten;
  document.querySelector("li#cheeseConfirm").innerText = cheese;
  document.querySelector("li#meatConfirm").innerText = meat;
  let nonMeatArray = Array.from(nonMeat).map(function(input) {
    return input.value;
  });
  if (nonMeatArray.length > 0) {
    document.querySelector("li#nonMeatConfirm").innerText = nonMeatArray.join(", ");
  } else {
    document.querySelector("li#nonMeatConfirm").innerText = "No Toppings";
  }
}

function handleFormSubmission(event) {
  event.preventDefault();
  const size = document.querySelector("#pizza-size").value;
  const gluten = document.querySelector("#gf-selection").value;
  const cheese = document.querySelector("#cheese-ammount").value;
  const meat = document.querySelector("#meat-selection").value;
  const nonMeat = document.querySelectorAll("input[name=non-meats]:checked");
  ingredientConfirm(size, gluten, cheese, meat, nonMeat);
  document.querySelector("#confirmation-ul").removeAttribute("class");
  let pizzaOrder = new Pizza(size, gluten, cheese, meat, nonMeat);
  let pizzaPrice = pizzaOrder.findPrice();
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