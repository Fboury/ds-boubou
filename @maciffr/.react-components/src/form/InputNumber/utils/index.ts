import {REGEX_ONLY_NUMBER} from "../constantes";

export function isNumber(value: string | number): boolean {
    try {
        return REGEX_ONLY_NUMBER.test(value.toString());
    } catch (e) {
        return false;
    }
}