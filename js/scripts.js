//Business Logic
function Pizza(sizeSelection, glutenSelection, extraCheeseSelection, meatsSelection, nonMeatsSelection) {
  this.sizeSelection = size;
  this.glutenSelection = gluten;
  this.extraCheeseSelection = cheese;
  this.meatsSelection = meat;
  this.nonMeatsSelection = nonMeat;
}


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
  const nonMeat = document.querySelector("#non-meats").value;
  console.log(nonMeat);
  // let pizza = new Pizza(sizeSelection, glutenSelection, extraCheeseSelection, meatsSelection, nonMeatsSelection);
  // movieTicket.findPrice();
  // let price = pizza.findPrice();
  // document.getElementById("ticket-price").innerText = price;

}




window.addEventListener("load", function (){
  document.querySelector("form#pizza-options").addEventListener("submit", handleFormSubmission);
});