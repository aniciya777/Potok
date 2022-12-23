export class BaseCalculationType {
  constructor(val) {
    this.value = val;
    this.error = null;
  }
  setValue(val) {
    this._value = val;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    if (value === null || value === undefined || isNaN(value)) {
      this._value = undefined;
      this.error = 'Некорректное значение';
      return;
    }
    if (value === Infinity || value === -Infinity) {
      this._value = undefined;
      this.error = 'Значение слишком большое';
      return;
    }
    this.setValue(value);
  }

  toString() {
    if (this.error) {
      return this.error;
    }
    return this.value;
  }

  valueOf() {
    if (this.error) {
      throw new Error(this.error);
    }
    return this.value;
  }
}

