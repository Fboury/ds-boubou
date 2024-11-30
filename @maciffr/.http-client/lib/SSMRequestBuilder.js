"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSMRequestBuilder = void 0;
const GenericRequestBuilder_1 = __importDefault(require("./GenericRequestBuilder"));
const HeadersLabel_1 = require("./constants/HeadersLabel");
const uuid_1 = require("uuid");
const codeApplicationDefault = "1880";
const codeCibleDefault = "5";
const noStructDefault = "324";
const codeLangueDefault = "fr-FR";
class SSMRequestBuilder {
    parameters;
    dependencies;
    builder;
    constructor(parameters, dependencies) {
        this.parameters = parameters;
        this.dependencies = dependencies;
        const genericParameters = {
            ...this.parameters,
            headers: this.buildDefaultHeaders(this.parameters?.headers)
        };
        this.builder = new GenericRequestBuilder_1.default(genericParameters);
    }
    delete(url) {
        return this.builder.delete(url);
    }
    get(url) {
        return this.builder.get(url);
    }
    post(url) {
        return this.builder.post(url);
    }
    put(url) {
        return this.builder.put(url);
    }
    build() {
        return this.builder.build();
    }
    buildDefaultHeaders(headers) {
        const newHeaders = new Headers(headers);
        newHeaders.set(HeadersLabel_1.HeadersLabel.codeApplication, codeApplicationDefault);
        newHeaders.set(HeadersLabel_1.HeadersLabel.codeCible, codeCibleDefault);
        newHeaders.set(HeadersLabel_1.HeadersLabel.noStruct, noStructDefault);
        newHeaders.set(HeadersLabel_1.HeadersLabel.codeLangue, codeLangueDefault);
        newHeaders.set(HeadersLabel_1.HeadersLabel.navId, this.buildNavId());
        return newHeaders;
    }
    buildNavId() {
        return this.dependencies.cookieParser.get("navid") ?? (0, uuid_1.v4)();
    }
}
exports.SSMRequestBuilder = SSMRequestBuilder;
//# sourceMappingURL=SSMRequestBuilder.js.map