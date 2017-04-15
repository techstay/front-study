# single line comments

###
multi line
comments
###

printTitle = (title)-> console.log("---------#{title}----------")
print = (x)-> console.log(x)

### ===================  ###
printTitle("functions")
square = (x)-> x * x
print(square(5))

### ===================  ###
printTitle("function with default param")
sayHello = (name = "Yitian")-> print(name)

sayHello()
sayHello("zhang3")

### ===================  ###
printTitle("strings")

singleLineString = "Some ..."

multiLineString = """
Some more
String ...
"""

print(singleLineString)
print(multiLineString)

name = "Yitian"
sentence = "Hello #{name}"

print(name)
print(sentence)

### ===================  ###
printTitle("arrays")

someIntegers = [1, 2, 3, 4, 5]
print(someIntegers)

### ===================  ###
printTitle("array comprehensions")

squareIntegers = [i * i for i in someIntegers]
print(squareIntegers)

### ===================  ###
printTitle("objects")

person =
  name: "Yitian"
  age: 24
  country: "China"

print(person)

### ===================  ###
printTitle("if-else")

condition = true
result = 100 if condition

if(condition)
  result = "Condition is True"
else
  result = "Condition is False"


name = if condition then "True" else "False"
print(name)

### ===================  ###
printTitle("for loops")


count = (numbers ...)->
  for i in numbers
    print(i)

count(1, 2, 3)

### ===================  ###
printTitle("while loops")

i = 0
while i <= 5
  i++

print(i)

### ===================  ###
printTitle("ranges")

countSingle = (x)-> print(x)

countSingle(n) for n in [0..3]

countSingle(n) for n in [0..5] by 2

person =
  name: 'yitian'
  age: 34
  gender: 'man'

for key ,value of person
  print("key is #{key},value is #{value}")


### ===================  ###
printTitle("array slicing")

numbers = [1, 2, 3, 45, 6, 7, 8, 9]

front = numbers[1..3]
end = numbers[-3..-1]

print(front)
print(end)


### ===================  ###
printTitle("destruction")

div = (a, b)->
  quotient = a//b
  remain = a % b
  [quotient, remain]

[q, r]=div(5, 3)
print("quotient=#{q},remain=#{r}")





