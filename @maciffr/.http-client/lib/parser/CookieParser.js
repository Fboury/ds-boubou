"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CookieParser {
    get(key) {
        const cookie = document.cookie;
        const valueStartAt = this.defineValueStartIndex(cookie, key);
        const valueEndAt = this.defineValueEndIndex(cookie, key, valueStartAt);
        return valueStartAt === undefined
            ? undefined
            : cookie.substring(valueStartAt, valueEndAt);
    }
    defineValueStartIndex(cookie, key) {
        const keyStartAt = cookie.indexOf(key);
        if (keyStartAt === -1) {
            return;
        }
        return (keyStartAt + key.length + 1);
    }
    defineValueEndIndex(cookie, key, valueStartIndex) {
        const valueEndIndex = cookie.indexOf(';', valueStartIndex);
        if (valueEndIndex <= 0) {
            return;
        }
        return valueEndIndex;
    }
}
exports.default = CookieParser;
//# sourceMappingURL=CookieParser.js.map