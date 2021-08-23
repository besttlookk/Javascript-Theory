# JavaScript

## What is JavaScript

- JavaScript is a programming language initially designed to interact with elements of web pages.
- In web browsers, JavaScript consists of three main parts:

  - **ECMAScript** provides the core functionality.
  - The **Document Object Model (DOM)** provides interfaces for interacting with elements on web pages
  - The **Browser Object Model (BOM)** provides the browser API for interacting with the web browser.

- JavaScript (JS) is a **high-level**,lightweight, **interpreted, or just-in-time compiled programming language** with **first-class functions**.
- While it is most well-known as the **scripting language for Web pages**, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.
- JavaScript is a **prototype-based**, **multi-paradigm,** **single-threaded**, **dynamic language,** supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

## First-class function

- A programming language is said to **have First-class functions** when functions in that language are treated like any other variable(first class citizen).
- For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

- It alows us to do functional programming.
- Not all leanguage has first-class function

## Scripting Language

- A scripting language is a programming language that is interpreted. It is translated into machine code when the code is run, rather than beforehand.
- Scripting language (also known as scripting, or script) is a series of commands that are able to be executed without the need for compiling.
- While all scripting languages are programming languages, not all programming languages are scripting languages.
- Scripting languages use a program known as an **interpreter to translate commands and are directly interpreted from source code, not requiring a compilation step.**
- There are two types of scripting languages: **server side and client side.**
- JavaScript, Python, and Ruby are all examples of scripting languages.

## Server-side versus client-side code

- Client-side code is code that is run on the user's computer — when a web page is viewed, the page's client-side code is downloaded, then run and displayed by the browser.

- Server-side code on the other hand is run on the server, then its results are downloaded and displayed in the browser.
- Examples of popular server-side web languages include PHP, Python, Ruby, ASP.NET and... JavaScript!
- JavaScript can also be used as a server-side language, for example in the popular Node.js environment
- The **benefit of client-side** scripts is that they can **reduce demand on the server**, allowing web pages to load faster.
- Whereas, one significant benefit of server-side scripts is **they are not viewable by the public** like client-side scripts are.

## Multi-paradigm

- PARADIGM: An approch and minset of structuring code, which will direct your coding style.

- Three popular paradigms are:

  1. Procedural programing(organinzing a code in a liner way)
  2. Object oriented programming(OOP)
  3. Functional programming(FP)

- Paradigm can also be classifed as "**Imperative**" and "**Declarative"**
- JS follow all. Therefore Multi-paradigm. We can choice any one

## Dynamic versus static code

- The word dynamic is used to describe both client-side JavaScript, and server-side languages — it refers to the ability to update the display of a web page/app to show different things in different circumstances, generating new content as required.
- **Server-side code dynamically generates new content on the server, e.g. pulling data from a database.**
- Whereas client-side JavaScript dynamically generates **new content inside the browser on the client,** e.g. creating a new HTML table, filling it with data requested from the server, then displaying the table in a web page shown to the user.
- The meaning is slightly different in the two contexts, but related, and both approaches (server-side and client-side) usually work together.

- A web page with no dynamically updating content is referred to as static — it just shows the same content all the time.

## HIGH LEVEL LANGUAGE Vs LOW LEVEL LANGUAGE

- The main difference between high level language and low level language is that,
  - Programmers can easily understand or interpret or compile the high level language in comparison of machine.
  - On the other hand, Machine can easily understand the low level language in comparison of human beings.

| S.NO | High Level Language                               | Low Level Language                           |
| ---- | ------------------------------------------------- | -------------------------------------------- |
| 1.   | It is programmer friendly language.               | It is a machine friendly language.           |
| 2.   | High level language is less memory efficient.     | Low level language is high memory efficient. |
| 3.   | It is easy to understand.                         | It is tough to understand.                   |
| 4.   | It is simple to debug.                            | It is complex to debug comparatively.        |
| 5.   | It is simple to maintain.                         | It is complex to maintain comparatively.     |
| 6.   | It is portable.                                   | It is non-portable.                          |
| 7.   | It can run on any platform.                       | It is machine-dependent.                     |
| 8.   | It needs compiler or interpreter for translation. | It needs assembler for translation.          |
| 9.   | It is used widely for programming.                | It is not commonly used now-a-d              |

## Programming languages

