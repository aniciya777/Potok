import { BaseCalculationType } from './base';

class Float extends BaseCalculationType {

}


class PositiveFloat extends Float {

  static onlyPositive() {
    return true;
  }
}


export { Float, PositiveFloat };
