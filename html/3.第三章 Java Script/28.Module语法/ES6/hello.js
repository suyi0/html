//export 可以导出变量
//export 可以导出函数
export var hello = "hello";

export function sayHello() {
    console.log("hello");
}

export let name = "yyds";

//一个文件只能出现一个export default
//export default 默认导出
export default function () {
    console.log("default");
}