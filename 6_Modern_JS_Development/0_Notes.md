# Modern JS Development

- Back in the day we used to write all our code in one big script or multiple scripts.
- But today we divide our projects into multiple modules and these modules can share data between them and make our code more organise and maintainable.
- One great thing about module is that we can also include "3rd party" packages in our code.
- NPM(Node Package MAnager) is a reposotory which containsopen-source package.
- NPM was originally developed to work together with nodejs and for nodejs however NPM has establise itself as goto library for all knid of packages in modern js developement.
- NPM now contains repository , software and developemnt tools
  -Development tools help build our application(live-server, Parcel, Babel)
- In order to download, use and share packages we use NPM software install in our computer and this is just command-line-interface(CLI)
- All different modules and 3rd party packages in developemnt mode should be bundled up for "production mode". And that is the final file we deploy in the webserver

```
DEVELOPEMNT --> BUNDLING --> TRANSPILING/POLYFILLING --> JS BUNDLE
```

- Usually build process involves multiple steps(here added only two: Bundling and Traspiling)

```
 BUNDLING => JOINS ALL  MODULES INTO A BIG FILE
```

- BUNDLING:

  - Complex process
  - can eliminate unused code and compress the code as well.
  - This step is super important for two big reason:
    - Older browser does not support modules at all. so code in modules wont be executed by the older browser.
    - It is also better for performance to send less files to the browser
    - It compress the code

- TRANSPILING/POLYFILING:
  - Convert all modern js back to ES5 syntax. So that older browser can understand the code without breaking.
  - This is usually done by the tool called babel

## Module:

- It is a reusable piece of code that encapsulates implementation
  details.
- Usually a stand alone file. But it doesn't have to be.
- It can also have import and export statement.
- Whatever we export from module is called PUBLIC API.
- Just like export we can also import values inside module. And those modules from which we import is called DEPENDENCY.
- BENIFITES OF USING MODULES
  - **Compose software:** Modules are small building blocks that we put together to build complex applications.
  - **Isolate components** :Modules can be developed in isolation without
  - thinking about entire codebase.
  - Abstract code: Implement low level code in modules and import these abstractions into another module
  - **Organized Code**:module normally leads to more organized code.
  - **Reuse code:**

## Modern ES6 Module Vs Script:

| Property            | ES6                                                    | Script       |
| ------------------- | ------------------------------------------------------ | ------------ | ----------- |
| Top-level varibales | Scoped to modules                                      | Global       |
| Default Mode        | Strict Mode                                            | Sloppy mode  |
| Top level- this     | undefined                                              | window       |
| export- import      | Yes(need to happen at top-level)-(Imports are hoisted) | No           |
| HTML linking        | \<script type="module">                                | \<script>    |
| \*\*\*\*            | File downloading                                       | Asynchronous | Synchronous |
