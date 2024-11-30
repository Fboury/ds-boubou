import PageDefinition from "./PageDefinition";

export default interface PageDefinitionFactory {
    create():Promise<PageDefinition>;
}