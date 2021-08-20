# Fetch API

- The Fetch API provides an interface for fetching resources (including across the network).
- It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

## Concepts and usage

- Fetch provides a generic definition of Request and Response objects (and other things involved with network requests).
- This will allow them to be used wherever they are needed in the future, whether it’s for service workers, Cache API, and other similar things that handle or modify requests and responses, or any kind of use case that might require you to generate your responses programmatically (that is, the use of computer program or personal programming instructions).
- It also defines related concepts such as CORS and the HTTP Origin header semantics, supplanting their separate definitions elsewhere.
- For making a request and fetching a resource, use the WindowOrWorkerGlobalScope.fetch() method. It is implemented in multiple interfaces, specifically Window and WorkerGlobalScope. This makes it available in pretty much any context you might want to fetch resources in.
- The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status. You can also optionally pass in an init options object as the second argument (see Request).
- Once a Response is retrieved, there are a number of methods available to define what the body content is and how it should be handled.
- You can create a request and response directly using the Request() and Response() constructors, but it's uncommon to do this directly. Instead, these are more likely to be created as results of other API actions

## Differences from jQuery

- The fetch specification differs from jQuery.ajax() in three main ways:
  - The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing.
  - fetch() won’t send cross-origin cookies unless you set the credentials init option (to include).

---

## WindowOrWorkerGlobalScope.fetch()

- The fetch() method of the WindowOrWorkerGlobalScope mixin starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.
- he promise resolves to the Response object representing the response to your request.

`The promise does not reject on HTTP errors — it only rejects on network errors. You must use then handlers to check for HTTP errors.(check the Response.ok and/or Response.status properties.)`

- WindowOrWorkerGlobalScope is implemented by both Window and WorkerGlobalScope, which means that the fetch() method is available in pretty much any context in which you might want to fetch resources.

`Note: The fetch() method's parameters are identical to those of the Request() constructor.`

#### **SYNTAX**

```
const fetchResponsePromise = fetch(resource [, init])
```

#### **PARAMETERS**

- **resource**
  - This defines the resource that you wish to fetch. This can either be:
    - A string or any other object with a stringifier — including a URL object — that provides the URL of the resource you want to fetch.
    - A Request object.
- **init (Optional)**
  - An object containing any custom settings that you want to apply to the request. The possible options are:
    - **method**
      - The request method, e.g., GET, POST. Note that the Origin header is not set on Fetch requests with a method of HEAD or GET.
    - **headers**
      - Any headers you want to add to your request, contained within a Headers object or an object literal with ByteString values.
    - **body**
      - Any body that you want to add to your request: this can be a Blob, BufferSource, FormData, URLSearchParams, USVString, or ReadableStream object.
      - Note that a request using the GET or HEAD method cannot have a body.
    - **mode**
      - The mode you want to use for the request, e.g., cors, no-cors, or same-origin.
    - **credentials**
      - Controls what browsers do with credentials (cookies, HTTP authentication entries, and TLS client certificates).
      - Must be one of the following strings:
        - **_omit :_** Tells browsers to exclude credentials from the request, and ignore any credentials sent back in the response (e.g., any Set-Cookie header).
        - **_same-origin :_**
          Tells browsers to include credentials with requests to same-origin URLs, and use any credentials sent back in responses from same-origin URLs.
        - **_include_ :** Tells browsers to include credentials in both same- and cross-origin requests, and always use any credentials sent back in responses.
      ```
      Note: Credentials may be included in simple and "final" cross-origin requests, but should not be included in CORS preflight requests.
      ```
    - **cache**
      - A string indicating how the request will interact with the browser’s HTTP cache.
      - The possible values, default, no-store, reload, no-cache, force-cache, and only-if-cached, are documented in the article for the cache property of the Request object.
    - **redirect**
      - How to handle a redirect response:
      - **_follow:_** Automatically follow redirects. Unless otherwise stated the redirect mode is set to follow
      - **_error :_** Abort with an error if a redirect occurs.
      - **_manual :_** Caller intends to process the response in another context.
    - **referrer**
      - A USVString specifying the referrer of the request. This can be a same-origin URL, about:client, or an empty string.
    - **referrerPolicy**
      - Specifies the referrer policy to use for the request. May be one of no-referrer, no-referrer-when-downgrade, same-origin, origin, strict-origin, origin-when-cross-origin, strict-origin-when-cross-origin, or unsafe-url.
    - **integrity**
      - Contains the subresource integrity value of the request (e.g., sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=).
    - **keepalive**
      - The keepalive option can be used to allow the request to outlive the page. Fetch with the keepalive flag is a replacement for the Navigator.sendBeacon() API.
    - **signal**
      - An AbortSignal object instance; allows you to communicate with a fetch request and abort it if desired via an AbortController.

