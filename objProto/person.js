
function Person() {
    this.name = "Jason";
    this.age = 50;
    this.sex = "Lesbian";
    this.message1 = function () { return this.name + ' is ' + this.age + 'years old.'; };
    this.message2 = () => { return this.name + ' is ' + this.age + 'years old whose gender is ' + this.sex; };
}


export { Person };