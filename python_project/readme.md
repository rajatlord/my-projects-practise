hey there this documention and shortcut to leran 


# <h1 style="color:pink;">def</h1>
is a keyword used to create functions in python 
<br>
def function_name(parameters):
    """docstring"""
    # function body
    # statements
    return expression
<br>
this is we can also do 
<br>
def speak(self):
    pass


class in python ......

start.....

class Person:
    name = "Harry"
    occupation = "Software Developer"
    networth = 10
    
    def info(self):
        print(f"{self.name} is a {self.occupation}")

# Create an instance of the Person class
a = Person()

# Modify attributes
a.name = "Shubham"
a.occupation = "Accountant"

# Call the info method to print the information
a.info()

end.....
The f"{...}" syntax is a formatted string literal in Python. It allows you to embed expressions inside curly braces {} within the string. When you prefix a string with f, you can directly insert Python expressions within {} to get their values formatted into the string.

# Here's why we use self:
Accessing Instance Variables: Inside class methods, you need to access instance variables (attributes) specific to that instance. Using self allows you to access these instance variables.

    Calling Other Methods: self is used to call other methods within the same class. This allows methods to interact with each other and access each other's data.

    Passing to Other Functions: If you need to pass the instance of the class to other functions or methods, you use self for that purpose.