<authoi?>

work myFunc (x) -> (
    bhai bol x*x
    bhai bol "Hello, World!"
    bhai bol "This is a custom programming language."
    bhai bol "You can define functions, conditions, and more!"    
    work greet(name) -> (
        bhai bol "Hello, " + name + "!"
    )
    greet("Alice")
    greet("Bob") 
    agar({condition: true, thenreturn: (
        bhai bol "Condition is true!"
    ), return: (
        bhai bol "Condition is false!"
    )})
)
myFunc(4)
const y = 3
bhai agar y < 5-> (
    bhai bol y
    bhai bol "is smaller than " +  5
)

print("yahoo")

if (y > 2) {
    print("well")
}

const list = new List([3,4])

list.print() // [3,4]
list.add(4) // it will push 4
list.add(6) // it will push 6
list.remove(3) // it filter out 3
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

std:write >> "that line will be written by stdout of process of js" >> std:end

work simple_func (x=5) -> (
    bhai bol "function called"
    //simple console log
    std:write >> "stdout process called" >> std:end 
    // simple process.stdout.write

    // return x+1  //bad way
    authoi:returner >> x+1 >> :end // Better way
)

simple_func()

std:write >> "\n" + simple_func() >> std:end 

std:write >> "\nFirst Two π Places" + get_decimal(π, 2) + "\n" >> std:end 
bhai bol π


print ( Amath["∑"]( {type: "integer"}, 1,2,3,4,5) ) // 15
print ( Amath["∑"]({ type: "object" }, { c: 1, d: 4 }, { b: 2 }, { a: 3 })); // { a: 3, b: 2, c:1, d: 4 } )
print ( Amath["π"]); // 3.14159.....
print ( Amath["!n"](5) ); // 120 // factorial of 5
print ( Amath["√"](16) ); // 4
print ( Amath["²"](5) ); // 25 // square of 5


int z = 5;
print(z.value)
print(z.type)