# Promise.prototype.finally()

- The finally() method returns a Promise. When the promise is settled, i.e either fulfilled or rejected, the specified callback function is executed. This provides a way for code to be run whether the promise was fulfilled successfully or rejected once the Promise has been dealt with.

- This helps to avoid duplicating code in both the promise's then() and catch() handlers.

#### **SYNTAX**

```
p.finally(onFinally);

p.finally(function() {
   // settled (fulfilled or rejected)
});
```

- Returns a Promise whose finally handler is set to the specified function, onFinally.
- The finally() method can be useful if you want to do some processing or cleanup once the promise is settled, regardless of its outcome.
- The finally() method is very similar to calling .then(onFinally, onFinally) however there are a couple of differences:
  - When creating a function inline, you can pass it once, instead of being forced to either declare it twice, or create a variable for it
  - A finally callback will not receive any argument, since there's no reliable means of determining if the promise was fulfilled or rejected. This use case is for precisely when you do not care about the rejection reason, or the fulfillment value, and so there's no need to provide it. So for example:
    - Unlike Promise.resolve(2).then(() => {}, () => {}) (which will be resolved with undefined), Promise.resolve(2).finally(() => {}) will be resolved with 2.
    - Similarly, unlike Promise.reject(3).then(() => {}, () => {}) (which will be fulfilled with undefined), Promise.reject(3).finally(() => {}) will be rejected with 3.

`Note: A throw (or returning a rejected promise) in the finally callback will reject the new promise with the rejection reason specified when calling throw.`

#### **EXAMPLES**

```
let isLoading = true;

fetch(myRequest).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function(json) { /* process your JSON further */ })
  .catch(function(error) { console.error(error); /* this line can also throw, e.g. when console = {} */ })
  .finally(function() { isLoading = false; });
```
