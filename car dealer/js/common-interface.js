const serviceMode = {
  cars: {
    title: "Cars",
    callback: createCarsInterface,
  },
  clients: {
    title: "Clients",
    callback: () => console.log("Clients"),
  },
};

function generateNavigation() {
  const parent = document.querySelector("nav");

  const listElement = document.createElement("ul");

  for (let mode in serviceMode) {
    const item = document.createElement("li");
    item.setAttribute("data-mode", mode);
    item.textContent = serviceMode[mode].title;

    item.addEventListener("click", serviceMode[mode].callback);

    listElement.appendChild(item);
  }

  parent.appendChild(listElement);
}


//PopUp scripts
function showPopup(itemId) {
  const car = getCarById(itemId);

  const popUpBg = document.querySelector("#modal-background");
  popUpBg.classList.add("opened");

  const popUpContent = `
    <div id="modal">
      <h3>Are you sure you want to delete ${car.brand, car.model}?</h3>
      <div class="button-section">
        <button id="yesBtn" type="button">Yes</button>
        <button id="noBtn" type="button">No</button>
      </div>
    </div>
  `;

  popUpBg.innerHTML = popUpContent;
  validPopup(popUpBg, itemId)
}

function validPopup(background, itemId){
  const yesBtn = document.querySelector('#yesBtn');
  const noBtn = document.querySelector('#noBtn');

  document.addEventListener('click', (event) => {
    if(event.target == background || event.target == noBtn){
      closePopup(background);
      return false;
    } else if(event.target == yesBtn){
      closePopup(background);
      deleteCar(itemId);
      return true;
    }
  })
}

function closePopup(background){
  background.classList.remove("opened");
  background.textContent = '';
}