- A computer program is a collection of instructions that can be executed by a computer to perform a specific task.
- A computer program is usually written by a computer programmer in a programming language. From the program in its human-readable form of source code, a compiler or assembler can derive machine code—a form consisting of instructions that the computer can directly execute. Alternatively, a computer program may be executed with the aid of an interpreter.
- Computer programs can be categorized by the **programming language paradigm** used to produce them. Two of the main paradigms are **imperative and declarative.**

## What is JavaScript doing on your page?

- When you load a web page in your browser, you are running your code (the HTML, CSS, and JavaScript) inside an **execution environment** **(the browser tab).** This is like a factory that takes in **raw materials (the code)** and **outputs a product (the web page).**

- A very common use of JavaScript is to dynamically modify HTML and CSS to update a user interface, **via the Document Object Model API (as mentioned above).**
- Note that the code in your web documents is generally loaded and executed in the order it appears on the page. Errors may occur if JavaScript is loaded and run before the HTML and CSS that it is intended to modify.

## Browser security

- Each browser tab has its **own separate bucket** for running code in (these buckets are called "**execution environments**" in technical terms) — this means that in **most cases** the code in each tab is run completely separately, and the code in one tab cannot directly affect the code in another tab — or on another website.
- This is a good security measure — if this were not the case, then pirates could start writing code to steal information from other websites, and other such bad things.

`Note: There are ways to send code and data between different websites/tabs in a safe manner.`

---

## JavaScript running order

- When the browser encounters a block of JavaScript, it generally runs it in order, from top to bottom. This means that you need to be careful what order you put things in.

#### **async and defer**

- There are actually two modern features we can use to bypass the problem of the blocking script — **async and defer**

- **Scripts loaded using the async attribute** will download the script without blocking the page while the script is being fetched. However, once the download is complete, the script will execute, which blocks the page from rendering. **You get no guarantee that scripts will run in any specific order.** It is best to use async when the scripts in the page run independently from each other and depend on no other script on the page.
- **Scripts loaded with the defer attribute** will load in the order they appear on the page. They won't run until the page content has all loaded, which is useful if your scripts depend on the DOM being in place (e.g. they modify one or more elements on the page).
  ![async](./async-defer.jpg)

- **async** should be used when you have a bunch of background scripts to load in, and you just want to get them in place as soon as possible. For example, maybe you have some game data files to load, which will be needed when the game actually begins, but for now you just want to get on with showing the game intro, titles, and lobby, without them being blocked by script loading.

- **To summarize:**
  - async and defer both instruct the browser to download the script(s) in a separate thread, while the rest of the page (the DOM, etc.) is downloading, so the page loading is not blocked during the fetch process.
  - scripts with an async attribute will execute as soon the download is done. This blocks the page and does not guarantee any specific execution order.
  - scripts with a defer attribute will load in the order they are in and will only execute once everything has finished loading.
  - If your scripts should be run immediately and they don't have any dependencies, then use async.
  - If your scripts need to wait for parsing and depend on other scripts and/or the DOM being in place, load them using defer and put their corresponding <script> elements in the order you want the browser to execute them.

## Interpreted versus compiled code

- In interpreted languages, the code is run from top to bottom and the result of running the code is immediately returned.
- You don't have to transform the code into a different form before the browser runs it. The code is received in its programmer-friendly text form and processed directly from that.

- **Compiled languages** on the other hand are transformed (compiled) into another form before they are run by the computer. For example, C/C++ are compiled into machine code that is then run by the computer. The program is executed from a binary format, which was generated from the original program source code.

- From a technical standpoint, most **modern JavaScript interpreters actually use a technique called just-in-time compiling to improve performance;** the JavaScript source code gets compiled into a faster, binary format while the script is being used, so that it can be run as quickly as possible.
- However, JavaScript is still considered an interpreted language, since the **compilation is handled at run time, rather than ahead of time.**

