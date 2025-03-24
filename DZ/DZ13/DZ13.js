const subBtn = document.querySelector('button[type="button"]');
const errors = document.querySelectorAll(".error");

subBtn.addEventListener("click", () => {
  const name = document.forms.formDz13.name.value;
  if (!name.match(/[A-Z][a-z]+$/)) {
    errors[0].style.display = "inline";
  } else {
    console.log(name);
    errors[0].style.display = "none";
  }

  const message = document.forms.formDz13.message.value;
  if (!message.match(/\w{5,}/)) {
    errors[1].style.display = "inline";
  } else {
    console.log(message);
    errors[1].style.display = "none";
  }

  const phoneNum = document.forms.formDz13.phoneNum.value;
  if (!phoneNum.match(/^\+380\d{9}$/)) {
    errors[2].style.display = "inline";
  } else {
    console.log(phoneNum);
    errors[2].style.display = "none";
  }

  const email = document.forms.formDz13.email.value;
  if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
    errors[3].style.display = "inline";
  } else {
    console.log(email)
  }
  
});

// Додаткове дз з інтернет магазином в папці "online shop"