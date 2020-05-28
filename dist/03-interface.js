// interface LabelledValue {
//     label: string;
// }
// function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label);
// }
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }
// function createSquare(config: SquareConfig): { color: string; area: number } {
//     let newSquare = { color: "white", area: 100 };
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }
// let mySquare = createSquare({ color: "black" });
// const constValue: { a: number, b: string } = { a: 123, b: 'str' };
// constValue.a = 455;
// console.log(constValue);
// let readOnlyValue: { readonly a: number, b: string } = { a: 123, b: 'str' };
// readOnlyValue.a = 455;
// let aNumberList: number[] = [1, 2, 3, 4];
// let readOnlyNumList: ReadonlyArray<number> = aNumberList;
// readOnlyNumList[0] = 12; // error!
// readOnlyNumList.push(5); // error!
// readOnlyNumList.length = 100; // error!
// aNumberList = readOnlyNumList; // error!
// aNumberList = readOnlyNumList as number[]
//额外的属性检查
// interface testAbc {
//     color?: string;
//     width?: string;
// }
// function createSquare(config: testAbc): { color: string, area: string } {
//     return {
//         color: 'a',
//         area: 'b'
//     }
// }
// // let newSquare = createSquare({ color: 'a', width: 'b' })
//通过类型断言绕过
// let newSquare = createSquare({ colour: 'a', width: 'b' } as testAbc);
//通过字符串索引绕过
// interface testAbc {
//     color?: string;
//     width?: string;
//     [prop: string]: any
// }
// function createSquare(config: testAbc): { color: string, area: string } {
//     return {
//         color: 'a',
//         area: 'b'
//     }
// }
// let newSquare2 = createSquare({ colour: 'a', width: 'b' })
//通过赋给一个变量绕过(最新版本不可绕过,绕过失败!!!!!)
// interface testAbc {
//     color: string;
//     width: string;
// }
// function createSquare(config: testAbc): {} {
//     return {
//         returnA: 'returnA'
//     }
// }
// let temp = { colour: 'a', width: 'b' };
// let sq1 = createSquare(temp)
// 函数类型
// interface testFuncInterface {
//     (propA: string, propB: number): boolean;
// }
// let myTestFunc: testFuncInterface;
// myTestFunc = function (a: string, b: number) {
//     return 1 > 2
// }
//可索引的类型
//# sourceMappingURL=03-interface.js.map