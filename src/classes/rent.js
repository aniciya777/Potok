import {PositiveValute, PositivePercent, YearFormat, NaturalNumber, PositiveFloat} from "@/types/types";

class Rent {
  static types = {
    "POSTNUMERANDO": 'постнумерандо',
    "PRENUMERANDO": 'пренумерандо',
    "MID_PERIOD": 'с выплатами в середине периода',
  }

  constructor() {
    this.payment = new PositiveValute(0);
    this.interestRate = new PositivePercent(0);
    this.duration = new YearFormat(0);
    this.p = new NaturalNumber(1);
    this.has_p = false;
    this.m = new NaturalNumber(1);
    this.has_m = false;
    this.type = "POSTNUMERANDO";
  }

  get numberOfPaymentsPerYear() {
    if (this.has_p) {
      return this.p;
    }
    return new NaturalNumber(1);
  }

  get numberOfInterestPerYear() {
    if (this.has_m) {
      return this.m;
    }
    return new NaturalNumber(1);
  }

  get _coefficientOfFactor() {
    switch (this.type) {
      case "POSTNUMERANDO":
        return 1;
      case "PRENUMERANDO":
        return (1 + this.interestRatePerPayment) ** (this.numberOfInterestPerYear / this.numberOfPaymentsPerYear);
      case "MID_PERIOD":
        return (1 + this.interestRatePerPayment) ** (this.numberOfInterestPerYear / (2 * this.numberOfPaymentsPerYear));
      default:
        return 0;
    }
  }

  get interestRatePerPayment() {
    return new PositivePercent(this.interestRate / this.numberOfInterestPerYear);
  }

  set interestRatePerPayment(value) {
    let newInterestRate = new PositivePercent(value * this.numberOfInterestPerYear);
    this.interestRate.load(newInterestRate);
  }

  get effectiveInterestRate() {
    return new PositivePercent((1 + this.interestRatePerPayment) ** this.numberOfInterestPerYear - 1);
  }

  set effectiveInterestRate(value) {
    let newInterestRate = new PositivePercent(this.numberOfInterestPerYear * ((1 + value) ** (1 / this.numberOfInterestPerYear) - 1));
    this.interestRate.load(newInterestRate);
  }

  get rentAccumulationFactor() {
    return new PositiveFloat(
      this._coefficientOfFactor *
      ((1 + this.interestRatePerPayment) ** (this.duration * this.numberOfInterestPerYear) - 1) / (this.numberOfPaymentsPerYear * ((1 + this.interestRatePerPayment) ** (this.numberOfInterestPerYear / this.numberOfPaymentsPerYear) - 1))
    );
  }

  get accruedRent() {
    return new PositiveValute(this.payment * this.rentAccumulationFactor);
  }

  get rentReductionFactor() {
    return new PositiveFloat(
      this._coefficientOfFactor *
      (1 - (1 + this.interestRatePerPayment) ** (-this.duration * this.numberOfInterestPerYear)) / (this.numberOfPaymentsPerYear * ((1 + this.interestRatePerPayment) ** (this.numberOfInterestPerYear / this.numberOfPaymentsPerYear) - 1))
    );
  }

  get presentValueOfPermanentRent() {
    return new PositiveValute(this.payment * this.rentReductionFactor);
  }
}

export {Rent};
