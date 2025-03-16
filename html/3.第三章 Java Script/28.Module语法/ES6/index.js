import { hello, sayHello as mysayHello, name } from "./hello.js";
//{名称要一致","隔开}或者看成一个整体的对象
import * as MyHello from "./hello.js";


console.log(hello);

function sayHello() {
    console.log("哈哈哈");
}

//名字冲突
sayHello();

mysayHello();


MyHello.sayHello();
console.log(MyHello.hello);

import defualt from "./hello.js";
defualt();