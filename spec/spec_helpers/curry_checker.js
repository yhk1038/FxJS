const assert = require('assert');
import describe_support from './describe_support';

export default function curry_checker(curried, callback, iter, result) {
  const lazyFn = curried(callback);

  // 인자 입력이 완료되면, 원본 함수를 즉시 실행한다.
  assert.deepEqual(curried(callback, iter), result);

  // 인자 입력이 완료되지 않으면, 원본 함수 실행을 지연시킨다.
  assert.deepEqual(typeof lazyFn, 'function');

  // 이터러블 인자 입력이 완료되었을 때, 원본 함수를 실행한다.
  assert.deepEqual(lazyFn(iter), result);
};

export function it_is_curried(targetFn, callback, iter, result) {
  it('curried 함수이다.', () => {
    curry_checker(targetFn, callback, iter, result);
  });
};

export function describe_supporting_curry(targetFn, callback, iter, result) {
  describe_support('Curry 기능을 지원한다.', () => {
    curry_checker(targetFn, callback, iter, result);
  });
}
