"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Method = void 0;
const NoUriFoundException_1 = require("./exception/NoUriFoundException");
class Method {
    static GET = "GET";
    static PUT = "PUT";
    static POST = "POST";
    static DELETE = "DELETE";
}
exports.Method = Method;
class GenericRequestBuilder {
    parameters;
    constructor(parameters) {
        this.parameters = parameters;
        this.parameters = parameters ?? {};
        if (!this.parameters.request) {
            this.parameters = {
                ...parameters,
                request: {
                    method: Method.GET
                }
            };
        }
    }
    setCredentials(value) {
        return new GenericRequestBuilder({
            ...this.parameters,
            request: {
                ...this.parameters?.request,
                credentials: value
            }
        });
    }
    setHeader(name, value) {
        const headers = new Headers(this.parameters?.headers);
        headers.set(name, value);
        return new GenericRequestBuilder({
            ...this.parameters,
            headers
        });
    }
    appendHeader(name, value) {
        const headers = new Headers(this.parameters?.headers);
        headers.append(name, value);
        return new GenericRequestBuilder({
            ...this.parameters,
            headers
        });
    }
    setFilter(name, value) {
        const urlSearchParams = new URLSearchParams(this.parameters?.urlSearchParams);
        urlSearchParams.set(name, value);
        return new GenericRequestBuilder({
            ...this.parameters,
            urlSearchParams
        });
    }
    appendFilter(name, value) {
        const urlSearchParams = new URLSearchParams(this.parameters?.urlSearchParams);
        urlSearchParams.append(name, value);
        return new GenericRequestBuilder({
            ...this.parameters,
            urlSearchParams
        });
    }
    delete(url) {
        return new GenericRequestBuilder({
            ...this.parameters,
            url,
            request: {
                ...this.parameters?.request,
                method: Method.DELETE
            }
        });
    }
    get(url) {
        return new GenericRequestBuilder({
            ...this.parameters,
            url,
            request: {
                ...this.parameters?.request,
                method: Method.GET
            }
        });
    }
    post(url) {
        return new GenericRequestBuilder({
            ...this.parameters,
            url,
            request: {
                ...this.parameters?.request,
                method: Method.POST
            }
        });
    }
    put(url) {
        return new GenericRequestBuilder({
            ...this.parameters,
            url,
            request: {
                ...this.parameters?.request,
                method: Method.PUT
            }
        });
    }
    setBody(body) {
        return new GenericRequestBuilder({
            ...this.parameters,
            request: {
                ...this.parameters?.request,
                body: JSON.stringify(body)
            }
        });
    }
    build() {
        return new Request(this.buildUri(), {
            ...this.parameters?.request,
            headers: this.parameters?.headers
        });
    }
    buildUri() {
        if (!this.parameters?.baseUri?.trim() && !this.parameters?.url?.trim()) {
            throw new NoUriFoundException_1.NoUriFoundException();
        }
        const baseUri = this.parameters?.baseUri ?? "";
        let uri = `${baseUri}${this.parameters?.url}`;
        const searchParams = this.parameters?.urlSearchParams?.toString();
        if (searchParams && searchParams.length) {
            uri = `${uri}?${searchParams}`;
        }
        return uri;
    }
}
exports.default = GenericRequestBuilder;
//# sourceMappingURL=GenericRequestBuilder.js.map