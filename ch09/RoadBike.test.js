import RoadBike from './sources/RoadBike';
import bicycleInterfaceTest from './test_includes/bicycle_interface.test';

describe('RoadBike', () => {
    bicycleInterfaceTest(new RoadBike());
});
