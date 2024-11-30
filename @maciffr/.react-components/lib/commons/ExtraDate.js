"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExtraDate extends Date {
    addDays = function (count) {
        const copy = new Date(this);
        copy.setDate(copy.getDate() + count);
        return copy;
    };
    subDays = function (count) {
        const copy = new Date(this);
        copy.setDate(copy.getDate() - count);
        return copy;
    };
    isBetween = function (min, max) {
        const beforeMin = !!min && this < min;
        const afterMax = !!max && this > max;
        return !(beforeMin || afterMax);
    };
    getLastDate = function () {
        const copy = new Date(this);
        copy.setMonth(copy.getMonth() + 1);
        copy.setDate(0);
        return copy.getDate();
    };
}
exports.default = ExtraDate;
//# sourceMappingURL=ExtraDate.js.map