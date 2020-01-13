import curry from './curry.mjs';

// each
export default curry((f, iter) => {
  const res = [];
  for (const [i, a] of iter.entries()) res.push(f(a, i, iter));
  return res;
});
