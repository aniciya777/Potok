export class BaseCalculationType {

  static fromInput(input) {
    return this.fromString(input.value.toString());
  }

  static fromString(str) {
    let val = str
      .replace(',', '.')
      .replace(/[^0-9.-]/g, '');
    if (val !== '') {
      val = val[0] + val.slice(1).replace('-', '');
    }
    val += '.0';
    if (val === '.') {
      val = '';
    }
    if (val === '') {
      val = 0;
    }
    return new this(parseFloat(val));
  }

  constructor(val) {
    this.error = null;
    this.value = NaN;
    this.setValue(val);
  }

  static onlyPositive() {
    return false;
  }

  checkValue(value) {
    try {
      if (value === null || value === undefined || isNaN(value)) {
        throw new Error('Некорректный результат');
      } else if (value === Infinity || value === -Infinity) {
        throw new Error('Значение слишком большое');
      } else if (this.constructor.onlyPositive() && value < 0) {
        throw new Error('Значение не может быть отрицательным');
      }
      this.value = value;
      return true;
    } catch (e) {
      this.value = NaN;
      this.error = e.message;
      return false;
    }
  }

  setValue(val) {
    if (!this.checkValue(+val)) {
      // throw new Error(this.error);
    }
  }

  valueOf() {
    if (this.error) {
      throw new Error(this.error);
    }
    return this.value;
  }

  toString() {
    if (this.error) {
      return this.error;
    }
    return this.value;
  }

  reset() {
    this.value = 0;
    this.error = null;
  }

  resetError() {
    if (this.error !== null) {
      this.reset();
    }
  }
}

