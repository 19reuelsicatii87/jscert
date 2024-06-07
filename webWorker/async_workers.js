

setTimeout(myFunctionPromiseCallbackAsyncXMLHttpRequest('https://reqres.in/api/users/2?delay=10', 'This is from ASYNC 200 - code execution is NOT halted'), 1000);
setTimeout(myFunctionPromiseCallbackAsyncXMLHttpRequest('https://reqres.in/api/users/23', 'This is from ASYNC 404 - code execution is NOT halted'), 2000);

function myFunctionPromiseCallbackAsyncXMLHttpRequest(url, content) {

    // This is a Async Request
    var xhr = new XMLHttpRequest();

    // false indicates a synchronous request
    console.log("Performning Asynchronous Task -- " + new Date());
    xhr.open('GET', url, true);


    xhr.onreadystatechange = function () {

        console.log("readystatechange  -- " + xhr.readyState + " -- " + new Date());

        //Declaring a Promise
        var myPromise = new Promise(function (myResolve, myReject) {

            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                myResolve({ response: xhr.response, content: content });
            } else {
                myReject({ response: " -- No Response Yet -- ", content: content });
            }
        });

        // Ensure to wrap multiple values into an object when passing more than one value
        myPromise.then(
            function (result) { postMessage(JSON.stringify(result)); },
            function (result) { postMessage(JSON.stringify(result)); }
        );

    }

    xhr.send();

}