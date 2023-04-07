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
  if (this.sizeSelection === "small"){
    price = price + 10;
  } else if (this.sizeSelection === "medium") {
    price = price + 12;
  } else if (this.sizeSelection === "large"){
    price = price + 14;
  }
  
  if (this.glutenSelection === "gf"){
    price = price + 2;
  }

  if (this.extraCheeseSelection === "extra-cheese"){
    price = price + 2;
  }

  if (this.meatsSelection === "pepperoni"){
    price = price + 1;
  } else if (this.meatsSelection === "sausage") {
    price = price + 2;
  } else if (this.meatsSelection === "prosciutto"){
    price = price + 4;
  } else {
    price = price + 0;
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
    document.querySelector("li#nonMeatConfirm").innerText = "no toppings";
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