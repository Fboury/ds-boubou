export default class CookieParser {
    get(key:string):string|undefined {
        const cookie = document.cookie;
        const valueStartAt = this.defineValueStartIndex(cookie, key);
        const valueEndAt = this.defineValueEndIndex(cookie, key, valueStartAt);

        return valueStartAt === undefined
            ? undefined
            : cookie.substring(valueStartAt, valueEndAt);
    }

    private defineValueStartIndex(cookie:string, key:string):number|undefined {
        const keyStartAt = cookie.indexOf(key);

        if (keyStartAt === -1) {
            return;
        }

        return (keyStartAt + key.length + 1);
    }

    private defineValueEndIndex(cookie:string, key:string, valueStartIndex:number|undefined):number|undefined {
        const valueEndIndex = cookie.indexOf(';', valueStartIndex);

        if (valueEndIndex <= 0) {
            return;
        }

        return valueEndIndex;
    }
}