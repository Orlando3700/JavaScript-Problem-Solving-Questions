// Write a Program to delete a property from an object

// In this code, an object obj with properties name and age is
// created. The delete keyword removes the age property from the
// object. After deletion, console.log(obj) outputs the object,
// which now only contains the name property: { name: 'Orlando' }.

const obj = { name: 'Orlando', age: 21 };
delete obj.age;
console.log(obj);