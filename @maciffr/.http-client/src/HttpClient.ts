import IsFetchable from "./contract/IsFetchable";
import { HeadersLabel } from "./constants/HeadersLabel";
import { MimeLabel } from "./constants/MimeLabel";

type Fetch<T> = (
  input: RequestInfo,
  init?: RequestInit
) => Promise<FetchResponse<T>>;
type ResponseType<T> = T | string | undefined | void;

export interface FetchResponse<T> extends Response {
  json(): Promise<T>;

  text(): Promise<string>;
}

export class HttpException extends Error {
  constructor(
    readonly code: number,
    readonly message: string,
    readonly erreur: any
  ) {
    super(message);
    this.erreur = erreur;
  }
}

export default class HttpClient<T> implements IsFetchable<T> {
  constructor(private readonly client: Fetch<T>) {}

  async fetch(request: Request): Promise<ResponseType<T>> {
    const response = await this.client(request);

    if (!response.ok) {
      let erreur;
      if (this.isJson(response)) {
        erreur = await response.json();
      } else {
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

  private isJson(response: FetchResponse<T>) {
    return [
      MimeLabel.json,
      MimeLabel.halJson
    ].some(type =>
        response.headers.get(HeadersLabel.contentType)?.includes(type)
    );
  }

  private isText(response: FetchResponse<T>) {
    return [
      MimeLabel.textCss,
      MimeLabel.textHtml,
      MimeLabel.textJavascript,
      MimeLabel.textPlain,
    ].some((type) =>
      response.headers.get(HeadersLabel.contentType)?.includes(type)
    );
  }
}
