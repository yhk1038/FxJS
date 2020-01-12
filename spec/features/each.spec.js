const assert = require('assert');

import each from '../../lib/features/each';

import { describe_supporting_regular_callback } from '../spec_helpers/callback_spec';
import { describe_supporting_curry } from '../spec_helpers/curry_checker';

describe('함수 each 는', () => {
  const items = ['a', 'b', 'c'];

  describe('기본적으로', () => {
    it('입력된 이터러블 객체를 그대로 반환한다.', () => {
      const res = each(() => {}, items);
      assert.equal(res, items);
    });
  });

  describe_supporting_regular_callback(each);
  describe_supporting_curry(each, item => item, items, items);
});
