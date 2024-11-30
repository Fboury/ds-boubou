import IsCloneable from "../contracts/IsCloneable";

type Prototype<T> = () => T

export default function CloneableExtension<T, U extends IsCloneable<T>>(toExtend:T, prototype:Prototype<T>): U {
    const target = toExtend as any;

    target.clone = prototype;

    return target;
}