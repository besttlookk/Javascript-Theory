# Promise.reject() : static method

- The Promise.reject() method returns a Promise object that is rejected with a given reason.
- return A Promise that is rejected with the given reason.

#### **SYNTAX**

```
Promise.reject(reason);

reason
Reason why this Promise rejected.
```

- The static Promise.reject function returns a Promise that is rejected. For debugging purposes and selective error catching, it is useful to make reason an instanceof Error.

#### **EXAMPLE**

> > **Using the static Promise.reject() method**

```
Promise.reject(new Error('fail')).then(function() {
  // not called
}, function(error) {
  console.error(error); // Stacktrace
});
```

```
function resolved(result) {
  console.log('Resolved');
}

function rejected(result) {
  console.error(result);
}

Promise.reject(new Error('fail')).then(resolved, rejected);
// expected output: Error: fail
```
