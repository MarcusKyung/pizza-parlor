//Business Logic
function Pizza(size, gluten, cheese, meat, nonMeat) {
  this.sizeSelection = size;
  this.glutenSelection = gluten;
  this.extraCheeseSelection = cheese;
  this.meatsSelection = meat;
  this.nonMeatsSelection = nonMeat;
}

Pizza.prototype.findPrice = function(){
  let price = 0
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
function reveal(){
  document.querySelector("#confirmation-ul").removeAttribute("class");
};

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
};

function handleFormSubmission(event) {
  event.preventDefault();
  const size = document.querySelector("#pizza-size").value;
  console.log(size);
  const gluten = document.querySelector("#gf-selection").value;
  console.log(gluten);
  const cheese = document.querySelector("#cheese-ammount").value;
  console.log(cheese);
  const meat = document.querySelector("#meat-selection").value;
  console.log(meat);
  const nonMeat = document.querySelectorAll("input[name=non-meats]:checked");
  console.log(nonMeat);
  ingredientConfirm(size, gluten, cheese, meat, nonMeat)
  reveal();
  let pizzaOrder = new Pizza(size, gluten, cheese, meat, nonMeat);
  pizzaOrder.findPrice();
  let pizzaPrice = pizzaOrder.findPrice();
  document.getElementById("pizza-price").innerText = "$"+pizzaPrice+".00";
};

window.addEventListener("load", function (){
  document.querySelector("form#pizza-options").addEventListener("submit", handleFormSubmission);
});