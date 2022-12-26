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
    const int = Intl.NumberFormat('ru-RU').format(Math.floor(this.value / 100));
    const dec = String(this.value % 100).padStart(2, '0');
    return `${int} руб. ${dec} коп.`;
  }
}


class PositiveValute extends Valute {

    static onlyPositive() {
      return true;
    }
}


export { Valute, PositiveValute };
