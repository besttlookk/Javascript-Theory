# Object.getPrototypeOf()

- The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.
- If there are no inherited properties, null is returned.

#### **SYNTAX**

```
Object.getPrototypeOf(obj)
```

#### **EXAMPLES**

> > **Using getPrototypeOf**

```
var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

> > **Non-object coercion**

- In ES5, it will throw a TypeError exception if the obj parameter isn't an object. In ES2015, the parameter will be coerced to an Object.

```
Object.getPrototypeOf('foo');
// TypeError: "foo" is not an object (ES5 code)
Object.getPrototypeOf('foo');
// String.prototype                  (ES2015 code)
```
