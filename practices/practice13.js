const btn = document.querySelector('button[type="button"]');

btn.addEventListener('click', () => {
    const name = document.forms.userInfo.name.value;
    const date = document.forms.userInfo.date.value;
    // const gender = document.fonts.userInfo.gender.value;
    const city = document.forms.userInfo.city.value;

    console.log(name);
    console.log(date);
    // console.log(gender);
    console.log(city);
})