#### **RETURN VALUE**

- A Promise that resolves to a Response object.

#### **EXCEPTIONS**

- **_AbortError_**
  - The request was aborted due to a call to the AbortController abort() method.
- **_TypeError_**
  - The specified URL string includes user credentials. This information should instead be provided using an Authorization header.

#### **EXAMPLES**

- we create a new Request object using the relevant constructor, then fetch it using a fetch() call.
- Since we are fetching an image, we run Response.blob() on the response to give it the proper MIME type so it will be handled properly, then create an Object URL of it and display it in an \<img> element.

```
const myImage = document.querySelector('img');

let myRequest = new Request('flowers.jpg');

fetch(myRequest)
.then(function(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.blob();
})
.then(function(response) {
  let objectURL = URL.createObjectURL(response);
  myImage.src = objectURL;
})
```

- In the Fetch with init then Request example (see Fetch Request init live), we do the same thing except that we pass in an init object when we invoke fetch():

```
const myImage = document.querySelector('img');

let myHeaders = new Headers();
myHeaders.append('Accept', 'image/jpeg');

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

let myRequest = new Request('flowers.jpg');

fetch(myRequest, myInit).then(function(response) {
  // ...
});
```

- You could also pass the init object in with the Request constructor to get the same effect:

```
let myRequest = new Request('flowers.jpg', myInit);
```

- You can also use an object literal as headers in init.

```
const myInit = {
  method: 'GET',
  headers: {
    'Accept': 'image/jpeg'
  },
  mode: 'cors',
  cache: 'default'
};

let myRequest = new Request('flowers.jpg', myInit);
```

> > **GET REQUEST**

```
fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            data.forEach(item => {
                console.log(item.title)
            })
        })
```

> > **POST REQUEST**

```
      fetch('https://jsonplaceholder.typicode.com/posts',{
          method: 'POST',
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({
              title: 'New title',
              body: 'new title body',
              userId: 2000
                  })
      })
      .then(res => res.json())
      .then(data => console.log(data))
```

> > **UPDATE(PUT)**

```
 fetch('https://jsonplaceholder.typicode.com/posts/1', {
          method: 'PUT',
          headers: {"Content-Type": "application/json; charset=UTF-8"},
          body: JSON.stringify({
              title: 'title 1',
              body: 'title 1 body',
              userId: '1001'
          })
      })
      .then(res => res.json())
      .then(data => console.log(data))
```

> > **UPDATE(PATCH)**

```
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
          method: 'PATCH',
          headers: {"Content-Type": "application/json; charset=UTF-8"},
          body: JSON.stringify({
              title: 'title 1'

          })
      })
      .then(res => res.json())
      .then(data => console.log(data))
```

> > **delete**

```
 fetch('https://jsonplaceholder.typicode.com/posts/1', {
          method: 'delete'
      })
```

> > **Supplying request options**

- The fetch() method can optionally accept a second parameter, an init object that allows you to control a number of different settings:

```
// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });

```

```
Note that mode: "no-cors" only allows a limited set of headers in the request:

Accept
Accept-Language
Content-Language
Content-Type with a value of application/x-www-form-urlencoded, multipart/form-data, or text/plain
```

> > **Uploading a file**

- Files can be uploaded using an HTML \<input type="file" /> input element, FormData() and fetch().

```
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
```

> > **Uploading multiple files**

- Files can be uploaded using an HTML \<input type="file" multiple /> input element, FormData() and fetch().

```
const formData = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');

formData.append('title', 'My Vegas Vacation');
for (let i = 0; i < photos.files.length; i++) {
  formData.append('photos', photos.files[i]);
}

fetch('https://example.com/posts', {
  method: 'POST',
  body: formData,
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
```

> > **Checking that the fetch was successful**

```
fetch('flowers.jpg')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob();
  })
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
```

> > **Supplying your own request object**

- Instead of passing a path to the resource you want to request into the fetch() call, you can create a request object using the Request() constructor, and pass that in as a fetch() method argument:

```
const myHeaders = new Headers();

const myRequest = new Request('flowers.jpg', {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
});

fetch(myRequest)
  .then(response => response.blob())
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  });
```

- Request() accepts exactly the same parameters as the fetch() method. You can even pass in an existing request object to create a copy of it:

```
const anotherRequest = new Request(myRequest, myInit);
```

- This is pretty useful, as request and response bodies are one use only. Making a copy like this allows you to make use of the request/response again while varying the init options if desired. The copy must be made before the body is read, and reading the body in the copy will also mark it as read in the original request.

