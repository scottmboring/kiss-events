# Kiss

Simple frustration free libraries.

## Kiss Events

Events as a first class citizen.

### Quick start

    npm install kiss-events --save

1. __Signal__ Event dispatching

```
    // Create Signal
    let message = new Signal();
    
    // Setup one or more listeners
    const listener = message.on(m => console.info(m));
    
    // Or just listen once, no need to remove listener
    message.once(m => console.info(m));
    
    // Trigger an event
    message.trigger("We have a problem");
    
    // Stop listener
    message.off(listener);
```
    
2. __Property__ Property change event dispatching

```
    // Create Property
    let name = new Property();
    
    // Setup one or more listeners
    const listener = name.on(name => console.log(name));
    
    // Or just listen once, no need to remove listener
    
    // Trigger a change
    name.value = "Scott B"
    
    // Stop listener
    name.off(listener);
```