# Callback function

- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

```
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```

- The above example is a synchronous callback, as it is executed immediately.
- Note, however, that callbacks are often used to continue code execution after an asynchronous operation has completed — these are called **asynchronous callbacks.**
- A good example is the callback functions executed inside a .then() block chained onto the end of a promise after that promise fulfills or rejects.

#### **EXAMPLES**

```
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post two', body: 'This is post two' }

];
```

> > **WITHOUT CALLBACK**

```
function getPosts() {
    setTimeout(() => {
        posts.forEach((post) => {
            console.log(post.title, post.body)
        });

    }, 1000);
}

// create another function
 function createPost(post) {
   setTimeout(() => {
        posts.push(post);
    }, 2000);
}
 //call above function

createPost({ title: 'Post three', body: 'This is post three' });
getPosts();
```

###### **OUTPUT**

```
Post One This is post one
Post two This is post two
```

```
It is not what we wanted. We wanted to first create a post and then only get all the posts.

But since create post take more time than getPost()..we get get post first.
```

> > **WITH CALLBACK**

```
function getPosts() {
    setTimeout(() => {
        posts.forEach((post, index) => {
            console.log(post.title, post.body)
        });
    }, 1000);
}

function createPost(post,callback) {
   setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'Post three', body: 'This is post three' } ,getPosts);
```

###### **OUTPUT**

```
Post One This is post one
Post two This is post two
Post three This is post three
```
