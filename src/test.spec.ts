class ValueObject<T> {
    constructor(private _value: T) {
    }

    get value(): T {
        return this._value;
    }
}

describe('ValueObject', () => {
    it('should wrap a string value', () => {
        const sut = new ValueObject<string>('lorem ipsum');
        expect(sut.value).toEqual('lorem ipsum');
    });
});
