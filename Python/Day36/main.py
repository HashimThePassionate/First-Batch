# Comparison Operators
# a = 10
# b = 20
# c = 30
# d = -1
# res1 = not(a > b and d < c)
# res2 = c == d or d < a
# print(res1)
# print(res2)
# Membership Operator
# string  = "pakistan"
# if string.capitalize() in "Pakistan":
#     print("String Pakistan is Present!Boom")
#     print(string.upper())
# else:
#     print("Invalid!")

# Input() Method
# username = input("Enter Your Name")
# print("Username is : " + username)
# print(type(username))
# age = int(input("Enter Your age:"))
# print(f"Your Age is: {age}")
# print(type(age))

# Escape Characters
# txt = "We are the \n\n\nso-called \t\t\t\'Vikings\' from the north."
# print(txt)

# if statemet
# no = int(input("Enter a number :"))
# if no%2 == 0:
#     print(f'Even no is {no}')
# else:
#     print(f'Odd no is {no}')

# elif Statements
# no = int(input("Enter a number :"))
# if no>= 90 and no<=100:
#     print("A+ Grade!")
# elif no>= 80 and no <90:
#     print("A Grade!") 
# elif no>= 70 and no <80:
#     print("B Grade!")
# elif no>= 60 and no <70:
#     print("C Grade!")
# elif no>= 50 and no <60:
#     print("D Grade!")
# elif no>= 0 and no <50:
#     print("Fail!")
# else:
#     print("Invalid")    

# Match Statements
status = 200
match status:
        case 400:
            print("Bad request")
        case 404:
            print("Not found")
        case 418:
            print("I'm a teapot")
        case _:
            print("Something's wrong with the internet")

# range function
print(range(15))    
print(list(range(15)))    
print(list(range(4, 9)))    
print(list(range(5, 25, 4)))