const assert = require('assert');
import fx from '../../lib/index';

const has_module = (name, i) => it(`${i ? `${i}. ` : ''}${name}`, () => assert.equal(typeof fx[name], 'function'));
const pending_module = (name) => it(name);

describe('fx 모듈의 기능', function () {
  const features = [
    'curry',
    'each',
    'map',
  ];
  
  const pendings = [
    'filter',
    'reduce',
    'go',
    'pipe',
    'take',
    'takeAll',
  ];
  
  for (let i = 0; i < features.length; i++) has_module(features[i], i + 1);
  // for (let i = 0; i < pendings.length; i++) pending_module(pendings[i]);
});
