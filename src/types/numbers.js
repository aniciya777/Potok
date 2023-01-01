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
    return parseFloat(this.value.toPrecision(12)).toString().replace('.', ',');
  }
}


export { Float, PositiveFloat };
