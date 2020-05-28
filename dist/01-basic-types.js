// let isDone: boolean = true;
// console.log(isDone);
// let decLiteral: number = 6;
// console.log(decLiteral);
// let hexLiteral: number = 0xFFF;
// console.log(hexLiteral);
// let binaryLiteral: number = 0b111;
// console.log(binaryLiteral);
// let x: [string, number];
// x = ['hello', 123];
// x = [10, 'hello'];
// console.log(x);
// console.log(x[0].substr(1));
// console.log(x[1].substr(1));
// x[3] = 'world';
// console.log(x[5].toString());
// x[6] = true;
// enum Color { red, green, Blue };
// let c: Color = Color.red;
// console.log(c);
// enum Color { red = 1, green, Blue };
// let c: Color = Color.red;
// console.log(c);
// let noSure: any = 4;
// noSure = 'maybe a string instead';
// noSure = false;
// let noSure: any = 4;
// noSure.ifItExists();
// noSure.toFixed();
// let prettySure: Object = 4;
// prettySure.toFixed()
// let list: any[] = [1, true, 'free']
// list[1] = 100;
// function warnUser(): void {
//     console.log('this is my warning message');
// }
// let unusable: void = undefined;
// unusable = null;
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("something failed");
}
// function infiniteLoop(): never {
//     while (true) { }
// }
var a = ['a', 'b'];
var b = {
    hah: a
};
var c = Object.assign(b);
console.log(c);
//# sourceMappingURL=01-basic-types.js.map