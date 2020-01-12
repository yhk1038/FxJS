import curry from './features/curry';
import each from './features/each';
import map from './features/map';

const fx = {
  curry,
  each,
  map,
};

// if (window) window.fx = fx;
export default fx;
