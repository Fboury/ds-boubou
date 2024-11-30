import StateObservable, {StateChangedHandler} from "../contracts/StateObservable";

export default abstract class ControllerBase<STATE_TYPE> implements StateObservable<STATE_TYPE> {
    private onStateChangedHandler?:StateChangedHandler<STATE_TYPE>;

    abstract get state():STATE_TYPE;

    subscribeOnStateChanged(onStateChangedHandler:StateChangedHandler<STATE_TYPE>) {
        this.onStateChangedHandler = onStateChangedHandler;
    }

    unsubscribeOnStateChanged() {
        this.onStateChangedHandler = undefined;
    }

    raiseStateChanged() {
        this.onStateChangedHandler && this.onStateChangedHandler(this.state);
    }
}