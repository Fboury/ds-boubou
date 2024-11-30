import HttpClient, { FetchResponse } from "../HttpClient";
import GenericRequestBuilder from "../GenericRequestBuilder";
import { MimeLabel } from "../constants/MimeLabel";

interface User {
  readonly nom: string;
  readonly prenom: string;
}

describe("Http Client", function () {
  it("Doit retourner la reponse quand la requête retoune un code ok avec du json", async () => {
    const expected: User = {
      nom: "sraptsrnat",
      prenom: "rbasiteaérpstrsat"
    };

    const userFetch = async (request: RequestInfo, init?: RequestInit) =>
      ({
        json: async () => expected,
        ok: true,
        headers: {
          get(header) {
            return MimeLabel.json;
          }
        }
      } as FetchResponse<User>);

    const client = new HttpClient<User>(userFetch);
    const requestBuilder = new GenericRequestBuilder();
    const request = requestBuilder.get("path").build();
    const response = await client.fetch(request);

    expect(response).toStrictEqual(expected);
  });
  it("Doit retourner la reponse quand la requête retoune un code ok avec du hal+json", async () => {
    const expected: User = {
      nom: "sraptsrnat",
      prenom: "rbasiteaérpstrsat"
    };

    const userFetch = async (request: RequestInfo, init?: RequestInit) =>
        ({
          json: async () => expected,
          ok: true,
          headers: {
            get(header) {
              return MimeLabel.halJson;
            }
          }
        } as FetchResponse<User>);

    const client = new HttpClient<User>(userFetch);
    const requestBuilder = new GenericRequestBuilder();
    const request = requestBuilder.get("path").build();
    const response = await client.fetch(request);

    expect(response).toStrictEqual(expected);
  });

  it("Doit retourner la reponse quand la requête retoune un code ok avec du text", async () => {
    const expected = "ceci est une réponse";

    const userFetch = async (request: RequestInfo, init?: RequestInit) =>
      ({
        text: async () => expected,
        ok: true,
        headers: {
          get(header) {
            return MimeLabel.textHtml;
          }
        }
      } as FetchResponse<string>);

    const client = new HttpClient(userFetch);
    const requestBuilder = new GenericRequestBuilder();
    const request = requestBuilder.get("path").build();
    const response = await client.fetch(request);

    expect(response).toStrictEqual(expected);
  });

  it("Doit émettre une exception quand la réponse n'est pas ok", done => {
    const response = new Response(null, {
      status: 400
    });
    const userFetch = async (request: RequestInfo, init?: RequestInit) => response as FetchResponse<User>;
    const client = new HttpClient(userFetch);
    const requestBuilder = new GenericRequestBuilder();
    const request = requestBuilder.get("/unknow/").build();

    client.fetch(request).catch(reason => {
      done();
    });
  });

  it("Doit émettre une exception avec le message par défaut de l'erreur quand la réponse n'est pas ok", done => {
    const expected = "saurptsra";
    const response = new Response(null, {
      status: 400,
      statusText: expected
    });
    const userFetch = async (request: RequestInfo, init?: RequestInit) => response as FetchResponse<User>;
    const client = new HttpClient(userFetch);
    const requestBuilder = new GenericRequestBuilder();
    const request = requestBuilder.get("/unknow/").build();

    client.fetch(request).catch(reason => {
      expect(reason.message).toEqual(expected);
      done();
    });
  });

  it("Doit émettre une exception avec un body json de l'erreur quand la réponse n'est pas ok", done => {
    const body = { text: "ceci est une erreur" };
    const response = new Response(JSON.stringify(body), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
    const userFetch = async (request: RequestInfo, init?: RequestInit) => response as FetchResponse<User>;
    const client = new HttpClient(userFetch);
    const requestBuilder = new GenericRequestBuilder();
    const request = requestBuilder.get("/unknow/").build();

    client.fetch(request).catch(reason => {
      expect(reason.erreur).toEqual(body);
      done();
    });
  });

  it("Doit émettre une exception avec un body texte de l'erreur quand la réponse n'est pas ok", done => {
    const expected = "saurptsra";
    const body = "ceci est une erreur";
    const response = new Response(body, {
      status: 400,
      statusText: expected
    });
    const userFetch = async (request: RequestInfo, init?: RequestInit) => response as FetchResponse<User>;
    const client = new HttpClient(userFetch);
    const requestBuilder = new GenericRequestBuilder();
    const request = requestBuilder.get("/unknow/").build();

    client.fetch(request).catch(reason => {
      expect(reason.message).toEqual(expected);
      expect(reason.erreur).toEqual(body);
      done();
    });
  });

  it("Doit émettre une exception avec le code de la réponse quand elle n'est pas ok", done => {
    const expected = 418;
    const response = new Response(null, {
      status: expected
    });
    const userFetch = async (request: RequestInfo, init?: RequestInit) => response as FetchResponse<User>;
    const client = new HttpClient(userFetch);
    const requestBuilder = new GenericRequestBuilder();
    const request = requestBuilder.get("/unknow/").build();

    client.fetch(request).catch(reason => {
      expect(reason.code).toEqual(expected);
      done();
    });
  });
});
