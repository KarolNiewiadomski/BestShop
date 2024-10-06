const formInputs = document.querySelectorAll(".form_input");
const checkboxes = document.querySelectorAll(".form_checkbox input");
const summaryItems = document.querySelectorAll(".list_item");
const totalPriceElement = document.querySelector(".total_price");
const totalElement = document.querySelector(".summary_total");
const itemCalcSpan = document.querySelector('li[data-id="package"] .item_calc');
//interactive dropdown selectors
const dropdown = document.getElementById("package");
const selectInput = dropdown.querySelector(".select_input");
const selectDropdown = dropdown.querySelector(".select_dropdown");

function updateSummary() {
  let total = 0;
  let packageValue = "";

  summaryItems.forEach((item) => {
    item.classList.remove("open");
  });

  summaryItems.forEach((item) => {
    const itemId = item.getAttribute("data-id");
    let price = 0;

    if (itemId === "products") {
      const products = document.getElementById("products").value || 0;
      price = products * 0.5;
    } else if (itemId === "orders") {
      const orders = document.getElementById("orders").value || 0;
      price = orders * 0.25;
    } else if (itemId === "package") {
      const packageValue = document
        .querySelector("#package .select_input")
        .innerText.trim();

      price =
        packageValue === "Premium"
          ? 60
          : packageValue === "Professional"
            ? 25
            : 0;
    } else if (itemId === "accounting") {
      if (document.getElementById("accounting").checked) price = 35;
    } else if (itemId === "terminal") {
      if (document.getElementById("terminal").checked) price = 5;
    }

    // if (packageValue === "Premium") {
    //   price = 60;
    // } else if (packageValue === "Professional") {
    //   price = 25;
    // } else {
    //   price = 0;
    // }

    item.querySelector(".item_price").innerText = `$${price.toFixed(2)}`;
    total += price;

    if (price > 0) {
      item.classList.add("open");
    }
  });
  totalElement.classList.add("open");
  totalPriceElement.innerText = `$${total.toFixed(2)}`;
}

formInputs.forEach((input) => input.addEventListener("input", updateSummary));
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", updateSummary)
);

const packageSelect = document.getElementById("package");
packageSelect.addEventListener("click", function (event) {
  if (event.target.tagName === "li") {
    packageSelect.querySelector(".select_input").innerText =
      event.target.innerText;
    updateSummary();
  }
});

selectInput.addEventListener("click", function () {
  dropdown.classList.toggle("open");
  selectDropdown.classList.toggle("open");
});

const options = selectDropdown.querySelectorAll("li");
options.forEach((option) => {
  option.addEventListener("click", function () {
    selectInput.textContent = this.textContent;
    dropdown.classList.toggle("open");
    selectDropdown.classList.toggle("open");
    updateSummary();
  });
});

document.addEventListener("input", function () {
  const productsValue = document.getElementById("products").value;
  const ordersValue = document.getElementById("orders").value;

  document.querySelector('li[data-id="products"] .item_calc').innerText =
    `${productsValue} * 0.5`;
  document.querySelector('li[data-id="orders"] .item_calc').innerText =
    `${ordersValue} * 0.25`;
});

dropdown.addEventListener("click", function (event) {
  const li = event.target.closest("li");
  if (li) {
    const selectedPackage = li.innerText;
    itemCalcSpan.innerText = selectedPackage;
  }
});
