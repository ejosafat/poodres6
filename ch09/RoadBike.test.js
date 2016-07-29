import RoadBike from './sources/RoadBike';
import bicycleInterfaceTest from './test_includes/bicycle_interface.test';
import bicycleSubclassTest from './test_includes/bicycle_subclass.test';

const assert = require('chai').assert;

describe('RoadBike', () => {
    bicycleInterfaceTest(new RoadBike());
    bicycleSubclassTest(new RoadBike());

    it('puts tape color in local spares', () => {
        const bike = new RoadBike({
            tape_color: 'red',
        });

        assert.strictEqual(bike.local_spares().tape_color, 'red');
    });
});
