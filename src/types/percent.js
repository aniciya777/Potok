import { BaseCalculationType } from './base';

class Percent extends BaseCalculationType {

  static fromInput(input) {
    let obj = super.fromString(input.value.toString())
    if (!obj.error) {
      obj.value = Math.round(obj.value) / 100;
    }
    return obj;
  }

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
    const result = Intl.NumberFormat('ru-RU').format(this.value);
    if (~result.indexOf(',')) {
      return `${result} %`;
    } else {
      return `${result},0 %`;
    }
  }
}


class PositivePercent extends Percent {

    static onlyPositive() {
      return true;
    }
}


export { Percent, PositivePercent };
