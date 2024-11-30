import CookieParser from "../CookieParser";

describe('Cookie Parser', function () {
    beforeAll(() => {
        document.cookie = "plzpdl=zpzkzpkzpkzp";
        document.cookie = "ojzofjej=elkekejekeh";
        document.cookie = "eknflknekfe=eenkjfehjeh";

    });

    it("Doit retourner la valeur lié à la clé quand la clé est présente dans le cookie", function () {
        const key = "lfnkenfek"
        const expected = "vnbkfbjfbgnbntbgn";
        const parser = new CookieParser();

        document.cookie = `${key}=${expected}`

        const actual = parser.get(key);

        expect(actual).toEqual(expected);
    });

    it("Doit retourner null quand la clé n'existe pas", function () {
        const key = "empty"
        const parser = new CookieParser();

        const actual = parser.get(key);

        expect(actual).toBeUndefined();
    });
});