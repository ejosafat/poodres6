const assert = require('chai').assert;

export default function test_preparer_interface(subject) {
    return it('implements the preparer interface', () => {
        assert.isFunction(subject.prepare_trip);
    });
}
