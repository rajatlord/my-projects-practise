# json in python 

import json 
person = {
    "age": 30,
"city": "New York",
"hasChildren": False,
"name": "John",
"titles": [
     "engineer",
     "programmer"
 ]
}

personJSON = json.dumps(person , indent=4 ,sort_keys=True )

#here we leran how make data in json using python 
#leran file handing in python 
# uncomment when u read it 
# with open ('person.json' , 'w') as file :
    # json.dump(person , file , indent=4)
with open ('person.json' , 'r') as file :
    person = json.load(file)
    print (person)  

    # print (personJSON)  




#lesson about json 
    
# import json
# json_string = '{"name": "John", "age": 30, "city": "New York"}'
# data = json.loads(json_string)
# print(data)  # Output: {'name': 'John', 'age': 30, 'city': 'New York'}



# ANSI color codes
class colors:
    RESET = '\033[0m'
    RED = '\033[31m'
    GREEN = '\033[32m'
    BLUE = '\033[34m'
    PINK = '\033[95m'

# # Example usage
# print("This is normal text.")
# print(colors.RED + "This is red text." + colors.RESET)
# print("This is normal text again.")
# print(colors.GREEN + "This is green text." + colors.RESET)


print(colors.PINK + "here we learn about the json thing now after this we will move to the encoding and decoding" + colors.RESET)

class User:
     def __init__(self, name, age):
         self.name = name
         self.age = age
         
user = User('Max', 27)

def encode_user(o):
     if isinstance(o, User):
         return {'name': o.name, 'age': o.age, o.__class__.__name__: True}
     else:
         raise TypeError('object of type user is not json serializable ')
     

userJSON = json. dumps(user , default=encode_user)
print(userJSON)
