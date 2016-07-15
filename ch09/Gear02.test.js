const assert = require('chai').assert;
import Gear from './sources/Gear.js';

class DiameterDouble {
    diameter() {
        return 10;
    }
}

describe('Gear', () => {
    it('calculates gear inches', () => {
        const gear = new Gear({
            chainring: 52,
            cog: 11,
            wheel: new DiameterDouble(),
        });

        assert.closeTo(47.27, gear.gear_inches(), 0.01);
    });
});
