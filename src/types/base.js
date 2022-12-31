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
    if (value === null || value === undefined || isNaN(value)) {
      this.value = NaN;
      this.error = 'Некорректный результат';
      return false;
    } else if (value === Infinity || value === -Infinity) {
      this.value = NaN;
      this.error = 'Значение слишком большое';
      return false;
    } else if (this.constructor.onlyPositive() && value < 0) {
      this.value = NaN;
      this.error = 'Значение не может быть отрицательным';
      return false;
    }
    this.value = value;
    return true;
  }

  setValue(val) {
    if (!this.checkValue(val)) {
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

