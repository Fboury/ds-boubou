import GenericRequestBuilder, {Method} from "../GenericRequestBuilder";
import {NoUriFoundException} from "../exception/NoUriFoundException";
import {CredentialsLabel} from "../constants/CredentialsLabel";

interface Case {
    readonly credentialValue: RequestCredentials;
}

const cases = [
    {
        credentialValue: CredentialsLabel.include,
    },
    {
        credentialValue: CredentialsLabel.omit,
    },
    {
        credentialValue: CredentialsLabel.sameOrigin,
    },
];

describe("Request Builder - Générique", () => {
    it.each<Case>(cases)(
        "Doit avoir le credential quand il est renseigné via le builder",
        ({credentialValue}) => {
            const builder = new GenericRequestBuilder({
                baseUri: "arsau",
            });

            const request = builder.setCredentials(credentialValue).build();

            expect(request.credentials).toEqual(credentialValue);
        }
    );
    it("Doit concatener l'url base et url quand les deux sont renseignés et au bon format", () => {
        const url = "/asrptratp/aprstearpt";
        const baseUri = "https://localhost:3000";
        const expected = `${baseUri}${url}`;
        const builder = new GenericRequestBuilder({url, baseUri});
        const request = builder.build();

        expect(request.url).toEqual(expected);
    });

    it("Doit concatener l'url base et url quand l'url de base est renseigné et que l'url est fournie via get et qu'elles sont au bon format", () => {
        const url = "/asrptratp/aprstearpt";
        const baseUri = "https://localhost:3000";
        const expected = `${baseUri}${url}`;
        const builder = new GenericRequestBuilder({baseUri});
        const request = builder
            .get(url)
            .build();

        expect(request.url).toEqual(expected);
    });

    it("Doit concatener l'url base et url quand l'url de base est renseigné et que l'url est fournie via post et qu'elles sont au bon format", () => {
        const url = "/asrptratp/aprstearpt";
        const baseUri = "https://localhost:3000";
        const expected = `${baseUri}${url}`;
        const builder = new GenericRequestBuilder({baseUri});
        const request = builder
            .post(url)
            .build();

        expect(request.url).toEqual(expected);
    });

    it("Doit concatener l'url base et url quand l'url de base est renseigné et que l'url est fournie via put et qu'elles sont au bon format", () => {
        const url = "/asrptratp/aprstearpt";
        const baseUri = "https://localhost:3000";
        const expected = `${baseUri}${url}`;
        const builder = new GenericRequestBuilder({baseUri});
        const request = builder
            .put(url)
            .build();

        expect(request.url).toEqual(expected);
    });

    it("Doit concatener l'url base et url quand l'url de base est renseigné et que l'url est fournie via delete et qu'elles sont au bon format", () => {
        const url = "/asrptratp/aprstearpt";
        const baseUri = "https://localhost:3000";
        const expected = `${baseUri}${url}`;
        const builder = new GenericRequestBuilder({baseUri});
        const request = builder
            .delete(url)
            .build();

        expect(request.url).toEqual(expected);
    });

    it("Doit ajouter le body dans la requête quand il est renseigné dans la requête post", () => {
        const url = "/apsrtart";
        const body = {
            name: "asrtparst",
            lastname: "arsptarspt"
        };
        const builder = new GenericRequestBuilder();

        const request = builder.post(url)
            .setBody(body)
            .build();

        expect(request?.body?.toString()).toEqual(JSON.stringify(body));
    });

    it("Doit avoir la méthod GET par défaut", () => {
        const builder = new GenericRequestBuilder({
            baseUri: "arsau"
        });

        const request = builder.build();

        expect(request.method).toEqual(Method.GET);
    });

    it("Doit avoir la méthod GET quand c'est une requête GET qui est construite", () => {
        const builder = new GenericRequestBuilder();

        const request = builder.get("/arpstarspt").build();

        expect(request.method).toEqual(Method.GET);
    });

    it("Doit avoir la méthod POST quand c'est une requête POST qui est construite", () => {
        const builder = new GenericRequestBuilder();

        const request = builder.post("/arpstarspt").build();

        expect(request.method).toEqual(Method.POST);
    });

    it("Doit avoir la méthod PUT quand c'est une requête PUT qui est construite", () => {
        const builder = new GenericRequestBuilder();

        const request = builder.put("/arpstarspt").build();

        expect(request.method).toEqual(Method.PUT);
    });

    it("Doit avoir la méthod DELETE quand c'est une requête DELETE qui est construite", () => {
        const builder = new GenericRequestBuilder();

        const request = builder.delete("/arpstarspt").build();

        expect(request.method).toEqual(Method.DELETE);
    });

    it("Doit avoir le header dans la requête quand il est renseigné dans le builder", () => {
        const builder = new GenericRequestBuilder({
            baseUri: "suatperstasrt"
        });
        const headerName = "arsptarspte",
            headerValue = "auirsteapqgéqp";
        const request = builder.setHeader(headerName, headerValue).build();

        expect(request.headers.get(headerName)).toEqual(headerValue)
    });

    it("Doit remplacer la valeur du header dans la requête quand elle est renseigné une deuxième fois dans le builder", () => {
        const builder = new GenericRequestBuilder({
            baseUri: "sarptrnatrs"
        });
        const headerName = "arsptarspte",
            headerValue = "auirsteapqgéqp",
            expected = "ruastpesrantps";

        const request = builder
            .setHeader(headerName, headerValue)
            .setHeader(headerName, expected)
            .build();

        expect(request.headers.get(headerName)).toEqual(expected)
    });

    it("Doit concatener les valeurs dans le header quand on ajoute une valeur dans le header", () => {
        const builder = new GenericRequestBuilder({
            baseUri: "sarpatepsrt"
        });
        const headerName = "arsptarspte",
            headerValue = "auirsteapqgéqp",
            secondValue = "ruastpesrantps";

        const request = builder
            .appendHeader(headerName, headerValue)
            .appendHeader(headerName, secondValue)
            .build();

        expect(request.headers.get(headerName)).toEqual(`${headerValue}, ${secondValue}`);
    });

    it("Doit ajouter les paramètres dans l'url quand il y a des filtres", () => {
       const builder = new GenericRequestBuilder();
       const url = "moUri";
       const filtre1Name = "filtre1",
           filtre1Value = "arstpargi",
           filtre2Name = "filtre2",
           filtre2Value = "rsatpruspter";

       const request = builder
           .get(url)
           .setFilter(filtre1Name, filtre1Value)
           .setFilter(filtre2Name, filtre2Value)
           .build();

       const filtres:Record<string, string> = {};
       filtres[filtre1Name] = filtre1Value;
       filtres[filtre2Name] = filtre2Value;

       const params = new URLSearchParams(filtres);

       expect(request.url).toEqual(`${url}?${params}`);
    });

    it("Doit remplacer la valeur du filtre quand le fitre et appliqué une deuxième fois avec une nouvelle valeur", () => {
        const builder = new GenericRequestBuilder();
        const url = "moUri";
        const filtre1Name = "filtre1",
            filtreValue = "arstpargi",
            filtreNouvelleValue = "rsatpruspter";

        const request = builder
            .get(url)
            .setFilter(filtre1Name, filtreValue)
            .setFilter(filtre1Name, filtreNouvelleValue)
            .build();

        const filtres: Record<string, string> = {};
        filtres[filtre1Name] = filtreNouvelleValue;

        const params = new URLSearchParams(filtres);

        expect(request.url).toEqual(`${url}?${params}`);
    });

    it("Doit concatener les valeurs dans le filtre quand on ajoute une valeur au filtre", () => {
        const builder = new GenericRequestBuilder();
        const url = "moUri";
        const filtre1Name = "filtre1",
            filtreValeur = "arstpargi",
            filtreAutreValue = "rsatpruspter";

        const request = builder
            .get(url)
            .setFilter(filtre1Name, filtreValeur)
            .appendFilter(filtre1Name, filtreAutreValue)
            .build();

        expect(request.url).toEqual(`${url}?${filtre1Name}=${filtreValeur}&${filtre1Name}=${filtreAutreValue}`);
    });

    it("Doit émettre une erreur quand aucune url n'est renseignée", function () {
        const builder = new GenericRequestBuilder();

        expect(() => builder.build()).toThrow(new NoUriFoundException());
    });

    it("Doit émmetre une exception quand aucune url n'est renseigné et que base uri est une chaine vide", () => {
       const builder = new GenericRequestBuilder({
           baseUri: ""
       });

       expect(() => builder.build()).toThrow(new NoUriFoundException());
    });

    it("Doit émmetre une exception quand aucune url n'est renseigné et que base uri est une chaine blanche", () => {
        const builder = new GenericRequestBuilder({
            baseUri: "     "
        });

        expect(() => builder.build()).toThrow(new NoUriFoundException());
    });

    it("Doit émmetre une exception quand aucune url n'est renseigné et que url est une chaine vide", () => {
        const builder = new GenericRequestBuilder({
            url: ""
        });

        expect(() => builder.build()).toThrow(new NoUriFoundException());
    });

    it("Doit émmetre une exception quand aucune url n'est renseigné et que url est une chaine blanche", () => {
        const builder = new GenericRequestBuilder({
            url: "     "
        });

        expect(() => builder.build()).toThrow(new NoUriFoundException());
    });
});
