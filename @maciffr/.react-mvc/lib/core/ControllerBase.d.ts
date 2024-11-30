import StateObservable, { StateChangedHandler } from "../contracts/StateObservable";
export default abstract class ControllerBase<STATE_TYPE> implements StateObservable<STATE_TYPE> {
    private onStateChangedHandler?;
    abstract get state(): STATE_TYPE;
    subscribeOnStateChanged(onStateChangedHandler: StateChangedHandler<STATE_TYPE>): void;
    unsubscribeOnStateChanged(): void;
    raiseStateChanged(): void;
}
