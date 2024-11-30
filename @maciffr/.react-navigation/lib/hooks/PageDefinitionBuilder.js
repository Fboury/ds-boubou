export default class PageDefinitionBuilder {
    constructor(state) {
        this.state = state;
        if (state && !state.equals) {
            state.equals = (other) => this.state.code === (other === null || other === void 0 ? void 0 : other.code);
        }
    }
    code(code) {
        return new PageDefinitionBuilder(Object.assign(Object.assign({}, this.state), { code }));
    }
    path(path) {
        return new PageDefinitionBuilder(Object.assign(Object.assign({}, this.state), { path }));
    }
    route(route) {
        return new PageDefinitionBuilder(Object.assign(Object.assign({}, this.state), { route }));
    }
    displayName(displayName) {
        return new PageDefinitionBuilder(Object.assign(Object.assign({}, this.state), { displayName }));
    }
    build() {
        return this.state;
    }
}
//# sourceMappingURL=PageDefinitionBuilder.js.map