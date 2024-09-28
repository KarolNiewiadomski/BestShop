function Calculator(form, summary) {
  this.prices = {
    products: 0.5,
    orders: 0.25,
    package: {
      basic: 0,
      professional: 25,
      premium: 60,
    },
    accounting: 35,
    terminal: 5,
  };

  this.form = {
    products: form.querySelector("#products"),
    orders: form.querySelector("#orders"),
    package: form.querySelector("#package"),
    accounting: form.querySelector("#accounting"),
    terminal: form.querySelector("#terminal"),
  };

  this.summary = {
    list: summary.querySelector("ul"),
    items: summary.querySelector("ul").children,
    total: {
      container: summary.querySelector("#total-price"),
      price: summary.querySelector(".total__price"),
    },
  };
}

function addEvents() {
  this.form.products.addEventListener("change", this.inputEvent.bind(this));
  this.form.products.addEventListener("keyup", this.inputEvent.bind(this));
  this.form.orders.addEventListener("change", this.inputEvent.bind(this));
  this.form.orders.addEventListener("keyup", this.inputEvent.bind(this));

  this.form.package.addEventListener("click", this.selectEvent.bind(this));

  this.form.accounting.addEventListener(
    "change",
    this.checkboxEvent.bind(this)
  );
  this.form.terminal.addEventListener("change", this.checkboxEvent.bind(this));
}

function totalPrice() {
    const show
}

// Calculator.prototype.updateTotal = function () {
//     const show = this.summary.list.querySelectorAll('.open').length > 0;

//     if (show) {
//       const productSum = this.form.products.value < 0 ? 0 : this.form.products.value * this.prices.products;
//       const ordersSum = this.form.orders.value < 0 ? 0 : this.form.orders.value * this.prices.orders;
//       const packagePrice =
//         this.form.package.dataset.value.length === 0 ? 0 : this.prices.package[this.form.package.dataset.value];
//       const accounting = this.form.accounting.checked ? this.prices.accounting : 0;
//       const terminal = this.form.terminal.checked ? this.prices.terminal : 0;

//       this.summary.total.price.innerText = '$' + (productSum + ordersSum + packagePrice + accounting + terminal);

//       this.summary.total.container.classList.add('open');
//     } else {
//       this.summary.total.container.classList.remove('open');
//     }
//   };
