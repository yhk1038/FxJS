const assert = require('assert');
import describe_support from './describe_support';

export default function callback_spec(baseFn, iterable) {
  iterable = iterable || ['a', 'b', 'c'];

  return () => {
    it('첫 번째 인자로 각 요소를 전달한다.', function() {
      const firstArgs = [];
      const collector = item => firstArgs.push(item);
      baseFn(collector, iterable);
      
      assert.equal(JSON.stringify(firstArgs), JSON.stringify(iterable));
    });
  
    it('두 번째 인자로 요소의 인덱스를 전달한다.', function() {
      const secondArgs = [];
      const collector = (_, idx) => secondArgs.push(idx);
      baseFn(collector, iterable);
  
      assert.equal(JSON.stringify(secondArgs), JSON.stringify([0, 1, 2]));
    });
  
    it('세 번째 인자로 원본 이터러블을 전달한다.', function() {
      const thirdArgs = [];
      const collector = (_, _2, iter) => thirdArgs.push(iter);
      baseFn(collector, iterable);
  
      for (let i = 0; i < iterable.length; i++) {
        assert.equal(JSON.stringify(thirdArgs[i]), JSON.stringify(iterable));
      }
    });
  }
};

export function describe_supporting_regular_callback(baseFn, iterable) {
  iterable = iterable || ['a', 'b', 'c'];

  describe_support('정규 콜백함수를 지원한다. (element, index, iterable)', () => {
    const firstArgs = [];
    const secondArgs = [];
    const thirdArgs = [];
    const collector = (item, idx, iter) => {
      firstArgs.push(item);
      secondArgs.push(idx);
      thirdArgs.push(iter);
    };
    baseFn(collector, iterable);

    assert.deepEqual(firstArgs, iterable);
    assert.deepEqual(secondArgs, [0, 1, 2]);
    for (let i = 0; i < iterable.length; i++) {
      assert.deepEqual(thirdArgs[i], iterable);
    }
  });
};
