class Signal {
    constructor() {
        this._callbacks = [];
        this._onceCallbacks = [];
    }

    on(callback) {
        this._callbacks.push(callback);
        return callback;
    }

    once(callback) {
        this._onceCallbacks.push(callback);
    }

    off(callback) {
        let index = this._callbacks.indexOf(callback);
        if (index !== -1) {
            this._callbacks.splice(index, 1);
        }
    }

    trigger(data = null) {
        this._callbacks.forEach(callback => callback(data));
        this._onceCallbacks.forEach(callback => callback(data));
        this._onceCallbacks = [];
    }
}

class Property {
    constructor(value = null) {
        this._value = value;
        this._callbacks = [];
        this._onceCallbacks = [];
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this.set(value);
    }

    get() {
        return this._value;
    }

    set(value) {
        if (value !== this._value) {
            let oldValue = this._value;
            this._value = value;
            this._callbacks.forEach(callback => callback(value, oldValue));
            this._onceCallbacks.forEach(callback => callback(value, oldValue));
            this._onceCallbacks = [];
        }
    }

    on(callback) {
        this._callbacks.push(callback);
        return callback;
    }

    off(callback) {
        let index = this._callbacks.indexOf(callback);
        if (index !== -1) {
            this._callbacks.splice(index, 1);
        }
    }

    readyOn(callback) {
        if (null !== this._value) {
            callback(this._value);
        }
        this._callbacks.push(callback);
        return callback;
    }

    ready(callback) {
        if (null !== this._value) {
            callback(this._value);
        }
        else {
            this._onceCallbacks.push(callback);
        }
    }
}

export {Signal, Property}