// 10_1
const user = {
  name: "Marian",
  age: 18,
  location: "Chernivtsi",
  showUser: function () {
    console.log(`Name - ${this.name}`);
    console.log(`Age - ${this.age}`);
    console.log(`Location - ${this.namlocatione}`);
  },
};
user.showUser();

//10_2
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let filteredArr = array.filter((number) => number % 2 === 0);
console.log(filteredArr);

//10_3
const contacts = {
  list: [
    { name: "Marian", phone: "0502478109", email: "marian@gmail.com" },
    { name: "Max", phone: "0669474254", email: "max@gmail.com" },
    { name: "Andriy", phone: "0779495959", email: "andriy@gmail.com" },
    { name: "Mykola", phone: "0674949494", email: "mykola@gmail.com" },
  ],

  findContact: function (name) {
    const userInfo = this.list.find((contact) => contact.name === name);
    console.log(userInfo || "Not found")
  },

  addContact: function(name, phone, email){
    this.list.push({name, phone, email});
    console.log(`Сontact added`);
    console.log(this.list)
  }
};

contacts.findContact('Mykola');
contacts.addContact('Denys', '0506439376', 'denys@gmail.com')

// ДЗ з презентації у файлі practice10.js