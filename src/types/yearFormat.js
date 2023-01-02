import { BaseCalculationType } from './base';
import { app } from '../_config';

class YearFormat extends BaseCalculationType {
  static onlyPositive() {
    return true;
  }

  static getYearString(year) {
    if (year % 10 === 1 && year % 100 !== 11) {
      return 'год';
    } else if (year % 10 >= 2 && year % 10 <= 4 && (year % 100 < 10 || year % 100 >= 20)) {
      return 'года';
    } else {
      return 'лет';
    }
  }

  static getMonthString(month) {
    if (month === 1) {
      return 'месяц';
    } else if (month >= 2 && month <= 4) {
      return 'месяца';
    } else {
      return 'месяцев';
    }
  }

  static getDayString(day) {
    if (day % 10 === 1 && day % 100 !== 11) {
      return 'день';
    } else if (day % 10 >= 2 && day % 10 <= 4 && (day % 100 < 10 || day % 100 >= 20)) {
      return 'дня';
    } else {
      return 'дней';
    }
  }

  year() {
    if (this.error) {
      throw new Error(this.error);
    }
    return Math.floor(this.value);
  }

  month() {
    if (this.error) {
      throw new Error(this.error);
    }
    return Math.floor((this.value - this.year()) * 12);
  }

  day() {
    if (this.error) {
      throw new Error(this.error);
    }
    return Math.round((this.value - this.year() - this.month() / 12) * app.days_in_year);
  }

  toString() {
    if (this.error) {
      return this.error;
    }
    let result = '';
    if (this.year() > 0) {
      result = `${this.year()} ${YearFormat.getYearString(this.year())}`;
    }
    if (this.month() > 0) {
      result += ` ${this.month()} ${YearFormat.getMonthString(this.month())}`;
    }
    if (this.day() > 0 || result === '') {
      result += ` ${this.day()} ${YearFormat.getDayString(this.day())}`;
    }
    return result.trim();
  }

  setValue(val) {
    super.setValue(val);
    if (this.error === null) {
      this.value = parseFloat(this.value.toPrecision(12));
    }
  }
}

export { YearFormat };
