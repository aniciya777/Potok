import { BaseCalculationType } from './base';

class Float extends BaseCalculationType {

}


class PositiveFloat extends Float {

  static onlyPositive() {
    return true;
  }

  toString() {
    if (this.error) {
      return this.error;
    }
    return parseFloat(this.value.toPrecision(9)).toString().replace('.', ',');
  }
}


class Integer extends BaseCalculationType {

  static fromString(str) {
    let val = str
      .replace(/[^0-9-]/g, '');
    if (val !== '') {
      val = val[0] + val.slice(1).replace('-', '');
    }
    if (val === '') {
      val = 0;
    }
    return new this(parseInt(val, 10));
  }

  checkValue(value) {
    try {
      if (!Number.isInteger(value)) {
        throw new Error('Значение должно быть целым');
      }
      return super.checkValue(value);
    } catch (e) {
      this.value = NaN;
      this.error = e.message;
      return false;
    }
  }

  toString() {
    if (this.error) {
      return this.error;
    }
    return this.value.toString();
  }
}


class PositiveInteger extends Integer {

  static onlyPositive() {
    return true;
  }
}


class NaturalNumber extends PositiveInteger {

  static onlyPositive() {
    return true;
  }

  checkValue(value) {
    try {
      if (value === 0) {
        throw new Error('Значение должно быть больше 0');
      }
      return super.checkValue(value);
    } catch (e) {
      this.value = NaN;
      this.error = e.message;
      return false;
    }
  }

  reset() {
    this.value = 1;
    this.error = null;
  }
}


export { Float, PositiveFloat, Integer, PositiveInteger, NaturalNumber };
