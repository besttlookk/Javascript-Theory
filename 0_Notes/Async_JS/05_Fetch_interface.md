# Headers

- The Headers interface of the Fetch API allows you to perform various actions on HTTP request and response headers.
- These actions include retrieving, setting, adding to, and removing headers from the list of the request's headers.
- A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs. You can add to this using methods like append()
- In all methods of this interface, header names are matched by case-insensitive byte sequence.
- For security reasons, some headers can only be controlled by the user agent. These headers include the forbidden header names and forbidden response header names.
- A Headers object also has an associated guard, which takes a value of immutable, request, request-no-cors, response, or none. This affects whether the set(), delete(), and append() methods will mutate the header.
- You can retrieve a Headers object via the Request.headers and Response.headers properties, and create a new Headers object using the Headers.Headers() constructor.
- An object implementing Headers can directly be used in a for...of structure, instead of entries(): for (var p of myHeaders) is equivalent to for (var p of myHeaders.entries()).

## Headers()

- The Headers() constructor creates a new Headers object.

#### **SYNTAX**

```js
var myHeaders = new Headers(init);
```

#### **EXAMPLES**

- Creating an empty Headers object is simple:

```js
var myHeaders = new Headers(); // Currently empty
```

- You could add a header to this using Headers.append:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Returns 'image/jpeg'
```

- Or you can add the headers you want as the Headers object is created. In the following snippet we create a new Headers object, adding some headers by passing the constructor an init object as an argument:

```js
var httpHeaders = {
  "Content-Type": "image/jpeg",
  "X-My-Custom-Header": "Zeke are cool",
};
var myHeaders = new Headers(httpHeaders);
```

- You can now create another Headers object, passing it the first Headers object as its init object:

```js
var secondHeadersObj = new Headers(myHeaders);
secondHeadersObj.get("Content-Type"); // Would return 'image/jpeg' — it inherits it from the first headers object
```

## Headers Methods:

- **myHeaders.append(name, value);**

  - The append() method of the Headers interface appends a new value onto an existing header inside a Headers object, or adds the header if it does not already exist.
  - The difference between set() and append() is that if the specified header already exists and accepts multiple values, set() will overwrite the existing value with the new one, whereas append() will append the new value onto the end of the set of values.
  - returns void

- **myHeaders.delete(name);**
  - The delete() method of the Headers interface deletes a header from the current Headers object.
  - This method throws a TypeError for the following reasons:
    - The value of the name parameter is not the name of an HTTP header.
    - The value of Guard is immutable.
  - return void.
- **headers.entries();**

  - The Headers.entries() method returns an iterator allowing to go through all key/value pairs contained in this
    object.
  - The both the key and value of each pairs are ByteString objects.
  - returns an iterator.

    ```js
    // Create a test Headers object
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/xml");
    myHeaders.append("Vary", "Accept-Language");

    // Display the key/value pairs
    for (var pair of myHeaders.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
    ```

    ###### OUTPUT

    ```
    content-type: text/xml
    vary: Accept-Language
    ```

- **myHeaders.get(name)**
  - The get() method of the Headers interface returns a byte string of all the values of a header within a Headers object with a given name.
  - If the requested header doesn't exist in the Headers object, it returns null.
    ```js
    myHeaders.append("Content-Type", "image/jpeg");
    myHeaders.get("Content-Type"); // Returns "image/jpeg"
    ```
- **myHeaders.has(name)**
  - The has() method of the Headers interface returns a boolean stating whether a Headers object contains a certain header.
- **headers.keys()**

  - The Headers.keys() method returns an iterator allowing to go through all keys contained in this object. The keys are ByteString objects.

    ```js
    // Create a test Headers object
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/xml");
    myHeaders.append("Vary", "Accept-Language");

    // Display the keys
    for (var key of myHeaders.keys()) {
      console.log(key);
    }
    ```

- **myHeaders.set(name, value);**
  - The set() method of the Headers interface sets a new value for an existing header inside a Headers object, or adds the header if it does not already exist.
  - returns void.
- **Headers.values()**

  - The Headers.values() method returns an iterator allowing to go through all values contained in this object. The values are ByteString objects.

  ```js
  // Create a test Headers object
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/xml");
  myHeaders.append("Vary", "Accept-Language");

  // Display the values
  for (var value of myHeaders.values()) {
    console.log(value);
  }
  ```

---

# Request

- The Request interface of the Fetch API represents a resource request.
- You can create a new Request object using the Request() constructor, but you are more likely to encounter a Request object being returned as the result of another API operation, such as a service worker FetchEvent.request.

## Request()

- The Request() constructor creates a new Request object.

#### **SYNTAX**

```js
var myRequest = new Request(input[, init]);
```

#### **PARAMETERS**

- **input**
  - Defines the resource that you wish to fetch. This can either be:
    - A USVString containing the direct URL of the resource you want to fetch.
    - A Request object, effectively creating a copy. Note the following behavioral updates to retain security while making the constructor less likely to throw exceptions:
      - If this object exists on another origin to the constructor call, the Request.referrer is stripped out.
      - If this object has a Request.mode of navigate, the mode value is converted to same-origin.
- **init Optional**
  - An options object containing any custom settings that you want to apply to the request. The possible options are:
    - **method: **The request method, e.g., GET, POST. The default is GET.
    - **headers:** Any headers you want to add to your request, contained within a Headers object or an object literal with ByteString values.
    - **body:** Any body that you want to add to your request: this can be a Blob, BufferSource, FormData, URLSearchParams, USVString, or ReadableStream object. Note that a request using the GET or HEAD method cannot have a body.
    - **mode:** The mode you want to use for the request, e.g., cors, no-cors, same-origin, or navigate. The default is cors.
    - **credentials:** The request credentials you want to use for the request: omit, same-origin, or include. The default is same-origin.
    - **cache:** The cache mode you want to use for the request.
    - **redirect:** The redirect mode to use: follow, error, or manual. The default is follow.
    - **referrer:** A USVString specifying no-referrer, client, or a URL. The default is about:client.
    - **integrity:** Contains the subresource integrity value of the request (e.g., sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=).

#### **EXAMPLE**

```js
var myImage = document.querySelector("img");

var myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then(function (response) {
    return response.blob();
  })
  .then(function (response) {
    var objectURL = URL.createObjectURL(response);
    myImage.src = objectURL;
  });
```

```js
var myInit = {
  method: "GET",
  headers: {
    "Content-Type": "image/jpeg",
  },
  mode: "cors",
  cache: "default",
};

var myRequest = new Request("flowers.jpg", myInit);
```

#### **PROPERTIES**

- **Request.body (Read only)**
  - A ReadableStream of the body contents.
- **Request.bodyUsed Read only**
  - Stores true or false to indicate whether or not the body has been used in a request yet.
- **Request.cache Read only**
  - Contains the cache mode of the request (e.g., default, reload, no-cache).
- **Request.credentials Read only**
  - Contains the credentials of the request (e.g., omit, same-origin, include). The default is same-origin.
- **Request.destination Read only**
  - Returns a string describing the request's destination. This is a string indicating the type of content being requested.
- **Request.headers Read only**
  - Contains the associated Headers object of the request.
- **Request.integrity Read only**
  - Contains the subresource integrity value of the request (e.g., sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=).
- **Request.method Read only**
  - Contains the request's method (GET, POST, etc.)
- **Request.mode Read only**
  - Contains the mode of the request (e.g., cors, no-cors, same-origin, navigate.)
- **Request.redirect Read only**
  - Contains the mode for how redirects are handled. It may be one of follow, error, or manual.
- **Request.referrer Read only**
  - Contains the referrer of the request (e.g., client).
- **Request.referrerPolicy Read only**
  - Contains the referrer policy of the request (e.g., no-referrer).
- **Request.url Read only**
  - Contains the URL of the request.

#### **METHODS**

- **Request.arrayBuffer()**
  - The arrayBuffer() method of the Request interface reads the request body and returns it as a promise that resolves with an ArrayBuffer.

```js
request.arrayBuffer().then(function (buffer) {
  // do something with the buffer
});
```

```js
const myArray = new Uint8Array(10);

const request = new Request("/myEndpoint", {
  method: "POST",
  body: myArray,
});

request.arrayBuffer().then(function (buffer) {
  // do something with the buffer sent in the request
});
```

- **Request.blob()**
  - The blob() method of the Request interface reads the request body and returns it as a promise that resolves with a Blob.

```js
request.blob().then(function (myBlob) {
  // do something with myBlob
});
```

```js
const obj = { hello: "world" };
const myBlob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});

