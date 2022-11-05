# keyboardEvents.js
# a minimal javascript library to handle keyboard events
## handle keyboard event

> syntax
```javascript
  keyboardEvents.on(key,callback);
```

> example
```javascript
  keyboardEvents.on('d',()=>{
    alert('d key is clicked !')
  });
````

## handle control key

> syntax
```javascript
  keyboardEvents.onControl(key,callback)

```

> example
```javascript
  keyboardEvents.onControl('d',()=>{
     alert('control + d is clicked !');
  });
```
