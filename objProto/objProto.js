function myFunctionobjProtoProp() {

    // Import the module asynchronously
    // Import { person } as an object to match the exported object.
    import("./person.js")
        .then(({ person }) => {

            console.log(" === Object Inheritance: Property === ");
            console.log("Name :" + person.name)
            console.log("Age :" + person.age)
            setTimeout(() => { document.getElementById("valueobjProtoProp").value = person.message1() }, 3000);
            setTimeout(() => { document.getElementById("valueobjProtoProp").value = person.message2() }, 9000);

            person.prototype.language = "Tagalog";
            console.log("Language :" + person.language)
            setTimeout(() => { document.getElementById("valueobjProtoProp").value = person.message2() + " who speaks " + person.language }, 15000);


        })
        .catch(error => {
            console.error("Error importing module:", error);
        });

}