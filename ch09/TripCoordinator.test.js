import TripCoordinator from './sources/TripCoordinator';
import preparerInterfaceTest from './test_includes/preparer.test';

describe('TripCoordinator', () => {
   preparerInterfaceTest(new TripCoordinator());
});
