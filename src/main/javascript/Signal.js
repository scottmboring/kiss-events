export default class Signal {
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