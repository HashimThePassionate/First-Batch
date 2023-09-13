# For Loop
# Name = "Muhammad Hashim"
# for i in Name:
#     print(i)

# names = ["Hashim","Wahab","Azad Institute","Nazish"]
# print(type(names))
# print(names)
# # for j in Name:
# #     print(j)

# for i in range(len(names)):#5
#     print(i,names[i],len(names[i]),type(names[i]))


# for i in range(1,10):
#     print(i)
# print("-------------------------------------------------")
# for i in range(2,100,2):
#     print(i)
# print("-------------------------------------------------")
# for i in range(0,100,3):
#     print(i)


# for i in range(1,10):
#     print("*",end=' ')


#Nested Loop to print Paramid
# rows = int(input("Enter number of rows: "))
# for i in range(rows):#range(5) (0,4) =>5
#     for j in range(i+1): #(5+1) => 6 range(6) =>(0,5) =>2
#         print("* ", end="")
#     print("\n")

#While Loop
# n=5
# s=1
# summation=0
# while s<=n:
#     summation = summation + s**2
#     s+=1
# print("The sum of squares is", summation)


# num = 5        
# counter = 1      
# # we will use a while loop for iterating 10 times for the 
# # multiplication table        
# print("The Multiplication Table of: ", num)      
# while counter <= 10: # specifying the condition  
#     ans = num * counter      
#     print (num, 'x', counter, '=', ans)      
#     counter += 1 

# email = input("Enter your email address: ")
# while '@' not in email:
#     print("Invalid email address. Please try again.")
#     email = input("Enter your email address: ")

# #Continue Statement
# string = "string"
# for val in string:
#     if val == "i":
#         continue
#     print(val)


# #Break Statement
# print("-----------------------------------------------")
# string = "string"
# for val in string:
#     if val == "i":
#         break
#     print(val)



# sequence = {'p', 'a', 's', 's'}
# for val in sequence:
#     pass

# #Functions
# def demo_func(param:int):
#     """This is just a demo
#     function.
#     """
#     calc = param + 4
#     return calc

# print(demo_func(10))


#Function Passing Arguments
# def add(a:int, b:int):
#     return a+b

# print(add("Muhammad","Hashim"))

#Function Scope
# a = "True"
# def check():
#     print(type(a)," ",a)

# check()
# print(a)

#default arguments
# def function( num1 = 40, num2 = 40 ):  
#     print("num1 is: ", num1)  
#     print("num2 is: ", num2)  
    
# # Calling the function without argument  
# print( "Passing without argument" )  
# function()
# # Calling the function and passing only one argument  
# print( "Passing one argument" )  
# function(num2=10)  
# # Now giving two arguments to the function  
# print( "Passing two arguments" )  
# function(10,30)  


# def fun( num1, num2):  
#     print("num1 is: ", num1)  
#     print("num2 is: ", num2)  

# fun(10)

# def add(a :int, b: int):
#     """ 
#     This functions first sum and return their result

#     Parameters
#     a : (int) First Number
#     b : (int) Second Number

#     Return
#     This Function Return 'a' and 'b'
#     """
#     return a+b


"""
You are tasked with creating a number guessing game in Python. The game should follow these rules:
The computer generates a random number between 1 and 100 (inclusive) and the player's task is to guess that number.
The player has a maximum of 10 attempts to guess the correct number.
After each guess, the program should provide feedback to the player:
If the guess is correct, the program should display "Congratulations! You guessed the number."
If the guess is too high, the program should display "Too high! Try again." and decrement the number of remaining attempts.
If the guess is too low, the program should display "Too low! Try again." and decrement the number of remaining attempts.
If the player doesn't guess the number within 10 attempts, the program should display "You've run out of attempts. The correct number was {correct_number}."
You need to implement the guess_number_game() function that takes no arguments. This function should contain the game logic.

"""