const request = new Request("/myEndpoint", {
  method: "POST",
  body: myBlob,
});

request.blob().then(function (myBlob) {
  // do something with the blob sent in the request
});
```

- **Request.formData()**
  - The formData() method of the Request interface reads the request body and returns it as a promise that resolves with a FormData object.

```js
request.formData().then(function (formdata) {
  // do something with your formdata
});
```

```js
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append("username", "abc123");
formData.append("avatar", fileField.files[0]);

const request = new Request("/myEndpoint", {
  method: "POST",
  body: formData,
});

request.formData().then(function (data) {
  // do something with the formdata sent in the request
});
```

- **Request.json()**
  - The json() method of the Request interface reads the request body and returns it as a promise that resolves with the result of parsing the body text as JSON.
  - Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

```js
request.json().then((data) => {
  // do something with your data
});
```

```js
const obj = { hello: "world" };

const request = new Request("/myEndpoint", {
  method: "POST",
  body: JSON.stringify(obj),
});

request.json().then(function (data) {
  // do something with the data sent in the request
});
```

- **Request.text()**
  - The text() method of the Request interface reads the request body and returns it as a promise that resolves with a String. The response is always decoded using UTF-8.

```js
request.text().then(function (text) {
  // do something with the text sent in the request
});
```

```js
const text = "Hello world";

const request = new Request("/myEndpoint", {
  method: "POST",
  body: text,
});

request.text().then(function (text) {
  // do something with the text sent in the request
});
```

## Response

- The Response interface of the Fetch API represents the response to a request.
- Methods and properties are same as request object
