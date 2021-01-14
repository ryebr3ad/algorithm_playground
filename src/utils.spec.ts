import { xor } from "./utils";

describe('Utils functions', () => {

    it('should do a proper exclusive or on boolean values', () => {
        expect(xor(true, false)).toBeTrue();
        expect(xor(false, false)).toBeFalse();
        expect(xor(true, true)).toBeFalse();
    });

    it('should do a proper exclusive or on numeric values', () => {
        expect(xor(1, 0)).toBeTrue();
        expect(xor(0, 0)).toBeFalse();
        expect(xor(1, 1)).toBeFalse();
    });

    it('should do a proper exclusive or on objects and their notion of true and false', () => {
        let dummy = {};
        expect(xor(dummy, undefined)).toBeTrue();
        expect(xor(undefined, undefined)).toBeFalse();
        expect(xor(dummy, dummy)).toBeFalse();
    });

});
