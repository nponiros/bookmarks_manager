export default function lazyFunction(f) {
  return function applyType(...args) {
    return f().apply(this, args);
  };
}
