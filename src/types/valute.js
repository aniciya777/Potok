import { BaseCalculationType } from './base';

export class Valute extends BaseCalculationType {
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
    const int = Intl.NumberFormat('ru-RU').format(Math.floor(this._value / 100));
    const dec = String(this._value % 100).padStart(2, '0');
    return `${int} руб. ${dec} коп.`;
  }
}
