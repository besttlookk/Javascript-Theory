# MODULES IN JAVASCRIPT

- Modules are pieces of code, grouped together, that can be combined together to create an expandable program that can get bigger as it needs to. Good modules are self contained and grouped together with their own specific functionality allowing them to be moved or deleted without breaking the program.

## Module Patterns

- Originally in JavaScript, we had the module pattern. Before block scope came around, there was only global scope and function scope.
- To create this idea of modules, a module scope was implemented just above the function scope.
- This allowed variables to be shared, by exporting and importing, between the functions without having to go through the global scope.
- A function as a module is essentially just an immediately invoked function expression, IIFE.

```
var globalScopeVar = "I can be accessed anywhere";

var moduleName = (function(globalScopeVar) {
  // add private variables here
  var privateVar = "I cannot be accessed outside";
  // create the function
  function say(msg1, msg2) {
    var say1 = Math.floor(Math.random() * msg1.length);
    var say2 = Math.floor(Math.random() * msg2.length);
    return say1 > say2 ? say1 : say2;
  }
  globalScopeVar = `I don't change the outside scope`;
  // return only what you want the outside to access
  return {
    say: say
  };
})(globalScopeVar);
```

## Issues with Modules

- Even though modules help us to contain and organize code, there are still problems that can arise. There can be naming conflicts if you don't use const to declare the module. Also, there are dependency issues if scripts are placed in the wrong order, such as jQuery needing to be called before it can be used. Because of these problems, people started developing libraries to solve them. Before ES6 we had 2 ways to implement modules in JavaScript CommonJS and AMD.
  - CommonJS - uses the keywords require and exports to interact with the module system. Require is a function used to import from another module and exports is an object where functions get exported from. These are run synchronously where we wait on one module to load before another can start and this is not ideal for browsers. However, this code may look familiar because NodeJS still uses this library. There are other packages such as Browserify and webpack that aid in bundling scripts with CommonJS to be used in the browsers.
  - Asynchronous Module Definition (AMD) - as in the name, AMD loads modules asynchronously. This was great for browsers early on before packages that bundled code.
    define(['module1', 'module2'], function(module1, module2) {console.log(module1.setName());});
    The define function takes an array of dependency modules that are loaded in a non-blocking manner in the background. Once completed, the callback function is then executed. Packages came out like RequireJS thatimplemented the AMD endpoint and was the main way people used AMD modules.

## ES6 Modules

- After ES6 came out, pretty much everything above was thrown out the window with 2 new keywords. We can now use the import and export keywords in our files to implement modules. This again may look familiar from popular frameworks like React.

```
import module1 from "module1";
import module2 from "module2";

export function name() {}
```

- Here is our module code from above in the new ES6 syntax.

```
const privateVar = "I cannot be accessed outside this file";

export function name(msg1, msg2) {
  const say1 = Math.floor(Math.random() * msg1.length);
  const say2 = Math.floor(Math.random() * msg2.length);
  return say1 > say2 ? say1 : say2;
}
```

- There are 2 types of exports, named and default. A named export is imported using curly braces ({ importFnName }) and a default function is added in created like this:

```
import { importFnName } from "./script.js";
// with a default function the {} are not needed
import name from "./script.js";
// both default and named function import
import name, { importFnName } from "./script.js";

export default function name(msg1, msg2) {
  const say1 = Math.floor(Math.random() * msg1.length);
  const say2 = Math.floor(Math.random() * msg2.length);
  return say1 > say2 ? say1 : say2;
}
```

- Trying to run this in the browser there is still 2 more things that have to be done. You have to declare the type in the html script tag as module and the file has to be served from a server. You can spin up your own server with a package like live-server on npm.

```
<script type="module" src="'./script.js'></script>
```
