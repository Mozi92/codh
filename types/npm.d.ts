export = foo

declare function foo(): string

declare namespace foo {
    function getBea(): void;
}

declare namespace foo {
    function getBar(): number;

    let name: string;
    let sex: number;
}