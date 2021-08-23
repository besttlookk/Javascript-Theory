# Concurrency model and the event loop

- JavaScript has a concurrency model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.

## Runtime concepts

- The following sections explain a theoretical model. Modern JavaScript engines implement and heavily optimize the described semantics.

### Visual representation

![visual](./img.svg)
