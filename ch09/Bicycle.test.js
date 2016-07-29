import Bicycle from './sources/Bicycle';
import bicycleInterfaceTest from './test_includes/bicycle_interface.test';
import bicycleSubclassTest from './test_includes/bicycle_subclass.test';

const assert = require('chai').assert;

class StubbedBike extends Bicycle {
    default_tire_size() {
        return 0;
    }

    local_spares() {
        return {
            saddle: 'painful',
        };
    }
}

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

    it('includes local_spares in spares', () => {
        const bike = new StubbedBike();
        assert.deepEqual(bike.spares(), {
            tire_size: 0,
            chain: '10-speed',
            saddle: 'painful',
        });
    });
});

describe('StubbedBike', () => {
    bicycleSubclassTest(new StubbedBike());
});