| Compiler                                                                                                                                                                    | Interpreter                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| A compiler is a program that converts the entire source code of a programming language into executable machine code for a CPU.                                              | An interpreter takes a source program and runs it line by line,translating each line as it comes to it                       |
| The compiler takes a large amount of time to analyze the entire source code but the overall execution time of the program is comparatively faster.                          | An interpreter takes less amount of time to analyze the source code but the overall execution time of the program is slower. |
| The compiler generates the **error message** only after scanning the whole program, so debugging is comparatively hard as the error can be present anywhere in the program. | Its Debugging is easier as it continues translating the program until the error is met.                                      |
| The compiler requires a lot of memory for generating object codes.                                                                                                          | It requires less memory than a compiler because no object code is generated.                                                 |
| Generates intermediate object code.                                                                                                                                         | No intermediate object code is generated.                                                                                    |
| For Security purpose compiler is more useful.                                                                                                                               | The interpreter is a little vulnerable in case of security.                                                                  |
| Examples: C, C++, Java                                                                                                                                                      | Examples: Python, Perl, JavaScript, Ru                                                                                       |

## Script loading strategies

- There are a number of issues involved with getting scripts to load at the right time.
- Nothing is as simple as it seems! A common problem is that all the HTML on a page is loaded in the order in which it appears. If you are using JavaScript to manipulate elements on the page (or more accurately, the Document Object Model), your code won't work if the JavaScript is loaded and parsed before the HTML you are trying to do something to.
- In the internal JS Script, you can see this structure around the code:

```
document.addEventListener("DOMContentLoaded", function() {
  ...
});
```

- This is an event listener, which listens for the browser's "DOMContentLoaded" event, which signifies that the HTML body is completely loaded and parsed. The JavaScript inside this block will not run until after that event is fired, therefore the error is avoided

- In the external example, We use a **more modern JavaScript feature** to solve the problem, the **defer attribute,** which tells the browser to continue downloading the HTML content once the \<script> tag element has been reached.

```
<script src="script.js" defer></script>
```

- In this case both the script and the HTML will load simultaneously and the code will work.

```
Note: In the external case, we did not need to use the DOMContentLoaded event because the defer attribute solved the problem for us. We didn't use the defer solution for the internal JavaScript example because defer only works for external scripts.
```

- An old-fashioned solution to this problem used to be to put your script element right at the bottom of the body (e.g. just before the \</body> tag), so that it would load after all the HTML has been parsed.
- The problem with this solution is that loading/parsing of the script is completely blocked until the HTML DOM has been loaded. On larger sites with lots of JavaScript, this can cause a major performance issue, slowing down your site.

## Garbage Collected

- Its an algorithm inside js engine which automatically remove old unused object from the computer memory,
- in order not to clog it up with unnecessary stuff.

## Dynamically typed(and not stromgly typied language)

- No data type defination. Types become know at runtime
- Data type of variable can be changed

## single-threaded , non-bloking event loop

- Concurrency model: how the JS engine handles multiple tasks happening at the same time

- WHY DO WE NEED "CONCURRENCY MODEL"?
  bcz js runs in one "single thread", so it can only do one thing at a time.

- SO WHAT ABOUT LONG_RUNNING TIME(like fetching data from the server).It sounds like it would block the single thread.
  However we want non-blocking behaviour. HOW DO WE ACHIEVE THAT??
  -By using an "event loop": takes long running tasks, executes them in the background, and put them back in the main thread
  once they are finised

## JS engine and JS runtime

- JS engine is a program that executes js code.
- Every browser has its own JS engine. Probably the most popular one is: googles V8 engine

- any JS engine consist of : CALL STACK and HEAP
- CALL STACK:where our code executes using "executes conext"
- HEAP: Is a unstructered memory pool that **stores all the object** that our application needs

## Scope / scope chain / lexical enviorment

- **What is Scope?**

  - Scope in JavaScript refers to the accessibility or visibility of variables.
  - That is, which parts of a program have access to the variable or where the variable is visible.

- **Why is Scope Important?**

  - The main benefit of scope is **security**. That is, the variables can be accessed from only a certain area of the program. Using scope, we can avoid unintended modifications to the variables from other parts of the program.
  - The scope also **reduces the namespace collisions**. That is, we can use the same variable names in different scopes.

- Types of Scope

  - There are three types of scope in JavaScript —
    1. Global Scope,
    2. Function Scope, and,
    3. Block Scope.

- Scope Chain
  - When a variable is used in JavaScript, the JavaScript engine will try to find the variable’s value in the current scope. If it could not find the variable, it will look into the outer scope and will continue to do so until it finds the variable or reaches global scope.
  - If it’s still could not find the variable, **it will either implicitly declare the variable in the global scope (if not in strict mode) or return an error.**
