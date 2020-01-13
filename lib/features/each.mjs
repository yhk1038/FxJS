import curry from './curry';

// each
export default curry((f, iter) => {
  for (const [i, a] of iter.entries()) f(a, i, iter);
  return iter;
});
