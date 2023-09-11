a = 20
n = 300
id(n)
print(n)
# Variables in Python
#Example
m = n
print("Value of m ",m)
print("id of m ",id(m))
print("Value of n ",n)
print("id of n ",id(n))

m=400
print("Value of m ",m)
print("id of m ",id(m))
print("Value of n ",n)
print("id of n ",id(n))

n = "Hello"
print("Value of m ",m)
print("id of m ",id(m))
print("Value of n ",n)
print("id of n ",id(n))

# a = 100000
a = 10_0000
print(a)
a = 20
print(id(a))
a = 20
print(id(a))

#In interactive mode, the last printed expression is assigned to the variable _.
# tax = 12.5 / 100
# price = 100.50
# price * tax #this is assigned to '_' and we use it in the next expression
# price + _ #We reference '_' but this expression is now assigned to '_'
# round(_)
# This is simple line comment
name = "Hashim"
'''
This is Multi 
Line 
Comment 
treated as a string
'''
def display(a,b):
    """ This Funcion Simple add two values and return their"""
    return a+b

print(display(10,20))
print(display.__doc__)


#boolean Values
a = True
b = False
print(a)
print(b)


# Types in python
a:str = "Hashim"
print(a)
a = 2
print(a)
a = 3
b = 2
print(b ** a)
print(3 ** 3)
a = 10 
b = 3
print(a / b)
print(a // b)


# print function
x = 200
y = 700
print("The value of X is ",x)
print("The value of X is ",y)
firstName = "Muhammad"
lastname = "Hashim"
age = 20
print("My name is :"+firstName+" "+lastname)
#Formatted String
print(f'My name is {firstName} {lastname} ')
# String format Method
print("My first Name is :{}  and My Last Name {} is !".format(firstName,lastname))
print("My first Name is :{1}  and My Last Name {0} is !".format(firstName,lastname))
print("My First Name is %s and Last Name is %s and my age is %d!"%(firstName,lastname,age))