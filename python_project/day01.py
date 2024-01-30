print("Hello it's Rajat")
# TOday is 30/01/2024 here i start lerning python but i am not perfectly master the javascript 
Name = "Rajat"
Age = 19
print(Name)
print(Age)
# They are not const so can be change 
Name = "L"
Age = 22 
print(Name)
print(Age)

#let add two number
first = input("Enter number for first")
second = input("Enter number for second")
#here we have to convert them in int because they will take number as str
add = ( int(first) + int(second) )

print( "Here is our results " + str(add))
#here also a trick if we do type conversion in anoter line then it will be uneffected for adding 
#other conversions
# float()
# str()
# bool()
print(Name.upper())
print(Name.lower())
Name = "Rajat"
print(Name.find("R"))
print(Name.replace("Rajat" , "LIGHT"))
print('L' in Name)
print('R' in Name)

# Arithimatic opereations
#print (5*2) for squring we can use this print(5**2)
#print (5-2)
#print (5+2)
#print (5%2)
#print (5/2) insted of when not want any decimals print(5//2)
# i = i + 2
# i -= 2
# i /= 2
# i += 2
# watch operator precedence chart
#Operators
#() Highest precedence
#**  right-left
#+X, X, X
#*, /, //,%
#+,-
#<<, >>
#&
#Is, is not, in, not in, <, <=, >, >=, ==, !=
#Not x
#And
#Or
#If else
#Lambda 
#=, +, -, *, /= Lowest Precedence right to left stop at 40