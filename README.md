# Kiss Events

A simple events library.

## Quick start

    npm install kiss-events --save

1. __Signal__ Object orientated event dispatching

```
    // Create Signal
    let error = new Signal();
    
    // Setup one or more listeners
    error.on(message => console.error(message));
    
    // Trigger an error message
    error.trigger("We have a problem");
```
    
2. __Property__ Object oriented property changes

```
    // Create Property
    let name = new Property();
    
    // Setup one or more listeners
    name.on(name => console.log(name));
    
    // Trigger an error message
    name.value = "Scott B"
```