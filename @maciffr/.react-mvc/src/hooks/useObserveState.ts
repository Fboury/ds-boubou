import {useEffect, useState} from "react";
import StateObservable from "../contracts/StateObservable";

export default function useObserveState<STATE_TYPE>(stateObservable:StateObservable<STATE_TYPE>):STATE_TYPE {
    const [ state, setState ] = useState(stateObservable.state);

    useEffect(() => {
        const onStateChangedHandler = (newState:STATE_TYPE) => { setState(newState); }

        stateObservable.subscribeOnStateChanged(onStateChangedHandler);

        return () => {
            stateObservable.unsubscribeOnStateChanged();
        }

    }, [stateObservable]);

    return state;
}