import Mechanic from './sources/Mechanic'
import preparerInterfaceTest from './test_includes/preparer.test';

describe('Mechanic', () => {
   preparerInterfaceTest(new Mechanic());
});
