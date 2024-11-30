type ResponseType<T> = T | string | undefined | void;
export default interface IsFetchable<TRESPONSE> {
    fetch(request:Request):Promise<ResponseType<TRESPONSE>>;
}