// Розгортання товару
document.addEventListener("DOMContentLoaded", () => {
  showCategories();
});

function showCategories() {
  const parent = document.querySelector(".categories > div");

  categories.forEach((category) => {
    const categoryElement = document.createElement("div");
    categoryElement.textContent = category.name;
    categoryElement.setAttribute("data-category-id", category.id);
    categoryElement.classList.add("category-item");
    parent.appendChild(categoryElement);
  });
}

function showProducts(products, categoryId) {
  const parent = document.querySelector(".products > div");
  parent.innerHTML = "";
  parent.setAttribute("data-category-id", categoryId);

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.textContent = product.name;
    productElement.setAttribute("data-product-id", product.id);
    productElement.classList.add("product-item");
    parent.appendChild(productElement);
  });
}

function showInformation(product) {
  const parent = document.querySelector(".information > div");
  parent.innerHTML = "";

  const nameElement = document.createElement("div");
  nameElement.textContent = product.name;
  parent.appendChild(nameElement);

  const informationElement = document.createElement("div");
  informationElement.textContent = `Price: $${product.price}`;
  parent.appendChild(informationElement);

  const buyBtn = document.createElement("button");
  buyBtn.setAttribute("type", "button");
  buyBtn.classList.add("buyBtn");
  buyBtn.textContent = "Buy";
  parent.appendChild(buyBtn);

  // Відображення форми
  buyBtn.addEventListener("click", () => {
    const form = document.querySelector('form[name="customerInfo"]');
    form.style.display = 'inline-block';
  });
}

document.querySelector(".categories").addEventListener("click", (event) => {
  if (!event.target.classList.contains("category-item")) {
    return;
  }

  const categoryId = parseInt(event.target.getAttribute("data-category-id"));
  const selectedCategory = categories.find(
    (category) => category.id === categoryId
  );

  if (selectedCategory) {
    showProducts(selectedCategory.products, categoryId);
  }
});

document.querySelector(".products").addEventListener("click", (event) => {
  if (!event.target.classList.contains("product-item")) {
    return;
  }

  const productId = parseInt(event.target.getAttribute("data-product-id"));
  const selectedProduct = categories
    .flatMap((category) => category.products)
    .find((product) => product.id === productId);

  if (selectedProduct) {
    showInformation(selectedProduct);
  }
});





// Валідація форми
const subBtn = document.querySelector('.subBtn');
const errors = document.querySelectorAll(".error");

subBtn.addEventListener("click", () => {
  let hasErrors = false;

  const name = document.forms.customerInfo.name.value.trim();
  if (!name.match(/^[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ][а-яіїєґ]+$/)) {
    errors[0].style.display = "inline";
    hasErrors = true;
  } else {
    // console.log(name);
    errors[0].style.display = "none";
  }

  const city = document.forms.customerInfo.city.value;
  if (city === "0") {
    errors[1].style.display = "inline";
    hasErrors = true;
  } else {
    // console.log(city);
    errors[1].style.display = "none";
  }

  const department = document.forms.customerInfo.NPdepartment.value;
  if (department === "0") {
    errors[2].style.display = "inline";
    hasErrors = true;
  } else {
    // console.log(department);
    errors[2].style.display = "none";
  }

  const paymentType = document.forms.customerInfo.paymentType.value;
  if (!paymentType) {
    errors[3].style.display = "inline";
    hasErrors = true;
  } else {
    // console.log(paymentType);
    errors[3].style.display = "none";
  }

  const message = document.forms.customerInfo.message.value.trim();
  if (message.length > 0) {
    // console.log(message);
  }

  if (hasErrors) {
    alert("Помилка введення даних");
  } else {
    alert("Дякую за покупку");
  }
});
