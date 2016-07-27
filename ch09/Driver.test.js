import Driver from './sources/Driver';
import preparerInterfaceTest from './test_includes/preparer.test';

describe('Driver', () => {
   preparerInterfaceTest(new Driver());
});
