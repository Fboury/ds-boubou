"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ControllerBase {
    onStateChangedHandler;
    subscribeOnStateChanged(onStateChangedHandler) {
        this.onStateChangedHandler = onStateChangedHandler;
    }
    unsubscribeOnStateChanged() {
        this.onStateChangedHandler = undefined;
    }
    raiseStateChanged() {
        this.onStateChangedHandler && this.onStateChangedHandler(this.state);
    }
}
exports.default = ControllerBase;
//# sourceMappingURL=ControllerBase.js.map