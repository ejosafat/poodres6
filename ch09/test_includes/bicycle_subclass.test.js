const assert = require('chai').assert;

export default function test_bicycle_subclass(subject) {
    return describe('bicycle subclass', () => {
        it('responds to post_initialize', () => {
            assert.isFunction(subject.post_initialize);
        });

        it('responds to local_spares', () => {
            assert.isFunction(subject.local_spares);
        });

        it('responds to default_tire_size', () => {
            assert.isFunction(subject.default_tire_size);
        });
    });
}
