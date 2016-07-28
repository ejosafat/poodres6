const assert = require('chai').assert;
import Wheel from './sources/Wheel02.js';
import diameterizableInterfaceTest from './test_includes/diameterizable.test';

describe('Wheel', () => {
    let wheel;

    beforeEach(() => {
        wheel = new Wheel(26, 1.5);
    });

    diameterizableInterfaceTest(new Wheel(26, 1.5));

    it('calculates diameter', () => {
        assert.closeTo(29, wheel.width(), 0.01);
    });
});
