import RequestBuilder from "./RequestBuilder";

export default interface ReadableRequestBuilder extends RequestBuilder {
    setFilter(name:string, value:string):ReadableRequestBuilder;
    appendFilter(name:string, value:string):ReadableRequestBuilder;
    appendHeader(name:string, value:string):ReadableRequestBuilder;
    setHeader(name:string, value:string): ReadableRequestBuilder;
}