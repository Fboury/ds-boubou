import IsFetchable from "./contract/IsFetchable";
type Fetch<T> = (input: RequestInfo, init?: RequestInit) => Promise<FetchResponse<T>>;
type ResponseType<T> = T | string | undefined | void;
export interface FetchResponse<T> extends Response {
    json(): Promise<T>;
    text(): Promise<string>;
}
export declare class HttpException extends Error {
    readonly code: number;
    readonly message: string;
    readonly erreur: any;
    constructor(code: number, message: string, erreur: any);
}
export default class HttpClient<T> implements IsFetchable<T> {
    private readonly client;
    constructor(client: Fetch<T>);
    fetch(request: Request): Promise<ResponseType<T>>;
    private isJson;
    private isText;
}
export {};
