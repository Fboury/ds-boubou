import HasState from "./HasState";

export type StateChangedHandler<STATE_TYPE> = (newState:STATE_TYPE) => void;

export default interface StateObservable<STATE_TYPE> extends HasState<STATE_TYPE> {
    subscribeOnStateChanged(onStateChangeHandle:StateChangedHandler<STATE_TYPE>):void;
    unsubscribeOnStateChanged():void;
}