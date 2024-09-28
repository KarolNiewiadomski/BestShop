const inputQuantity = document.querySelector("#products");
const inputOrder = document.querySelector("#orders");
const inputPackage = document.querySelector("#package");
const dropDown = document.querySelector(".select_dropdown");
const accountingCheckbox = document.querySelector("#accounting");
const terminalCheckbox = document.querySelector("#terminal");
const totalPrice = document.querySelector(".total_price");

const updateTotalPrice = () => {
  let totalSum = 0;
  document.querySelectorAll("item_price").forEach((item) => {
    totalSum += Number;
    item.innerText.replace("$", "");
  });
  totalPrice.innerText = "$" + totalSum;
};

const hideElements = () => {
  const listItem = document.querySelectorAll(".item_calc");
  listItem.forEach((item) => (item.style.display = "none"));
};
