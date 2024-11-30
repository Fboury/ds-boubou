"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useObserveState(stateObservable) {
    const [state, setState] = (0, react_1.useState)(stateObservable.state);
    (0, react_1.useEffect)(() => {
        const onStateChangedHandler = (newState) => { setState(newState); };
        stateObservable.subscribeOnStateChanged(onStateChangedHandler);
        return () => {
            stateObservable.unsubscribeOnStateChanged();
        };
    }, [stateObservable]);
    return state;
}
exports.default = useObserveState;
//# sourceMappingURL=useObserveState.js.map