import Bicycle from './sources/Bicycle';
import bicycleInterfaceTest from './test_includes/bicycle_interface.test';

describe('Bicycle', () => {
    bicycleInterfaceTest(new Bicycle({
        tire_size: 0,
    }));
});
