import Signal from "../Signal";

describe("Signal", () => {
    it("will trigger an event with no data", done => {
        let signal = new Signal();
        signal.on(data => {
            expect(data).toBeNull();
            done();
        });
        signal.trigger();
    });
    it("will trigger an event with data", done => {
        let signal = new Signal();
        signal.on(data => {
            expect(data).toBe("test");
            done();
        });
        signal.trigger("test");
    });
    it("will only listen once", done => {
        let signal = new Signal();
        let count = 0;
        signal.once(() => {
            if (++count > 1) throw "was called twice";
            done();
        });
        signal.trigger();
        signal.trigger();
    });
    it("will listen for multiple", done => {
        let signal = new Signal();
        let count = 0;
        signal.on(() => {
            if (++count === 2) done();
        });
        signal.trigger();
        signal.trigger();
    });
    it("supports multiple listeners", done => {
        let signal = new Signal();
        let count = 0;
        signal.on(() => {
            if (++count === 2) done();
        });
        signal.on(() => {
            if (++count === 2) done();
        });
        expect(signal._callbacks.length).toEqual(2);
        signal.trigger();
    });
    it("will turn listener off", done => {
        let signal = new Signal();
        let count = 0;
        let listener = signal.on(() => {
            if (++count > 1) throw "was called twice";
            done();
        });
        expect(signal._callbacks.length).toEqual(1);
        signal.trigger();
        signal.off(listener);
        expect(signal._callbacks.length).toEqual(0);
        signal.trigger();
    });
});