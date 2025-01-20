## Async / Await 

**async** and **await** make **promises** easier to write

### Definition:

### Async: 
_async makes a function return a promise_

### Await:
_await makes a function wait for a promise_

### Usage:


### Gotchas:

+ can't use await in the top level domain. e.g: highest level of script tags. 

References:
+ https://www.w3schools.com/Js/js_async.asp
+ https://stackoverflow.com/q/46515764

## To fix the error i had with async / await i used type="moduie" on the script tag

The error was:
```await is only valid in async functions, async generators and modules error in top level```

So of course the solution mentioned above worked. 
Further reading on modules: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

## Determine validity of image

I referenced some code from the following JS fiddle:
+ https://jsfiddle.net/jfriend00/vhtzghkd/

## Must read:
+ https://stackoverflow.com/a/40106523