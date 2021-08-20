# Object.setPrototypeOf()

- The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.

```
Warning: Changing the [[Prototype]] of an object is, by the nature of how modern JavaScript engines optimize property accesses, currently a very slow operation in every browser and JavaScript engine. In addition, the effects of altering inheritance are subtle and far-flung, and are not limited to the time spent in the Object.setPrototypeOf(...) statement, but may extend to any code that has access to any object whose [[Prototype]] has been altered.

Because this feature is a part of the language, it is still the burden on engine developers to implement that feature performantly (ideally). Until engine developers address this issue, if you are concerned about performance, you should avoid setting the [[Prototype]] of an object. Instead, create a new object with the desired [[Prototype]] using Object.create().
```
