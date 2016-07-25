const assert = require('chai').assert;
const sinon = require('sinon');

import Gear from './sources/Gear02.js';

describe('Gear', () => {
  const observer = {
    changed() {}
  };
  let mock;
  let gear;

  beforeEach(() => {
    mock = sinon.mock(observer);
    gear = new Gear({
      chainring: 52,
      cog: 11,
      observer,
    });
  });

  afterEach(() => {
    mock.restore();
  });

  it('notifies observers when cog change', () => {
    mock.expects('changed').once().withArgs(52, 27);

    gear.set_cog(27);

    mock.verify();
  });

  it('notifies observers when chainring change', () => {
    mock.expects('changed').once().withArgs(42, 11);

    gear.set_chainring(42);

    mock.verify();
  });
});
