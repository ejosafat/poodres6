const assert = require('chai').assert;
import Gear from './sources/Gear03.js';
import diameterizableInterfaceTest from './test_includes/diameterizable.test';

class DiameterDouble {
    width() {
        return 10;
    }
}

describe('DiameterDouble', () => {
   diameterizableInterfaceTest(new DiameterDouble());
});

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
