export default interface HasState<STATE_TYPE> {
    get state(): STATE_TYPE;
}
