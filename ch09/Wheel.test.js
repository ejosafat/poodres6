const assert = require('chai').assert;
import Wheel from './sources/Wheel.js';

describe('Wheel', () => {
    let wheel;

    beforeEach(() => {
        wheel = new Wheel(26, 1.5);
    });

    it('implements the diameterizable interface', () => {
        assert.isDefined(wheel.diameter);
    });

    it('calculates diameter', () => {
        assert.closeTo(29, wheel.diameter(), 0.01);
    });
});
