import { BaseCalculationType } from './base';

export class Percent extends BaseCalculationType {
  get value() {
    return this._value / 100;
  }

  set value(value) {
    super.value = value;
  }

  setValue(value) {
    this._value = Math.round(value * 100);
  }

  toString() {
    if (this.error) {
      return this.error;
    }
    const result = Intl.NumberFormat('ru-RU').format(this._value / 100);
    if (~result.indexOf(',')) {
      return `${result} %`;
    } else {
      return `${result},0 %`;
    }
  }
}
