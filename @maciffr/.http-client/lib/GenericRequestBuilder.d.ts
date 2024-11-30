import RequestBuilderFactory from "./contract/RequestBuilderFactory";
import ReadableRequestBuilder from "./contract/ReadableRequestBuilder";
import WritableRequestBuilder from "./contract/WritableRequestBuilder";
export declare class Method {
    static readonly GET = "GET";
    static readonly PUT = "PUT";
    static readonly POST = "POST";
    static readonly DELETE = "DELETE";
}
export interface GenericRequestBuilderParameters {
    readonly url?: string;
    readonly baseUri?: string;
    readonly request?: RequestInit;
    readonly headers?: HeadersInit;
    readonly urlSearchParams?: URLSearchParams;
}
export default class GenericRequestBuilder implements RequestBuilderFactory, ReadableRequestBuilder, WritableRequestBuilder {
    private readonly parameters?;
    constructor(parameters?: GenericRequestBuilderParameters | undefined);
    setCredentials(value: RequestCredentials): GenericRequestBuilder;
    setHeader(name: string, value: string): GenericRequestBuilder;
    appendHeader(name: string, value: string): GenericRequestBuilder;
    setFilter(name: string, value: string): GenericRequestBuilder;
    appendFilter(name: string, value: string): GenericRequestBuilder;
    delete(url: string): ReadableRequestBuilder;
    get(url: string): ReadableRequestBuilder;
    post(url: string): WritableRequestBuilder;
    put(url: string): WritableRequestBuilder;
    setBody<TBODY>(body: TBODY): WritableRequestBuilder;
    build(): Request;
    private buildUri;
}
