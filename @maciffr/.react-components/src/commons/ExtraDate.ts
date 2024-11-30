export default class ExtraDate extends Date {
  addDays = function (count: number): Date {
    const copy = new Date(this);
    copy.setDate(copy.getDate() + count);
    return copy;
  };

  subDays = function (count: number): Date {
    const copy = new Date(this);
    copy.setDate(copy.getDate() - count);
    return copy;
  };

  isBetween = function (min?: Date, max?: Date): boolean {
    const beforeMin = !!min && this < min;
    const afterMax = !!max && this > max;

    return !(beforeMin || afterMax);
  };

  getLastDate = function (): number {
    const copy = new Date(this);
    copy.setMonth(copy.getMonth() + 1);
    copy.setDate(0);

    return copy.getDate();
  };
}
