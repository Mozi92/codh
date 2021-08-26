export as namespace too;
export = too

declare function too(): string

declare namespace too {
    let jug: number
}

declare global {
    interface String {
        perpend(str: string): string
    }
}