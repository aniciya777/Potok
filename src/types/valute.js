import { BaseCalculationType } from './base';

class Valute extends BaseCalculationType {

  setValue(value) {
    super.setValue(Math.round(value * 100));
  }

  valueOf() {
    return super.valueOf() / 100;
  }

  toString() {
    if (this.error) {
      return this.error;
    }
    const val = Math.abs(this.value);
    const int = Intl.NumberFormat('ru-RU').format(Math.floor(val / 100));
    const dec = String(val % 100).padStart(2, '0');
    let result = `${int} руб. ${dec} коп.`;
    if (this.value < 0 && !this.constructor.onlyPositive()) {
      result = `-${result}`;
    }
    return result;
  }
}


class PositiveValute extends Valute {

    static onlyPositive() {
      return true;
    }
}


export { Valute, PositiveValute };
