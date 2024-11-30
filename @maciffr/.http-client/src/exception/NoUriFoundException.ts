export class NoUriFoundException extends Error {
    constructor() {
        super("L'url n'est pas renseignée");
    }
}