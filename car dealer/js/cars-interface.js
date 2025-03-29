// const carActions = {
//   view: viewCarDetails,
//   edit: editCarForm
// };

function createCarsInterface() {
  const parent = document.querySelector(".wrapper");
  parent.textContent = " ";
  generateAddButton(parent);
  generateGrid(parent);
}

function generateGrid(parent) {
  const data = getCars();
  const gridElement = document.createElement("div");
  gridElement.classList.add("grid");
  generateGridHeader(gridElement);
  generateGridContent(gridElement, data);

  observeGridButtons(gridElement);

  parent.appendChild(gridElement);
}

function observeGridButtons(gridElement) {
  gridElement.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") {
      return;
    }

    const buttonType = event.target.getAttribute("data-action");
    const carId = event.target.parentNode.getAttribute("data-id");

    // 1
    if (buttonType === "view") {
      viewCarDetails(carId);
    } else if (buttonType === "edit") {
      editCarForm(carId);
    } else if (buttonType === "delete") {
      showPopup(carId);
    }

    // 2
    // switch(buttonType) {
    //   case 'view':
    //     // viewCarDetails(carId);
    //     break;
    // }

    // 3
    // buttonType === 'view' && viewCarDetails(carId);
    // buttonType === 'edit' && editCarForm(carId);

    // 4
    // carActions[buttonType](carId);
  });
}

function generateGridHeader(parent) {
  parent.innerHTML = `
    <div class="row header-row">
      <div>Brand</div>
      <div>Model</div>
      <div>Color</div>
      <div>Year</div>
      <div>Operations</div>
    </div>
  `;
}

function generateGridContent(parent, cars) {
  for (let car of cars) {
    const row = `
      <div class="row car-row">
        <div>${car.brand}</div>
        <div>${car.model}</div>
        <div>${car.color}</div>
        <div>${car.year}</div>
        <div data-id="${car.id}">
          <button type="button" data-action="view">View</button>
          <button type="button" data-action="edit">Edit</button>
          <button type="button" data-action="delete">Delete</button>
        </div>
      </div>
    `;

    parent.innerHTML += row;
  }
}

function generateAddButton(parent) {
  const button = document.createElement("button");
  button.textContent = "Add new car";
  button.classList.add("add-button");
  button.addEventListener("click", () => {
    const parent = document.querySelector(".wrapper");
    generateCarForm(parent);
  });
  parent.appendChild(button);
}

function hideCarForm() {
  document.querySelector(".wrapper").innerHTML = "";
}

function viewCarDetails(carId) {
  const car = getCarById(carId);
  const parent = document.querySelector(".wrapper");

  const carInfo = `
    <div class="carInfo">
    <h3>Car Information</h3>
    <p>Brand: ${car.brand}</p>
    <p>Model: ${car.model}</p>
    <p>Color: ${car.color}</p>
    <p>Year: ${car.year}</p>
    <p>Complectation: ${car.complectation}</p>
  </div>
  `;

  parent.innerHTML = carInfo;
}

function deleteCar(carId) {
    deleteCarById(carId);
    const elementToBeRemoved = document.querySelector(`.car-row *[data-id="${carId}"]`).parentNode;
    elementToBeRemoved.remove();
}

function editCarForm(carId) {
  const parent = document.querySelector(".wrapper");
  generateCarForm(parent, carId);
}

function generateCarForm(parent, carId = "") {
  const car = carId ? getCarById(carId) : null;

  // const form = document.createElement('form');
  // for (let formItemKey in carFormConfig) {
  //   const itemElement = document.createElement(carFormConfig[formItemKey].tag);
  //   itemElement.setAttribute('type', carFormConfig[formItemKey].type);
  // form.appendChild(itemElement)
  // }

  const form = `
    <form name="car">
      <p>
        <input type="text" name="brand" placeholder="Enter brand" ${
          car ? `value="${car.brand}"` : ""
        }>
        <span class="error brand-error"></span>
      </p>
      <p>
        <input type="text" name="model" placeholder="Enter model" ${
          car ? `value="${car.model}"` : ""
        }>
        <span class="error model-error"></span>
      </p>
      <p>
        <input type="text" name="color" placeholder="Enter color" ${
          car ? `value="${car.color}"` : ""
        }>
        <span class="error color-error"></span>
      </p>
      <p>
        <input type="text" name="year" placeholder="Enter year" ${
          car ? `value="${car.year}"` : ""
        }>
        <span class="error year-error"></span>
      </p>
      <p>
        <input type="text" name="complectation" placeholder="Enter complectation name" ${
          car ? `value="${car.complectation}"` : ""
        }>
        <span class="error complectation-error"></span>
      </p>
      <p>
        <input type="hidden" name="carId" value="${carId}" />
        <button type="button">Save</button>
      </p>
    </form>
  `;

  parent.innerHTML = form;

  observeCarFormButton();
}

function observeCarFormButton() {
  document
    .querySelector('form[name="car"] button')
    .addEventListener("click", () => {
      const form = document.forms.car;

      const car = {
        brand: form.brand.value,
        model: form.model.value,
        year: form.year.value,
        color: form.color.value,
        complectation: form.complectation.value,
      };

      const carId = form.carId.value;
      // 1 - validation
      if (isValid(carFormConfig, car)) {
        // 2 - create or edit
        if (carId) {
          car.id = carId;
          saveCar(car, "edit");
        } else {
          const id = Date.now();
          car.id = id;
          saveCar(car);
        }

        hideCarForm();
        createCarsInterface();
      }
    });
}
