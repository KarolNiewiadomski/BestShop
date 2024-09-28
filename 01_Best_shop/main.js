const inputQuantity = document.querySelector("#products");
const inputOrder = document.querySelector("#orders");
const inputPackage = document.querySelector("#package");
const dropDown = document.querySelector(".select_dropdown");
const accountingCheckbox = document.querySelector("#accounting");
const terminalCheckbox = document.querySelector("#terminal");

const updateTotalPrice = () => {
  let totalSum = 0;
  document.querySelectorAll("item_price").forEach((item) => {
    totalSum += Number;
    item.innerText.replace("$", "");
  });
};
