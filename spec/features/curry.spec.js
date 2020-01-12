const assert = require('assert');
import curry from '../../lib/features/curry';

describe('함수 curry 는', () => {
  const sampleFn = (...iter) => iter;

  describe('기본적으로', () => {

    it('인자가 두 개 이상인 함수를 인자로 받는다.', () => {
      const monoArgFn = a => a;
      const multiArgFn = sampleFn;

      assert.notDeepEqual(monoArgFn(1), curry(monoArgFn)(1));
      assert.deepEqual(multiArgFn(1, 2), curry(multiArgFn)(1, 2));
    });

    it('함수를 래핑하여 반환한다.', () => {
      const wrappedFn = curry(sampleFn);
      assert.equal(typeof wrappedFn, 'function');
      assert.deepEqual(sampleFn(1, 2), wrappedFn(1, 2));
    });
  });

  describe('래핑된 함수는', () => {
    describe('원본 함수의 동작을 보장하기 위해', () => {
      it('입력이 동일한 경우, 원본 함수와 같은 결과를 보장한다.', () => {
        const wrappedFn = curry(sampleFn);
        assert.equal(typeof wrappedFn, 'function');
        assert.deepEqual(sampleFn(1, 2), wrappedFn(1, 2));
      });
    });

    describe('curry된 함수로서', () => {
      const items = ['a', 'b', 'c'];
      const callback = item => item;
      const iterFn = (f, ...args) => {
        const res = [];
        for(const a of args) res.push(f(a));
        return res;
      };
      const curried = curry(iterFn);
      const lazyFn = curried(callback);

      it('인자 입력이 완료되면, 원본 함수를 즉시 실행한다.', () => {
        assert.deepEqual(curried(callback, items), iterFn(callback, items));
      });

      it('인자 입력이 완료되지 않으면, 원본 함수 실행을 지연시킨다.', () => {
        assert.deepEqual(typeof lazyFn, 'function');
      });

      it('이터러블 인자 입력이 완료되었을 때, 원본 함수를 실행한다.', () => {
        assert.deepEqual(lazyFn(items), iterFn(callback, items));
      });
    });
  });
});
