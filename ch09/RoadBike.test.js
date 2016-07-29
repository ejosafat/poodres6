import RoadBike from './sources/RoadBike';
import bicycleInterfaceTest from './test_includes/bicycle_interface.test';
import bicycleSubclassTest from './test_includes/bicycle_subclass.test';

describe('RoadBike', () => {
    bicycleInterfaceTest(new RoadBike());
    bicycleSubclassTest(new RoadBike());
});
