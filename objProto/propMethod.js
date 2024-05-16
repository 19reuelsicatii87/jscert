function myFunctionPropMethod() {

    // Import the module asynchronously
    // Import { person } as an object to match the exported object.
    import("./person.js")
        .then(({ Person }) => {

            const person = new Person();
            console.log(" === Object Inheritance: Property === ");
            console.log("Name: " + person.name);
            console.log("Age: " + person.age);
            console.log("Sex: " + person.sex);
            setTimeout(() => { document.getElementById("valuePropMethod").value = person.message1() }, 3000);
            setTimeout(() => { document.getElementById("valuePropMethod").value = person.message2() }, 9000);

            Person.prototype.language = "Tagalog";
            console.log("Language: " + person.language)
            setTimeout(() => { document.getElementById("valuePropMethod").value = person.message2() + " who speaks " + person.language }, 12000);


            Person.prototype.message3 = () => {
                return person.name + ' is ' + person.age + 'years old whose gender is ' + person.sex
                    + " and speaks " + person.language
            };
            console.log("Message 3: " + person.message3())
            setTimeout(() => { document.getElementById("valuePropMethod").value = person.message3() }, 15000);


        })
        .catch(error => {
            console.error("Error importing module:", error);
        });

}