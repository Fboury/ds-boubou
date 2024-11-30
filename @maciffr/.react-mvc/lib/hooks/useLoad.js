"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useLoad(loadable) {
    (0, react_1.useEffect)(() => {
        loadable.load();
    }, [loadable]);
}
exports.default = useLoad;
//# sourceMappingURL=useLoad.js.map