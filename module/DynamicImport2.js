function myFunctionDynamicImport2() {

    // Import the module asynchronously
    // Import { person } as an object to match the exported object.
    import("./person2.js")
        .then(({ person }) => {

            console.log(" === Dynamic Import 2 === ");
            console.log("Name :" + person.name)
            console.log("Age :" + person.age)
            setTimeout(() => { document.getElementById("valueDynamicImport2").value = person.message1() }, 3000);
            setTimeout(() => { document.getElementById("valueDynamicImport2").value = person.message2() }, 9000);



            // ================ adding method ========================
            person.zeroAge = () => { person.age = 0; };

            // method is call as function
            person.zeroAge();
            console.log("Age :" + person.age)




            // ================ adding method using getter and setter ========================

            //use arrow function with person object
            Object.defineProperty(person, "resetAge", {
                get: () => { person.age = 100; }
            });

            // use regular function with "this" keyword 
            // to refer to person object
            Object.defineProperty(person, "addAge", {
                set: function (value) { person.age += value; }
            });

            Object.defineProperty(person, "subAge", {
                set: (value) => { person.age -= value; }
            });


            // method is call as property
            person.resetAge;
            console.log("Age :" + person.age)
            person.addAge = 5;
            console.log("Age :" + person.age)
            person.subAge = 85;
            console.log("Age :" + person.age)





        })
        .catch(error => {
            console.error("Error importing module:", error);
        });

}