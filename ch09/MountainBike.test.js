import MountainBike from './sources/MountainBike';
import bicycleInterfaceTest from './test_includes/bicycle_interface.test';
import bicycleSubclassTest from './test_includes/bicycle_subclass.test';

describe('MountainBike', () => {
    bicycleInterfaceTest(new MountainBike());
    bicycleSubclassTest(new MountainBike());
});
