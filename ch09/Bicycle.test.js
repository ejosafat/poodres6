import Bicycle from './sources/Bicycle';
import bicycleInterfaceTest from './test_includes/bicycle_interface.test';

const assert = require('chai').assert;

describe('Bicycle', () => {
    bicycleInterfaceTest(new Bicycle({
        tire_size: 0,
    }));

    it('enforces subclasses to implement default_tire_size', () => {
        const bicycle = new Bicycle({
            tire_size: 0,
        });

        assert.throws(bicycle.default_tire_size, 'Implement default_tire_size()');
    });
});
