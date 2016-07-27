import Trip from './sources/Trip';

const assert = require('chai').assert;
const sinon = require('sinon');

describe('Trip', () => {
    it('requests trip preparation', () => {
        const preparer = {
            prepare_trip() {},
        };
        const mock = sinon.mock(preparer);
        const trip = new Trip();

        mock.expects('prepare_trip').once().withArgs(trip);

        trip.prepare([preparer]);

        mock.verify();
    });
});
