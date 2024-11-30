export interface CookieParser {
    get(key: string): string | undefined;
}
