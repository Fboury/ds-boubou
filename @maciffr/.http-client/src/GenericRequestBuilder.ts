import RequestBuilderFactory from "./contract/RequestBuilderFactory";
import ReadableRequestBuilder from "./contract/ReadableRequestBuilder";
import WritableRequestBuilder from "./contract/WritableRequestBuilder";
import {NoUriFoundException} from "./exception/NoUriFoundException";


export class Method {
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

    constructor(private readonly parameters?: GenericRequestBuilderParameters) {
        this.parameters = parameters ?? {};

        if (!this.parameters.request) {
            this.parameters = {
                ...parameters,
                request: {
                    method: Method.GET
                }
            }
        }
    }

    setCredentials(value: RequestCredentials) {
        return new GenericRequestBuilder({
            ...this.parameters,
            request: {
                ...this.parameters?.request,
                credentials: value
            }
        });
    }

    setHeader(name: string, value: string) {
        const headers = new Headers(this.parameters?.headers);

        headers.set(name, value);

        return new GenericRequestBuilder({
            ...this.parameters,
            headers
        });
    }

    appendHeader(name: string, value: string) {
        const headers = new Headers(this.parameters?.headers);

        headers.append(name, value);

        return new GenericRequestBuilder({
            ...this.parameters,
            headers
        });
    }

    setFilter(name:string, value:string) {
        const urlSearchParams = new URLSearchParams(this.parameters?.urlSearchParams)

        urlSearchParams.set(name, value);

        return new GenericRequestBuilder({
            ...this.parameters,
            urlSearchParams
        });
    }

    appendFilter(name:string, value:string) {
        const urlSearchParams = new URLSearchParams(this.parameters?.urlSearchParams)

        urlSearchParams.append(name, value);

        return new GenericRequestBuilder({
            ...this.parameters,
            urlSearchParams
        });
    }

    delete(url: string): ReadableRequestBuilder {
        return new GenericRequestBuilder({
            ...this.parameters,
            url,
            request: {
                ...this.parameters?.request,
                method: Method.DELETE
            }
        });
    }

    get(url: string): ReadableRequestBuilder {
        return new GenericRequestBuilder({
            ...this.parameters,
            url,
            request: {
                ...this.parameters?.request,
                method: Method.GET
            }
        });
    }

    post(url: string): WritableRequestBuilder {
        return new GenericRequestBuilder({
            ...this.parameters,
            url,
            request: {
                ...this.parameters?.request,
                method: Method.POST
            }
        });
    }

    put(url: string): WritableRequestBuilder {
        return new GenericRequestBuilder({
            ...this.parameters,
            url,
            request: {
                ...this.parameters?.request,
                method: Method.PUT
            }
        });
    }

    setBody<TBODY>(body: TBODY): WritableRequestBuilder {
        return new GenericRequestBuilder({
            ...this.parameters,
            request: {
                ...this.parameters?.request,
                body: JSON.stringify(body)
            }
        });
    }

    build(): Request {
        return new Request(this.buildUri(), {
            ...this.parameters?.request,
            headers: this.parameters?.headers
        });
    }

    private buildUri() {
        if (!this.parameters?.baseUri?.trim() && !this.parameters?.url?.trim()) {
            throw new NoUriFoundException();
        }

        const baseUri = this.parameters?.baseUri ?? "";
        let uri = `${baseUri}${this.parameters?.url}`;
        const searchParams = this.parameters?.urlSearchParams?.toString();

        if (searchParams && searchParams.length) {
            uri = `${uri}?${searchParams}`;
        }

        return uri
    }
}