"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpException = void 0;
const HeadersLabel_1 = require("./constants/HeadersLabel");
const MimeLabel_1 = require("./constants/MimeLabel");
class HttpException extends Error {
    code;
    message;
    erreur;
    constructor(code, message, erreur) {
        super(message);
        this.code = code;
        this.message = message;
        this.erreur = erreur;
        this.erreur = erreur;
    }
}
exports.HttpException = HttpException;
class HttpClient {
    client;
    constructor(client) {
        this.client = client;
    }
    async fetch(request) {
        const response = await this.client(request);
        if (!response.ok) {
            let erreur;
            if (this.isJson(response)) {
                erreur = await response.json();
            }
            else {
                erreur = await response.text();
            }
            throw new HttpException(response.status, response.statusText, erreur);
        }
        if (this.isJson(response)) {
            return response.json();
        }
        if (this.isText(response)) {
            return response.text();
        }
        return Promise.resolve();
    }
    isJson(response) {
        return [
            MimeLabel_1.MimeLabel.json,
            MimeLabel_1.MimeLabel.halJson
        ].some(type => response.headers.get(HeadersLabel_1.HeadersLabel.contentType)?.includes(type));
    }
    isText(response) {
        return [
            MimeLabel_1.MimeLabel.textCss,
            MimeLabel_1.MimeLabel.textHtml,
            MimeLabel_1.MimeLabel.textJavascript,
            MimeLabel_1.MimeLabel.textPlain,
        ].some((type) => response.headers.get(HeadersLabel_1.HeadersLabel.contentType)?.includes(type));
    }
}
exports.default = HttpClient;
//# sourceMappingURL=HttpClient.js.map