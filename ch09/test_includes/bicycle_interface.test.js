const assert = require('chai').assert;

export default function test_bicycle_interface(subject) {
    return describe('bicycle interface', () => {
        it('responds to default_tire_size', () => {
            assert.isFunction(subject.default_tire_size);
        });

        it('responds to default_chain', () => {
            assert.isFunction(subject.default_chain);
        });

        it('responds to chain', () => {
            assert.isDefined(subject.chain);
        });

        it('responds to size', () => {
            assert.isDefined(subject.size);
        });

        it('responds to tire_size', () => {
            assert.isDefined(subject.tire_size);
        });

        it('responds to spares', () => {
            assert.isFunction(subject.spares);
        });
    });
}
