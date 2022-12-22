export function correctCalcDecorator(wrapped) {
  return function() {
    try {
      const result = wrapped.apply(this, arguments);
      if (result === Infinity || result === -Infinity) {
        throw new Error('Бесконечность');
      }
      if (isNaN(result)) {
        throw new Error('Некорректный результат');
      }
      return result;
    } catch (e) {
      return e.message;
    }
  }
}
