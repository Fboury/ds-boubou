import PageDefinition from "../contracts/PageDefinition";

export default class PageDefinitionBuilder {
    constructor(readonly state?:PageDefinition) {
        if (state && !state.equals) {
            state.equals = (other) => this.state.code === other?.code;
        }
    }

    code(code:string) {
        return new PageDefinitionBuilder({...this.state, code});
    }

    path(path:string) {
        return new PageDefinitionBuilder({...this.state, path});
    }

    route(route:string) {
        return new PageDefinitionBuilder({...this.state, route});
    }

    displayName(displayName:string) {
        return new PageDefinitionBuilder({...this.state, displayName});
    }

    build() {
        return this.state;
    }
}