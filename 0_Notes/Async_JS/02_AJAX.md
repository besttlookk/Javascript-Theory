# What is AJAX?

## AJAX = Asynchronous JavaScript And XML.

- **AJAX is not a programming language.**

- **AJAX just uses a combination of:** - A browser built-in **XMLHttpRequest object** (to request data from a web server),
  **JavaScript** and HTML DOM (to display or use the data)
- AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.

- AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

## How AJAX Works

1.  An event occurs in a web page (the page is loaded, a button is clicked)
2.  An XMLHttpRequest object is created by JavaScript
3.  The XMLHttpRequest object sends a request to a web server
4.  The server processes the request
5.  The server sends a response back to the web page
6.  The response is read by JavaScript
7.  Proper action (like page update) is performed by JavaScript

## Modern Browsers (Fetch API)

- Modern Browsers can use Fetch API instead of the XMLHttpRequest Object.

- The Fetch API interface allows web browser to make HTTP requests to web servers.

- If you use the XMLHttpRequest Object, Fetch can do the same in a simpler way.

- The **keystone of AJAX** is the XMLHttpRequest object.

  - Create an XMLHttpRequest object
  - Define a callback function
  - Open the XMLHttpRequest object
  - Send a Request to a server

## The XMLHttpRequest Object

- All modern browsers support the XMLHttpRequest object.

- The **XMLHttpRequest object** can be used to exchange data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

## Create an XMLHttpRequest Object

- All modern browsers (Chrome, Firefox, IE, Edge, Safari, Opera) have a built-in XMLHttpRequest object.

- **Syntax for creating an XMLHttpRequest object:**

```js
variable = new XMLHttpRequest();
```

## Define a Callback Function

- A callback function is a function passed as a parameter to another function.

- In this case, the callback function should contain the code to execute when the response is ready.

```js
xhttp.onload = function () {
  // What do do when the response is ready
};
```

## Send a Request

- To send a request to a server, you can use the **open() and send() methods of the XMLHttpRequest object**:

```js
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
```

```js
Example;
// Create an XMLHttpRequest object
const xhttp = new XMLHttpRequest();

// Define a callback function
xhttp.onload = function () {
  // Here you can use the Data
};

// Send a request
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
```

## Access Across Domains

- For security reasons, modern browsers do not allow access across domains.

- This means that both the web page and the XML file it tries to load, must be located on the same server.

- If you want to use the example above on one of your own web pages, the XML files you load must be located on your own server.

## XMLHttpRequest Object Methods

| Method                              | Description                                             |
| ----------------------------------- | ------------------------------------------------------- |
| new XMLHttpRequest()                | Creates a new XMLHttpRequest object                     |
| abort()                             | Cancels the current request                             |
| getAllResponseHeaders()             | Returns header information                              |
| getResponseHeader()                 | Returns specific header information                     |
| open(method, url, async, user, psw) | Specifies the request                                   |
| send()                              | Sends the request to the server-Used for GET requests   |
| send(string)                        | Sends the request to the server.-Used for POST requests |
| setRequestHeader()                  | Adds a label/value pair to the header to be sent        |

- method: the request type GET or POST
- url: the file location
- async: true (asynchronous) or false (synchronous)
- user: optional user name
- psw: optional password|

## XMLHttpRequest Object Properties

| Property           | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| onload             | Defines a function to be called when the request is recived (loaded) |
| onreadystatechange | Defines a function to be called when the readyState property changes |
| readyState         | Holds the status of the XMLHttpRequest.                              |
| responseText       | Returns the response data as a string                                |
| responseXML        | Returns the response data as XML data                                |
| status             | Returns the status-number of a request                               |
| statusText         | Returns the status-text (e.g. "OK" or "Not Found")                   |

- status of the XMLHttpRequest.
  - 0: request not initialized
  - 1: server connection established
  - 2: request received
  - 3: processing request
  - 4: request finished and response is ready

## The onload Property

- With the XMLHttpRequest object you can define a callback function to be executed when the request receives an answer.

- The function is defined in the onload property of the XMLHttpRequest object:

```js
Example;
xhttp.onload = function () {
  document.getElementById("demo").innerHTML = this.responseText;
};
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
```

## The onreadystatechange Property

- The readyState property holds the status of the XMLHttpRequest.

- The onreadystatechange property defines a callback function to be executed when the readyState changes.

- The status property and the statusText property holds the status of the XMLHttpRequest object.
- **The onreadystatechange function is called every time the readyState changes.**
- When readyState is 4 and status is 200, the response is ready:

```js
Example
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt");
  xhttp.send();
}

The onreadystatechange event is triggered four times (1-4), one time for each change in the readyState.
```

```js
Example;
xhttp.open("POST", "ajax_test.asp");
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford");
```

---

- An Ajax call is a specific type of asynchronous operation.
- You can make an Ajax call either with a traditional callback using the XMLHttpRequest interface or you can make an Ajax call (in modern browsers), using a promise with the fetch() interface.

#### **EXAMPLES**

> > **READING FILE USING onload()**

```js
function makerequest() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);

  //  jab readyState === 4 hoga tab ja ker ye callack function run hoga
  xhr.onload = function () {
    console.log(this); // XMLHttpRequest Object
    console.log(this.status); // 200 or 404
    console.log(this.statusText); // OK or Not Found
    console.log(this.readyState); // 4
    if (this.status == 200) {
      var data = this.responseText;
      document.getElementById("data").innerHTML = data;
    } else {
      console.log("Something went wrong");
    }
  };
  xhr.send();
}
```

> > **READING FILE USING onreadystatechange()**

```js
function makerequest() {
  var xhr = new XMLHttpRequest();
  console.log(xhr.readyState); // 0 : Object created BUT Request Not initialized
  xhr.open("GET", "data.txt", true);
  console.log(xhr.readyState); // 1 : Server connection establised

  // yani ye callback function 3 baar run karega: for each change in readyState from [2 to 4]
  xhr.onreadystatechange = function () {
    console.log(this); // XHR Object
    console.log(this.status); // 200
    console.log(this.statusText); // OK
    console.log(this.readyState); // 2[request received],3[processing request],4[request fininshed and response ready]
    if (this.readyState == XMLHttpRequest.DONE) {
      if (this.status == 200) {
        //   console.log(xhr);
        //   console.log(xhr.responseText);
        var data = this.responseText;
        document.getElementById("data").innerHTML = data;
      } else {
        console.log("Something went wrong");
      }
    }
  };
  xhr.send();
}
```
