//  This File is Just doing some stuff of AuthoiScript , just using 
//  some built in functions. Go to File.js To see  Authoi Script
// 
// ------------------------------------------------------------------

import * as authoi_script from './authoi_script.js';


const { List, print, sum, π, Amath, get_decimal, range, run} = authoi_script;

const list = new List([3,4])
list.print() // [3,4]
list.add(4) // it will push 4
list.add(6) // it will push 6
list.remove(3) // it filter out 3th indexed
list.includes(3) // true
list.includes(3) // true
list.size // 4
list.find(3) // 3rd index is now 6
list.indexof(3) // 0
list.multiply(3) //9, 12, 12, 18
list.multiplyLength(2) //[ 9, 12, 12, 18, 9, 12, 12, 18]
list.uniqify() // [9, 12, 18 ]
list.clear() // []

list.items // [], now it is empty so you can see that , it is the main array
list.items = [1,2,3,4] // you can set the items directly
list.print() // [1,2,3,4]

list.items.filter(item => item > 2) // [3, 4] you can run any array method on items

const x = sum({type: "integer"},...list.items) // the sum of items is 10
print(x) // 10

sum({type: "integer"},2,3,6) // 11
sum({ type: "object" }, { c: 1, d: 4 }, { b: 2 }, { a: 3 }); // { a: 3, b: 2, c:1, d: 4 }
sum({ type: "string", join: " , " /* join is optional */ }, "Hello", "Andy", "Js" ); // "Hello , Andy , Js"
sum({ type: "array" }, 1, 2, 3, {x: 3}, [4]); // [1, 2, 3, {x: 3}, [4]]

print("I can print anything" + "including variables: " + list.size);
print("you can also print", " ", " \n by comma also other data types ", 4,true)

process.stdout.write("4");

print ( Amath["∑"]( {type: "integer"}, 1,2,3,4,5) ) // 15
print ( Amath["∑"]({ type: "object" }, { c: 1, d: 4 }, { b: 2 }, { a: 3 })); // { a: 3, b: 2, c:1, d: 4 } )
print ( Amath["π"]); // 3.14159.....
print ( Amath["!n"](5) ); // 120 // factorial of 5
print ( Amath["√"](16) ); // 4
print ( Amath["²"](5) ); // 25 // square of 5

print(π);
print(get_decimal(π, 2))

run(range(0,5,1), function(x){print(`I will be printed 5 times, where i is : ${x}`)})

