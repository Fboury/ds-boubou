import RequestBuilder from "./RequestBuilder";
export default interface WritableRequestBuilder extends RequestBuilder {
    setFilter(name: string, value: string): WritableRequestBuilder;
    appendFilter(name: string, value: string): WritableRequestBuilder;
    appendHeader(name: string, value: string): WritableRequestBuilder;
    setHeader(name: string, value: string): WritableRequestBuilder;
    setBody<TBODY>(body: TBODY): WritableRequestBuilder;
}
