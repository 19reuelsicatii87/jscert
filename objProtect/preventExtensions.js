function myFunctionPreventExtensionsArray() {

    // Create Object
    const person = ["John", "Doe"];

    // Prevent Extensions
    Object.preventExtensions(person);


    // Object.preventExtensions(person) prevents the addition of 
    // the nationality property to the person object. When you attempt 
    // to add the nationality property with person.nationality = "English";, 
    // it silently fails without throwing an error. This behavior is expected 
    // when using Object.preventExtensions().
    try {
        console.log(" === Object Protection: Array === ");
        console.log(person);

        setTimeout(() => { document.getElementById("valuePreventExtensionsArray").value = person[0] }, 3000);
        setTimeout(() => { document.getElementById("valuePreventExtensionsArray").value = person[1] }, 9000);

        person.push = "English";
    }
    catch (error) {
        console.log("PreventExtensions Error: ", error);
    }

    // Check if the object is extensible
    console.log("Is extensible:", Object.isExtensible(person));

}


function myFunctionPreventExtensionsObject() {

    // Import the module asynchronously
    // Import { person } as an object to match the exported object.
    import("./person.js")
        .then(({ person }) => {

            console.log(" === Object Protection: Object === ");
            console.log("Name: " + person.name);
            console.log("Age: " + person.age);
            console.log("Sex: " + person.sex);
            console.log("Message1 : " + person.message1());
            console.log("Message2 : " + person.message2());
            setTimeout(() => { document.getElementById("valuePreventExtensionsObject").value = person.message1() }, 3000);
            setTimeout(() => { document.getElementById("valuePreventExtensionsObject").value = person.message2() }, 9000);

            // Prevent Extensions
            Object.preventExtensions(person);

            try {
                person.language = "Tagalog";

            }
            catch (error) {
                console.log("PreventExtensions Error: ", error);
            }

            // Check if the object is extensible
            console.log("Is extensible:", Object.isExtensible(person));

        })
        .catch(error => {
            console.log("Import Error: ", error);
        });

}