const assert = require('assert');

import map from '../../lib/features/map';

import { describe_supporting_regular_callback } from '../spec_helpers/callback_spec';
import { describe_supporting_curry } from '../spec_helpers/curry_checker';

describe('함수 map 은', () => {
  const items = ['a', 'b', 'c'];

  describe('기본적으로', () => {
    it('각 요소를 콜백함수에 적용한 결과를 배열로 반환한다.', () => {
      const res = map((item) => item + item, items);
      assert.deepEqual(res, ['aa', 'bb', 'cc']);
      assert.equal(res instanceof Array, true);
    });
  });

  describe_supporting_regular_callback(map);
  describe_supporting_curry(map, item => item, items, items);
});
