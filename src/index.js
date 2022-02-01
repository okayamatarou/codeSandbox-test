/**
 * コメント
 */
//var val1 = "var変数だよ";
//console.log(val1);

// var 変数は上書き可能

//val1 = "うわがきしちゃった";
//console.log(val1);

// var変数は再宣言可能
//var val1 = "var変数を再宣言";
//console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let は上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言"

// const

// const val3 = "const変数";
// console.log(val3);

// // val3 = "const変数の上書き"

// // const で定義したオブジェクトはプロパティーの変更が可能
// const val4 = {
//   name: "じゃけえ",
//   age: 28
// };

// val4.name = "job";
// val4.addres = "Hiroshima";
// console.log(val4);

//　コメント化　Ctrl-K　Ctrl-C

// const val5 = ["dog", "cat"];
// val5[0] = "dog2";
// val5.push("monkey");
// console.log(val5);

// /**
//  * 19 テンプレート文字列
//  */
// const name = "name";
// const age = 28;

// // 従来法
// const message1 = "私の名前は " + name + "です " + "年齢は" + age;
// console.log(message1);

// // テンプレート文字列を用いる
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

// 20 アロー関数

// function func1(str) {
//   return str;
// }
// const func1 = function(str){return str}
// console.log(func1("オウム返し"));

// アロー関数
const func2 = (str) => str;

console.log(func2("func2です"));

// アロー関数　2変数
const func3 = (num1, num2) => {
  return num1 + num2;
};

console.log(func3(10, 20));
