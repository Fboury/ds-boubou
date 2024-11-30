export default class ExtraDate extends Date {
    addDays: (count: number) => Date;
    subDays: (count: number) => Date;
    isBetween: (min?: Date, max?: Date) => boolean;
    getLastDate: () => number;
}
