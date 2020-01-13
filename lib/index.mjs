import curry from './features/curry.mjs';
import each from './features/each.mjs';
import map from './features/map.mjs';

const fx = {
  curry,
  each,
  map,
};

// if (window) window.fx = fx;
export default fx;
