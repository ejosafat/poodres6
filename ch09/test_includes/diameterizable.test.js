const assert = require('chai').assert;

export default function test_diameterizable_interface(subject) {
    return it('implements the diameterizable interface', () => {
        assert.isFunction(subject.width);
    });
}
