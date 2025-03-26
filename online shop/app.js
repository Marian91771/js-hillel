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
  informationElement.textContent = `Description: ${product.description}`;
  parent.appendChild(informationElement);

  const priceElement = document.createElement("div");
  priceElement.textContent = `Price: ${product.price}`;
  parent.appendChild(priceElement);

  const buyBtn = document.createElement("button");
  buyBtn.setAttribute("type", "button");
  buyBtn.classList.add("buyBtn");
  buyBtn.textContent = "Buy";
  parent.appendChild(buyBtn);

  // Відображення форми
  buyBtn.addEventListener("click", () => {
    const form = document.querySelector('form[name="customerInfo"]');
    form.style.display = "block";
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

let selectedProduct = null;

document.querySelector(".products").addEventListener("click", (event) => {
  if (!event.target.classList.contains("product-item")) {
    return;
  }

  const productId = parseInt(event.target.getAttribute("data-product-id"));
  selectedProduct = categories
    .flatMap((category) => category.products)
    .find((product) => product.id === productId);

  if (selectedProduct) {
    showInformation(selectedProduct);
  }
});

// Валідація форми
const subBtn = document.querySelector(".subBtn");
const errors = document.querySelectorAll(".error");

subBtn.addEventListener("click", () => formValidation());

function formValidation(){
  let hasErrors = false;

  const name = document.forms.customerInfo.name.value.trim();
  if (
    !name.match(
      /^[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ][а-яіїєґ]+$/
    )
  ) {
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

    const customerInfo = {
      name: name,
      city: city,
      department: department,
      paymentType: paymentType,
      message: message,
    }

    addToOrders(selectedProduct, customerInfo);
  }
}





const currentOrders = getOrders();

// додаємо замовлення в локалсторадж
function addToOrders(product, customer){
  const order = {
    date: new Date().toLocaleDateString("uk-UA"),
    name: product.name,
    description: product.description,
    price: product.price,
    customerInfo: customer
  }


  currentOrders.push(order);
  localStorage.setItem('orders', JSON.stringify(currentOrders));
}

function getOrders(){
  return JSON.parse(localStorage.getItem('orders')) || [];
}

function showOrders(){
  const ordersSection = document.querySelector('.ordersWrapper');
  ordersSection.textContent = '';
  if (!currentOrders || currentOrders.length === 0) {
    ordersSection.insertAdjacentText("beforeend", "Немає замовлень");
    return;
  }

  currentOrders.forEach((order, index) => {
    const orderDiv = document.createElement("div");
    orderDiv.classList.add("accordion");
  
    orderDiv.innerHTML = `
      <div class="accordion-header">
        <div>
          <span>Дата: ${order.date}</span> | 
          <span>Товар: ${order.name}</span> | 
          <span>Ціна: ${order.price} грн</span>
        </div>
        <button class="deleteBtn" data-order-item="${index}">Delete</button>
      </div>
      <div class="accordion-content">
        <p><strong>Опис:</strong> ${order.description}</p>
        <p><strong>Ім'я замовника:</strong> ${order.customerInfo.name}</p>
        <p><strong>Місто:</strong> ${order.customerInfo.city}</p>
        <p><strong>Номер відділення:</strong> ${order.customerInfo.department}</p>
        <p><strong>Тип оплати:</strong> ${order.customerInfo.paymentType}</p>
        <p><strong>Коментар:</strong> ${order.customerInfo.message}</p>
      </div>
    `;
  
    ordersSection.appendChild(orderDiv);
  });
  
}


//видалення замовлення
document.addEventListener('click', (event) => {
  if(event.target.hasAttribute('data-order-item')){
    const orderIndex = event.target.getAttribute('data-order-item');
    currentOrders.splice(orderIndex, 1);
    localStorage.setItem('orders', JSON.stringify(currentOrders));
    showOrders();
  }
})


//для акордиону
document.addEventListener('click', function(event) {
  if (event.target.closest('.accordion-header')) {
      let accordion = event.target.closest('.accordion');
      accordion.classList.toggle('active');
  }
});



//Виведення ордерів
const itemSelector = document.querySelector('.selectItem');
const form = document.querySelector('form[name="customerInfo"]');
const ordersSection = document.querySelector('.ordersSection');

document.querySelector('.show-orders').addEventListener('click', () => {
  itemSelector.style.display = 'none';
  form.style.display = 'none';
  ordersSection.style.display = 'block';
  showOrders();
})

document.querySelector('.returnBtn').addEventListener('click', () => {
  itemSelector.style.display = 'block';
  form.style.display = 'none';
  ordersSection.style.display = 'none';
})