`Note - There is also a clone() method that creates a copy. Both methods of creating a copy will fail if the body of the original request or response has already been read, but reading the body of a cloned response or request will not cause it to be marked as read in the original.`

## Headers

- The Headers interface allows you to create your own headers object via the Headers() constructor. A headers object is a simple multi-map of names to values:

```
const content = 'Hello World';
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
myHeaders.append('Content-Length', content.length.toString());
myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');
```

- The same can be achieved by passing an array of arrays or an object literal to the constructor:

```
const myHeaders = new Headers({
  'Content-Type': 'text/plain',
  'Content-Length': content.length.toString(),
  'X-Custom-Header': 'ProcessThisImmediately'
});
```

- The contents can be queried and retrieved:

```
console.log(myHeaders.has('Content-Type')); // true
console.log(myHeaders.has('Set-Cookie')); // false
myHeaders.set('Content-Type', 'text/html');
myHeaders.append('X-Custom-Header', 'AnotherValue');

console.log(myHeaders.get('Content-Length')); // 11
console.log(myHeaders.get('X-Custom-Header')); // ['ProcessThisImmediately', 'AnotherValue']

myHeaders.delete('X-Custom-Header');
console.log(myHeaders.get('X-Custom-Header')); // null
```

- Some of these operations are only useful in ServiceWorkers, but they provide a much nicer API for manipulating headers.
- All of the Headers methods throw a TypeError if a header name is used that is not a valid HTTP Header name. The mutation operations will throw a TypeError if there is an immutable guard (see below). Otherwise, they fail silently. For example

```
const myResponse = Response.error();
try {
  myResponse.headers.set('Origin', 'http://mybank.com');
} catch (e) {
  console.log('Cannot pretend to be a bank!');
}
```

- A good use case for headers is checking whether the content type is correct before you process it further. For example:

```
fetch(myRequest)
  .then(response => {
     const contentType = response.headers.get('content-type');
     if (!contentType || !contentType.includes('application/json')) {
       throw new TypeError("Oops, we haven't got JSON!");
     }
     return response.json();
  })
  .then(data => {
      /* process your data further */
  })
  .catch(error => console.error(error));
```

### Guard

- Since headers can be sent in requests and received in responses, and have various limitations about what information can and should be mutable, headers' objects have a guard property. This is not exposed to the Web, but it affects which mutation operations are allowed on the headers object.
- Possible guard values are:
  - none: default.
  - request: guard for a headers object obtained from a request (Request.headers).
  - request-no-cors: guard for a headers object obtained from a request created with Request.mode no-cors.
  - response: guard for a headers object obtained from a response (Response.headers).
  - immutable: guard that renders a headers object read-only; mostly used for ServiceWorkers.

`Note You may not append or set the Content-Length header on a guarded headers object for a response. Similarly, inserting Set-Cookie into a response header is not allowed: ServiceWorkers are not allowed to set cookies via synthesized responses.`

## Response objects

- As you have seen above, Response instances are returned when fetch() promises are resolved.
- The most common response properties you'll use are:
  - Response.status — An integer (default value 200) containing the response status code.
  - Response.statusText — A string (default value ""), which corresponds to the HTTP status code message. Note that HTTP/2 does not support status messages.
  - Response.ok — seen in use above, this is a shorthand for checking that status is in the range 200-299 inclusive. This returns a boolean value.
- They can also be created programmatically via JavaScript, but this is only really useful in ServiceWorkers, when you are providing a custom response to a received request using a respondWith() method:

```
const myBody = new Blob();

addEventListener('fetch', function(event) {
  // ServiceWorker intercepting a fetch
  event.respondWith(
    new Response(myBody, {
      headers: { 'Content-Type': 'text/plain' }
    })
  );
});


```

- The Response() constructor takes two optional arguments — a body for the response, and an init object (similar to the one that Request() accepts.)

## Body

- Both requests and responses may contain body data. A body is an instance of any of the following types:

  - ArrayBuffer
  - ArrayBufferView (Uint8Array and friends)
  - Blob/File
  - string
  - URLSearchParams
  - FormData

- The Request and Response interfaces share the following methods to extract a body. These all return a promise that is eventually resolved with the actual content.
  - Request.arrayBuffer() / Response.arrayBuffer()
  - Request.blob() / Response.blob()
  - Request.formData() / Response.formData()
  - Request.json() / Response.json()
  - Request.text() / Response.text()
- This makes usage of non-textual data much easier than it was with XHR.
- Request bodies can be set by passing body parameters:

```
const form = new FormData(document.getElementById('login-form'));
fetch('/login', {
  method: 'POST',
  body: form
});

```

- Both request and response (and by extension the fetch() function), will try to intelligently determine the content type. A request will also automatically set a Content-Type header if none is set in the dictionary.
