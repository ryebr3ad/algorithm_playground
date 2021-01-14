export function xor<T>(a: T, b: T): boolean {
    return !!(+(!!a) ^ +(!!b));
}