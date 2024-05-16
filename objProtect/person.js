
const person = {
    name: "Jason",
    age: 50,
    sex: "Lesbian",
    message1: function () { return person.name + ' is ' + person.age + 'years old.'; },
    message2: () => { return person.name + ' is ' + person.age + 'years old whose gender is ' + person.sex; }
}

export { person }