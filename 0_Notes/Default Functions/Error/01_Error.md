# Error

- Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.

## Description

- Runtime errors result in new Error objects being created and thrown.

## Error types

- Besides the generic Error constructor, there are other core error constructors in JavaScript. For client-side exceptions, see Exception handling statements.

**EvalError**

- Creates an instance representing an error that occurs regarding the global function eval().

**RangeError**

- Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.

**ReferenceError**

- Creates an instance representing an error that occurs when de-referencing an invalid reference.

**SyntaxError**

- Creates an instance representing a syntax error.

**TypeError**

- Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.

**URIError**

- Creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.

**AggregateError**

- Creates an instance representing several errors wrapped in a single error when multiple errors need to be reported by an operation, for example by Promise.any().

## Constructor

**Error()**

- Creates a new Error object.

## Instance properties

**Error.prototype.message**

- Error message.

**Error.prototype.name**

- Error name.

## Instance methods

**Error.prototype.toString()**

- Returns a string representing the specified object. Overrides the
- Object.prototype.toString() method.

#### **EXAMPLES**

> > **Throwing a generic error**

- Usually you create an Error object with the intention of raising it using the throw keyword. You can handle the error using the try...catch construct:

```
try {
  throw new Error('Whoops!')
} catch (e) {
  console.error(e.name + ': ' + e.message)
}
```

> > **Handling a specific error type**

- You can choose to handle only specific error types by testing the error type with the error's constructor property or, if you're writing for modern JavaScript engines, instanceof keyword:

```
try {
  foo.bar()
} catch (e) {
  if (e instanceof EvalError) {
    console.error(e.name + ': ' + e.message)
  } else if (e instanceof RangeError) {
    console.error(e.name + ': ' + e.message)
  }
  // ... etc

  else {
    // If none of our cases matched leave the Error unhandled
    throw e;
  }
}
```

> > **Differentiate between similar errors**

- Sometimes a block of code can fail for reasons that require different handling, but which throw very similar errors (i.e. with the same type and message).

- If you don't have control over the original errors that are thrown, one option is to catch them and throw new Error objects that have more specific messages. The original error should be passed to the new Error in the constructor option parameter (cause property), as this ensures that the original error and stack trace are available to higher level try/catch blocks.

- The example below shows this for two methods that would otherwise fail with similar errors (doFailSomeWay() and doFailAnotherWay()):

```
function doWork() {
  try {
    doFailSomeWay();
  } catch (err) {
    throw new Error('Failed in some way', { cause: err });
  }
  try {
    doFailAnotherWay();
  } catch (err) {
    throw new Error('Failed in another way', { cause: err });
  }
}

try {
  doWork();
} catch (err) {
  switch(err.message) {
    case 'Failed in some way':
      handleFailSomeWay(err.cause);
      break;
    case 'Failed in another way':
      handleFailAnotherWay(err.cause);
      break;
  }
}
```

- You can also use the cause property in custom error types, provided the subclasses' constructor passes the options parameter when calling super():

```
class MyError extends Error {
  constructor(/* some arguments */) {
    // Needs to pass both `message` and `options` to install the "cause" property.
    super(message, options);
  }
}
```

> > **Custom Error Types**

- You might want to define your own error types deriving from Error to be able to throw new MyError() and use instanceof MyError to check the kind of error in the exception handler. This results in cleaner and more consistent error handling code.
