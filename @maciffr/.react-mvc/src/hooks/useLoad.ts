import IsLoadable from "../contracts/IsLoadable";
import {useEffect} from "react";

export default function useLoad(loadable:IsLoadable) {
    useEffect(() => {
       loadable.load();
    }, [loadable]);
}