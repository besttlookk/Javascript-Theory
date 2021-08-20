# Promise.prototype.catch()

- The catch() method returns a Promise and deals with rejected cases only. It behaves the same as calling Promise.prototype.then(undefined, onRejected) (in fact, calling obj.catch(onRejected) internally calls obj.then(undefined, onRejected)). This means that you have to provide an onRejected function even if you want to fall back to an undefined result value - for example obj.catch(() => {}).

#### **SYNTAX**

```
p.catch(onRejected);

p.catch(function(reason) {
   // rejection
});
```

#### **PARAMETERS**

- onRejected

  - A Function called when the Promise is rejected. This function has one argument:

  - **_reason_**

    - The rejection reason.

  - The Promise returned by catch() is rejected if onRejected throws an error or returns a Promise which is itself rejected; otherwise, it is resolved.

#### **RETURN VALUE**

- Internally calls Promise.prototype.then on the object upon which it was called, passing the parameters undefined and the received onRejected handler. Returns the value of that call, which is a Promise.

`Warning: The examples below are throwing instances of Error. This is considered good practice in contrast to throwing Strings; otherwise, the part doing the catching would have to perform checks to see if the argument was a string or an error, and you might lose valuable information like stack traces.`

> > **Demonstration of the internal call:**

```
// overriding original Promise.prototype.then/catch just to add some logs
(function(Promise){
    var originalThen = Promise.prototype.then;
    var originalCatch = Promise.prototype.catch;

    Promise.prototype.then = function(){
        console.log('> > > > > > called .then on %o with arguments: %o', this, arguments);
        return originalThen.apply(this, arguments);
    };
    Promise.prototype.catch = function(){
        console.error('> > > > > > called .catch on %o with arguments: %o', this, arguments);
        return originalCatch.apply(this, arguments);
    };

})(this.Promise);

// calling catch on an already resolved promise
Promise.resolve().catch(function XXX(){});

// logs:
// > > > > > > called .catch on Promise{} with arguments: Arguments{1} [0: function XXX()]
// > > > > > > called .then on Promise{} with arguments: Arguments{2} [0: undefined, 1: function XXX()]
```

- The catch method is used for error handling in promise composition. Since it returns a Promise, it can be chained in the same way as its sister method, then().

#### **EXAMPLES**

> > **Using and chaining the catch method**

```
var p1 = new Promise(function(resolve, reject) {
  resolve('Success');
});

p1.then(function(value) {
  console.log(value); // "Success!"
  throw new Error('oh, no!');
}).catch(function(e) {
  console.error(e.message); // "oh, no!"
}).then(function(){
  console.log('after a catch the chain is restored');
}, function () {
  console.log('Not fired due to the catch');
});

// The following behaves the same as above
p1.then(function(value) {
  console.log(value); // "Success!"
  return Promise.reject('oh, no!');
}).catch(function(e) {
  console.error(e); // "oh, no!"
}).then(function(){
  console.log('after a catch the chain is restored');
}, function () {
  console.log('Not fired due to the catch');
});
```

> > **Gotchas when throwing errors**

```
// Throwing an error will call the catch method most of the time
var p1 = new Promise(function(resolve, reject) {
  throw new Error('Uh-oh!');
});

p1.catch(function(e) {
  console.error(e); // "Uh-oh!"
});

// Errors thrown inside asynchronous functions will act like uncaught errors
var p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    throw new Error('Uncaught Exception!');
  }, 1000);
});

p2.catch(function(e) {
  console.error(e); // This is never called
});

// Errors thrown after resolve is called will be silenced
var p3 = new Promise(function(resolve, reject) {
  resolve();
  throw new Error('Silenced Exception!');
});

p3.catch(function(e) {
   console.error(e); // This is never called
});
```

> > **If it is resolved**

```
//Create a promise which would not call onReject
var p1 = Promise.resolve("calling next");

var p2 = p1.catch(function (reason) {
    //This is never called
    console.error("catch p1!");
    console.error(reason);
});

p2.then(function (value) {
    console.log("next promise's onFulfilled"); /* next promise's onFulfilled */
    console.log(value); /* calling next */
}, function (reason) {
    console.log("next promise's onRejected");
    console.log(reason);
});
```
