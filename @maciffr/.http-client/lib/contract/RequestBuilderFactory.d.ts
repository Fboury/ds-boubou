import ReadableRequestBuilder from "./ReadableRequestBuilder";
import WritableRequestBuilder from "./WritableRequestBuilder";
export default interface RequestBuilderFactory {
    get(url: string): ReadableRequestBuilder;
    post(url: string): WritableRequestBuilder;
    put(url: string): WritableRequestBuilder;
    delete(url: string): ReadableRequestBuilder;
}
