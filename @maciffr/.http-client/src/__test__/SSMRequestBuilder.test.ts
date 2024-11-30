import {SSMRequestBuilder} from "../SSMRequestBuilder";
import {HeadersLabel} from "../constants/HeadersLabel";
import {NoUriFoundException} from "../exception/NoUriFoundException";
import {Method} from "../GenericRequestBuilder";
import {CookieParser} from "../contract/CookieParser";

interface Case {
    readonly headerLabel: string;
    readonly valeur: string;
}

const cases = [
    {
        headerLabel: HeadersLabel.codeApplication,
        valeur: '1880'
    }, {
        headerLabel: HeadersLabel.codeCible,
        valeur: '5'
    }, {
        headerLabel: HeadersLabel.noStruct,
        valeur: '324'
    }, {
        headerLabel: HeadersLabel.codeLangue,
        valeur: 'fr-FR'
    }
]

const emptyCookieParser: CookieParser = {
    get(key: string):string|undefined {
        return;
    }
}

describe('RequestBuilder - SSM', function () {
    it.each<Case>(cases)("Doit avoir le header $headerLabel avec la valeur $valeur quand la requête est construite et que le header n'a pas été renseigné",
        ({
             headerLabel,
             valeur
         }) => {
            const builder = initRequestBuilder();

            const request = builder.build();

            expect(request.headers.get(headerLabel)).toEqual(valeur);
        });

    it.each<Case>(cases)("Doit changer la valeur du header $headerLabel quand la valeur et renseigné via le builder",
        ({
             headerLabel
         }) => {
            const expected = "rasnteprsa";
            const builder = initRequestBuilder()
                .get("sarpteasrpt")
                .setHeader(headerLabel, expected);

            const request = builder.build();

            expect(request.headers.get(headerLabel)).toEqual(expected);
        });

    it("Doit avoir la méthode GET par défaut quand aucune méthode n'a été renseigné et que l'url est présente", function () {
        const builder = initRequestBuilder();

        const request = builder.build();

        expect(request.method).toEqual(Method.GET);
    });

    it("Doit construire une requête GET quand la méthode get est choisie", () => {
        const builder = initRequestBuilder();

        const request = builder.get("srtarnpta").build();

        expect(request.method).toEqual(Method.GET);
    });

    it("Doit construire une requête POST quand la méthode post est choisie", () => {
        const builder = initRequestBuilder();

        const request = builder.post("srtarnpta").build();

        expect(request.method).toEqual(Method.POST);
    });

    it("Doit construire une requête PUT quand la méthode post est choisie", () => {
        const builder = initRequestBuilder();

        const request = builder.put("srtarnpta").build();

        expect(request.method).toEqual(Method.PUT);
    });

    it("Doit construire une requête DELETE quand la méthode post est choisie", () => {
        const builder = initRequestBuilder();

        const request = builder.delete("srtarnpta").build();

        expect(request.method).toEqual(Method.DELETE);
    });

    it("Doit émettre une erreur quand aucune url n'est renseignée", function () {
        const builder = new SSMRequestBuilder({}, {
            cookieParser: emptyCookieParser
        });

        expect(() => builder.build()).toThrow(new NoUriFoundException());
    });

    it("Doit émmetre une exception quand aucune url n'est renseigné et que base uri est une chaine vide", () => {
        const builder = new SSMRequestBuilder({
            baseUri: "",
        }, {
            cookieParser: emptyCookieParser
        });

        expect(() => builder.build()).toThrow(new NoUriFoundException());
    });

    it("Doit émmetre une exception quand aucune url n'est renseigné et que base uri est une chaine blanche", () => {
        const builder = new SSMRequestBuilder({
            baseUri: "     ",
        }, {
            cookieParser: emptyCookieParser
        });

        expect(() => builder.build()).toThrow(new NoUriFoundException());
    });


    it("Doit initialiser le header X-Nav-Id avec la valeur présente dans le cookie quand il construit la requête", () => {
        const expected = "staurspt";

        const builder = new SSMRequestBuilder({
            url: "asrterast",
        }, {
            cookieParser: {
                get(key: string) {
                    return expected;
                }
            }
        });
        const request = builder.build();

        expect(request.headers.get(HeadersLabel.navId)).toEqual(expected);
    });

    it("Doit générer un uuid pour le header X-Nav-Id quand l'identifiant n'est pas présent dans le cookie", () => {
        const builder = initRequestBuilder();
        const request = builder.build();

        expect(request.headers.get(HeadersLabel.navId)).toMatch(/^[0-9a-fA-F]{8}(-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$/);
    });
});

function initRequestBuilder() {
    return new SSMRequestBuilder({
        url: "ratirsatirst"
    }, {
        cookieParser: emptyCookieParser
    });
}