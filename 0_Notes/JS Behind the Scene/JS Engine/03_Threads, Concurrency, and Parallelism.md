# Threads, Concurrency, and Parallelism

- Even though JavaScript is a single threaded language, there are worker threads that work in the background that don't block the main thread. Just like a browser creates a new thread when you open a new tab. The workers work through messages being sent, but don't have access to the full program.

  - Web Workers
  - Scaling NodeJS
  - Multi threading

```
var worker = new Worker("worker.js");
worker.postMessage("Helloooo");

addEventListener("message");
```
