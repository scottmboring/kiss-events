import Property from "../Property";

describe("Property", () => {
    it("will trigger when ready", done => {
        let property = new Property();
        property.ready(value => {
            expect(value).toEqual("test");
            done();
        });
        property.value = "test";
    });
    it("will trigger when already ready", done => {
        let property = new Property();
        property.value = "test";
        property.ready(value => {
            expect(value).toEqual("test");
            done();
        });
    });
    it("will trigger when ready only once", done => {
        let property = new Property();
        property.ready(value => {
            expect(value).toEqual("test");
            done();
        });
        property.value = "test";
        property.value = "fail";
    });
    it("will trigger when ready and when changes", done => {
        let property = new Property();
        let one = false;
        let two = false;
        property.value = "test1";
        property.readyOn(value => {
            if(value === "test1") one = true;
            if(value === "test2") two = true;
            if(one && two) done();
        });
        property.value = "test2";
    });
    it("will trigger multiple times for on", done => {
        let property = new Property();
        let one = false;
        let two = false;
        property.on(value => {
            if(value === "test1") one = true;
            if(value === "test2") two = true;
            if(one && two) done();
        });
        property.value = "test1";
        property.value = "test2";
    });
    it("will not trigger multiple times with no change", done => {
        let property = new Property();
        let count = 0;
        property.on(() => {
            if(count === 2) throw "triggered twice";
            done();
        });
        property.value = "test";
        property.value = "test";
    });
    it("will turn listener off", done => {
        let property = new Property();
        let count = 0;
        let listener = property.on(() => {
            if (++count > 1) throw "was called twice";
            done();
        });
        expect(property._callbacks.length).toEqual(1);
        property.value = "test1";
        property.off(listener);
        expect(property._callbacks.length).toEqual(0);
        property.value = "test2";
    });
    it("will get value", () => {
        let property = new Property();
        property.value = "test1";
        expect(property.value).toEqual("test1");
        property.set("test2");
        expect(property.get()).toEqual("test2");
    });
});