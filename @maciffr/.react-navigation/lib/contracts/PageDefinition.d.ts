export default interface PageDefinition {
    readonly path: string;
    readonly code: string;
    readonly route: string;
    readonly displayName: string;
    equals(otherPage: PageDefinition): boolean;
}
