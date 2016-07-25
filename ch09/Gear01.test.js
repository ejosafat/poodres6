const assert = require('chai').assert;
import Wheel from './sources/Wheel.js';
import Gear from './sources/Gear01.js';

describe('Gear', () => {
    it('calculates gear inches', () => {
        const gear = new Gear({
            chainring: 52,
            cog: 11,
            wheel: new Wheel(26, 1.5),
        });

        assert.closeTo(137.1, gear.gear_inches(), 0.01);
    });
});
