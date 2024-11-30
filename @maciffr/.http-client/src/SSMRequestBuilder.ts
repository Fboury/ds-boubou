import GenericRequestBuilder, {GenericRequestBuilderParameters} from "./GenericRequestBuilder";
import {HeadersLabel} from "./constants/HeadersLabel";
import RequestBuilder from "./contract/RequestBuilder";
import ReadableRequestBuilder from "./contract/ReadableRequestBuilder";
import RequestBuilderFactory from "./contract/RequestBuilderFactory";
import WritableRequestBuilder from "./contract/WritableRequestBuilder";
import {CookieParser} from "./contract/CookieParser";
import {v4 as uuidv4} from "uuid";

const codeApplicationDefault = "1880";
const codeCibleDefault = "5";
const noStructDefault = "324";
const codeLangueDefault = "fr-FR";

interface SSMRequestBuilderParameters extends GenericRequestBuilderParameters {
}

interface SSMRequestBuilderDependencies {
    readonly cookieParser:CookieParser;
}

export class SSMRequestBuilder implements RequestBuilderFactory, RequestBuilder {
    private readonly builder:GenericRequestBuilder;

    constructor(
        private readonly parameters:SSMRequestBuilderParameters,
        private readonly dependencies:SSMRequestBuilderDependencies
    ) {
        const genericParameters:GenericRequestBuilderParameters = {
            ...this.parameters,
            headers: this.buildDefaultHeaders(this.parameters?.headers)
        };

        this.builder = new GenericRequestBuilder(genericParameters);
    }

    delete(url: string): ReadableRequestBuilder {
        return this.builder.delete(url);
    }

    get(url: string): ReadableRequestBuilder {
        return this.builder.get(url);
    }

    post(url: string): WritableRequestBuilder {
        return this.builder.post(url);
    }

    put(url: string): WritableRequestBuilder {
        return this.builder.put(url);
    }

    build(): Request {
        return this.builder.build();
    }

    private buildDefaultHeaders(headers?: HeadersInit) {
        const newHeaders = new Headers(headers);

        newHeaders.set(HeadersLabel.codeApplication, codeApplicationDefault);
        newHeaders.set(HeadersLabel.codeCible, codeCibleDefault);
        newHeaders.set(HeadersLabel.noStruct, noStructDefault);
        newHeaders.set(HeadersLabel.codeLangue, codeLangueDefault);
        newHeaders.set(HeadersLabel.navId, this.buildNavId());

        return newHeaders;
    }

    private buildNavId() {
        return this.dependencies.cookieParser.get("navid") ?? uuidv4();
    }
}