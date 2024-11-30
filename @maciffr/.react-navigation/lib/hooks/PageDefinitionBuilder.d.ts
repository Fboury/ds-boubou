import PageDefinition from "../contracts/PageDefinition";
export default class PageDefinitionBuilder {
    readonly state?: PageDefinition;
    constructor(state?: PageDefinition);
    code(code: string): PageDefinitionBuilder;
    path(path: string): PageDefinitionBuilder;
    route(route: string): PageDefinitionBuilder;
    displayName(displayName: string): PageDefinitionBuilder;
    build(): PageDefinition;
}
