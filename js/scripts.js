//Business Logic
function Pizza(size, gluten, cheese, meat, nonMeat) {
  this.sizeSelection = size;
  this.glutenSelection = gluten;
  this.extraCheeseSelection = cheese;
  this.meatsSelection = meat;
  this.nonMeatsSelection = nonMeat;
}


//User Logic
function reveal(){
  const confirmList = document.querySelector("#confirmation-ul");
  confirmList.removeAttribute("hidden");
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
  // pizzaOrder.findPrice();
  // let pizzaPrice = pizzaOrder.findPrice();
  // document.getElementById("ticket-price").innerText = pizzaPrice;
};

window.addEventListener("load", function (){
  document.querySelector("form#pizza-options").addEventListener("submit", handleFormSubmission);
});