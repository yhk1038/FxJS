// curry
export default f => (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));
