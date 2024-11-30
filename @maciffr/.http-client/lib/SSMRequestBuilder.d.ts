import { GenericRequestBuilderParameters } from "./GenericRequestBuilder";
import RequestBuilder from "./contract/RequestBuilder";
import ReadableRequestBuilder from "./contract/ReadableRequestBuilder";
import RequestBuilderFactory from "./contract/RequestBuilderFactory";
import WritableRequestBuilder from "./contract/WritableRequestBuilder";
import { CookieParser } from "./contract/CookieParser";
interface SSMRequestBuilderParameters extends GenericRequestBuilderParameters {
}
interface SSMRequestBuilderDependencies {
    readonly cookieParser: CookieParser;
}
export declare class SSMRequestBuilder implements RequestBuilderFactory, RequestBuilder {
    private readonly parameters;
    private readonly dependencies;
    private readonly builder;
    constructor(parameters: SSMRequestBuilderParameters, dependencies: SSMRequestBuilderDependencies);
    delete(url: string): ReadableRequestBuilder;
    get(url: string): ReadableRequestBuilder;
    post(url: string): WritableRequestBuilder;
    put(url: string): WritableRequestBuilder;
    build(): Request;
    private buildDefaultHeaders;
    private buildNavId;
}
export {};
