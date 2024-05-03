function myFunctionDynamicImport2() {

    // Import the module asynchronously
    // Import { person } as an object to match the exported object.
    import("./person2.js")
        .then(({person}) => {

            console.log(" === Dynamic Import 2 === ");
            console.log("Name :" + person.name)
            console.log("Age :" + person.age)
            setTimeout(() => { document.getElementById("valueDynamicImport2").value = person.message1() }, 3000);
            setTimeout(() => { document.getElementById("valueDynamicImport2").value = person.message2() }, 9000);


        })
        .catch(error => {
            console.error("Error importing module:", error);
        });

}