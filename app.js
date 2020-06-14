// 1 Write a script to greet your website visitor using JS alert box.
alert("Hello Using JS alert");
// 2 Write a script to display following message on your web
alert("Error! Please enter a valid password");
// 3. Write a script to display following message on your webpage: (Hint: Use line break)
alert("Welcome to JS land\nHappy Coding");
// 4. Write a script to display following messages in sequence:
alert("Welcome to JS Land..");
alert("Happy Coding!");
// Generate the following message through browser’ s developer console:
console.log("Hello! I can run JS through my web browser 's console");




// chapter no2! varaible for strings
// 1. Declare a variable called username.
var username;
// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = 'Saira Saleem'

// 3. Write script to
// a) Declare a JS variable, titled message.
var message;

// b) Assign“ Hello World” to variable message
message = 'Hello World';
// c) Display the message in alert box.
alert(message);

var name = 'Jhone Doe';
alert(name);
var age = '15 years old';
alert(age);
var course = 'Certified Mobile Application Development';
alert(course);
// 5. Write a script to display the following alert using one JS variable:
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");
// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g.example @example.com).
// Show the blow mentioned message in an alert box.(Hint: use string concatenation).
var email = 'hafsasaleem063@gmail.com';
alert("My email address is " + email);
// 7  Declare a variable called book & give it the value“ A smarter way to learn JavaScript”.Display the following message in an alert box:
var book = 'A smarter way to learn JavaSript';
alert("I am trying to learn from the book  " + book);
// 8. Write a script to display this in browser through JS
document.write("yah!I can write HTML content through JavaSript");
// 9. Store following string in a variable and show in alert and browser through JS
alert('   ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬')





// chapter no3 variable for number
// 1. Declare a variable called age & assign to it your age.Show your age in an alert box.
var age = '20';
alert("I am " + age + " years old.");
//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page.Show his / her number of visits on your web page.For example: “You have visited this site N times”.
var track = '14';
alert("you have visited this site " + track + " times");
// 3. Declare a variable called birthYear & assign to it your birth year.Show the following message in your browser:
var birthYear = '2000';
document.write("My birth year is " + birthYear + "<br>Data type of my declared variable is number.");
// 4. A visitor visits an online clothing store www.xyzClothing.com.Write a script to store in variables the following information: a.Visitor’ s name b.Product title c.Quantity i.e.how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T - shirt(s) on XYZ Clothing store”.
var visitorname = 'Jhone Doe';
var producttitle = 'T-sirts';
var quantity = 5;
document.write(visitorname + " odrered " + quantity + " " + producttitle + " on XYZ Clothing store.")
    // chapter no 4legal and illegal1.
    // Declare 3 variables in one statement.
var a, b, c;
// 2. Declare 5 legal & 5 illegal variable names.
// legal varibles
var userName;
var ruppes$;
var book_name;
var variable1;
var profile;

// illegal varibles
// var 2 num;
// var my name;
// var @mywork;
// var 'user';
// var 3456;



// 3. Display this in your browser

document.write("")
document.write("b) Variable names can only contain  letters, numbers, underscore and dolloer sign.<br>")
document.write("c) Variables must begin with a Alphabate, underscore or doller sign.<br>")
document.write("d) Variable names are case sensitive <br>")
document.write("e) Variable names should not be JS  keywords <br>")
    // chapter no5 math expression
    // 1. Write a program that take two numbers & add them in a new variable.Show the result in your browser.
var a = 3;
var b = 5;
var c = ((+a) + (+b))
document.write("sum of " + a + " and " + b + " is " + c);
// 2. Repeat task1 for subtraction, multiplication, division & modulus.
// subtraction
var a = 5;
var b = 3;
var c = ((+a) - (+b))
    // document.write("Subtraction of " + a + " and " + b + " is " + c + "<br>");
    //  multiplication
var a = 3;
var b = 5;
var c = ((+a) * (+b))
    // document.write("Multiplication of " + a + " and " + b + " is " + c + "<br>");
    //  division and modulus
var a = 17;
var b = 5;
var c = ((+a) / (+b))
var d = ((+a) % (+b))
document.write("Division  of " + a + " and " + b + " is " + c + "<br>");
document.write("Modulus of " + a + " and " + b + " is " + d + "<br>");
// 3. Do the following using JS Mathematic Expressions 
// a.Declare a variable.
var number;
// b.Show the value of variable in your browser like“ Value after variable declaration is: ? ? ”.
document.write("Value after variable declaration is " + number + "<br>");
// c.Initialize the variable with some number
number = 5;
// .d.Show the value of variable in your browser like“ Initial value : 5”.
document.write("initial value is: " + number + "<br>");
// e.Increment the variable.
++number;
// f.Show the value of variable in your browser like“ Value after increment is : 6”.
document.write("value after increment is: " + number + "<br>");
// g.Add 7 to the variable.
number = ((+number) + 7);
// h.Show the value of variable in your browser like“ Value after addition is: 13”.
document.write("value after addition is: " + number + "<br>");
// i.Decrement the variable.
--number;
// j.Show the value of variable in your browser like“ Value after decrement is: 12”.
document.write("value after decrement is: " + number + "<br>");
// k.Show the remainder after dividing the variable’ s value by 3.
document.write("value after division is: " + (+number) / 3 + "<br>");
// l. Outut : “The remainderis : 0”.
document.write("remainder is: " + (+number) % 3 + "<br>");
// 4. Cost of one movie ticket is 600 PKR.
// Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
var ticket = 600;
ticket = (+ticket) * 5;
document.write("Total cost to buy 5 tickets to a movie is " + ticket + " PKR");
// 5. Write a script to display multiplication table of any number in your browser.
document.write("table of 7<br>");
for (var i = 1; i <= 10; i++) {
    document.write("7" + "*" + i + "=" + (+7 * i) + "<br>");
}
// 6. The Temperature Converter: It’ s hot out!Let’ s make a converter based on the steps here.
// a.Store a Celsius temperature into a variable.
var celsius = 25
    // b.Convert it to Fahrenheit & output“ NNoC is NNoF”
var farenhite = ((celsius * 9 / 5) + (+32))
document.write(celsius + "°C is " + farenhite + "°F <br>")
    // c.Now store a Fahrenheit temperature into a variable.
var faren = 70
    // d.Convert it to Celsius & output“ NNoF is NNoC”.
var celcius = ((faren - 32) * 5 / 9)
document.write(faren + "°F is " + celcius + "°C")
    // 7. Write a program to implement checkout process of a shopping cart system
    // for an e - commerce website.Store the following in variables
    // Compute the total cost & show the receipt in your browser.
    // a.Price of item 1
var price1 = 650
document.write("Price of item 1 is: " + price1 + "<br>");
// b.Price of item 2
var price2 = 100
document.write("Price of item 2 is: " + price2 + "<br>");
//  c.Ordered quantity of item 1
var quantity1 = 3;
document.write("Quantity of item 1 is:    " + quantity1 + "<br>");
// d.Ordered Quantity of item 2
var quantity2 = 7;
document.write("Quantity of item 2 is:   " + quantity2 + "<br>");
//  e.Shipping charges
var shipping = 100;
document.write("Shipping charges is: " + shipping + "<br>");
document.write("total cost of your order is " + ((price1 * 3) + (price2 * 7) + (100)) + "<br>")
    // 8. Store total marks & marks obtained by a student in 2 variables.Compute the percentage & show the result in your browser.
var totalmarks = 980;
document.write("total marks:" + totalmarks + "<br>");
var marksobtained = 804;
document.write("marks obtained:" + marksobtained + "<br>");
var percentage = (marksobtained * 100) / totalmarks;
document.write("percentage: " + percentage + "%<br>");
// Assume we have 10 US dollars & 25 Saudi Riyals.Write a script to convert the total currency to Pakistani Rupees.Perform all calculations in a single expression.(Exchange rates: 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
var USdollars = 10;
var saudiRiyal = 25;
USdollars = USdollars * 104.80;
saudiRiyal = saudiRiyal * 28;
document.write("Total currency in PKR: " + (USdollars + saudiRiyal) + "<br>");
// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
var a = 15
    // a.Add 5
a = a + 5;
// b.Multiply by 10
a = a * 10;
//  c. Divide the result by 2.
a = a / 2;
document.write("The answer of arithmathic operation is:  " + a + "<br>");

// 12. The Geometrizer: Calculate properties of a circle.
// a.Store a radius into a variable.
var r = 20;
document.write("Radius of a circle is:  " + r + "<br>");
// b.Calculate the circumference based on the radius, and output“ The circumference is NN”.(Hint: Circumference of a circle = 2 π r, π = 3.142)
var circum = 2 * 3.14 * r;
document.write("The circumference is: " + circum + "<br>");
// Calculate the area based on the radius, and output“
// The area is NN”.(Hint: Area of a circle = π r2, π = 3.142)
var area = 3.14 * r * r;
document.write("The area is: " + area + "<br>");

// chapter no6 - 9
// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var a = 10;
document.write("Result <br> The value of a is:   " + a + "<br><br><br>");
++a;
document.write("The value of ++a is:   " + a + "<br>Now the value of a is " + a + "<br><br><br>");
document.write(" The value of a++ is:   " + a + "<br>");
a++;
document.write(" Now value of a is:   " + a + "<br><br><br>");
--a;
document.write(" the value of --a is:   " + a + "<br>");

document.write(" Now value of a is:   " + a + "<br><br><br>");
document.write(" The value of a-- is:   " + a + "<br>");
a--;
document.write(" Now value of a-- is:   " + a + "<br><br><br>");

// 3. Write a program that takes input a name from user & greet the user.
var a = prompt("Enter your Name ");
alert("Welcome " + a);
// 4. Write a program to take input a number from user & display it’ s multiplication table on your browser.If user does not enter a new number, multiplication table of 5 should be displayed by
//      default.
var input = prompt("ENter number")
if (input == "") {
    document.write(" table of 5 <br>")
    for (var t = 1; t <= 10; t++) {
        document.write("5 " + " * " + t + " = " + 5 * t + "<br>");
    }
} else {
    for (var i = 1; i <= 10; i++) {
        document.write(input + " * " + i + " = " + input * i + "<br>");
    }
}
// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks
// for each subject is 100, store it in another variable.
// c) Take obtained marks
// for first subject from user and stored it in different variable.
// d) Take obtained marks
// for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

document.write("<table>" +
    "<th> " + " Subject " + " </th>" +
    "<th> " + " Total Marks " + " </th>" +
    "<th> " + " Obtained Marks " + " </th>" +
    "<th> " + " Percentage" + " </th>" +
    "<tr>" +
    "<td>" + " English " + " </td>" +
    "<td>" + " 100 " + " </td>" +
    "<td>" + " 54 " + " </td>" +
    "<td>" + " 54% " + " </td>" +
    "</tr > " +
    "<tr>" +
    "<td>" + " Math " + " </td>" +
    "<td>" + " 100 " + " </td>" +
    "<td>" + " 54 " + " </td>" +
    "<td>" + " 54% " + " </td>" +
    "</tr > " +
    "<tr>" +
    "<td>" + " Urdu " + " </td>" +
    "<td>" + " 100 " + " </td>" +
    "<td>" + " 48 " + " </td>" +
    "<td>" + " 48% " + " </td>" +
    "</tr > " +
    "<th> " + "  " + " </th>" +
    "<th> " + " 300 " + " </th>" +
    "<th> " + " 156 " + " </th>" +
    "<th> " + " 52%" + " </th>" +
    " </table>")

// chapter no9 -11!1.
// Write a program to take“ city” name as input from user.  If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
var city = prompt("Enter your City")
if (city === "karachi") {
    alert("Welcome to city of lights!");
} else {
    alert("You enter invalid city ");
}
// Write a program to take“ gender” as input from user.If the user is male, give the message: Good Morning Sir.If the user is female, give the message: Good Morning Ma’ am.
var gender = prompt("Enter your gender")
if (gender === "male") {
    alert("Good Morning Sir ");
}
if (gender === "female") {
    alert("Good Morning madam ");
}
// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
var color = prompt("Enter the color of road traffic signal")
if (color === "red") {
    alert("Must Stop ");
}
if (color === "yellow") {
    alert("Ready to move ");
}
if (color === "green") {
    alert("Move now ");
}
// 4. Write a program to take input remaining fuel in car( in litres) from user.If the current fuel is less than 0.25 litres, show the message“ Please refill the fuel in your car”
var fuel = prompt("Enter the remaining fuel in car ")
if (fuel <= 0.25) {
    alert("Please refill the fuel in your car");
}
// 5. Run this script, & check whether alert message would be displayed or not.Record the outputs.
// a.
var a = 4;
if (++a === 5) { alert("given condition for variable a is true"); }
// b.
var b = 82;
if (b++ === 83) { alert("given condition for variable b is true"); }
// c.
var c = 12;
if (c++ === 13) { alert("condition 1 is true"); }
if (c === 13) { alert("condition 2 is true"); }
if (++c < 14) { alert("condition 3 is true"); }
if (c === 14) { alert("condition 4 is true"); }
// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) { alert("The cost equals"); }
// e.
if (true) { alert("True"); }
if (false) { alert("False"); }

// f.
if ("car" < "cat") { alert("car is smaller than cat"); }

// 6. Write a program to take input the marks obtained in three subjects & total marks.Compute & show the resulting percentage on your page.Take percentage & compute grade as per following table:

var english_marks = prompt("Enter the English marks ")
var urdu_marks = prompt("Enter the Urdu marks ")
var math_marks = prompt("Enter the Math marks ")
var total_marks = prompt("Enter the total marks ")
var marks_obtained = ((+english_marks) + (+urdu_marks) + (+math_marks))
var percentage = (((+english_marks) + (+urdu_marks) + (+math_marks)) * 100) / (+total_marks);
document.write("Total mark : " + total_marks + "<br>") document.write("Marks obtained  : " + marks_obtained + "<br>") document.write("Percentage : " + percentage + "<br>") if (percentage >= 80) {
        document.write("Grade: A-one <br>")
        document.write("Remarks: Excellent")
    } else
if (percentage >= 70) {
    document.write("Grade: A <br>")
    document.write("Remarks: Good")
} else if (percentage >= 60) {
    document.write("Grade: B <br>")
    document.write("Remarks: You need to improve")
} else if (percentage < 60) {
    document.write("Grade: Fail <br>")
    document.write("Remarks: Sorry")
} else {
    alert("you enter inncorrect ")
}
// 7. Guess game:
//     Store a secret number(ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
// a.If user guesses the same number, show“ Bingo!Correct answer”.
// b.If the guessed number + 1 is the secret number, show“ Close enough to the correct answer”.
var a = 4; +
prompt("guess the number ")

if (a === 5) {
    alert("Bingo!Correct answer")
}
if (a = 6) {
    alert("Close enough to the correct answer")
} else {
    alert("invalid")
}
// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user
// if the number is divisible by 3.
var number = prompt("Enter the number")
if (number % 3 === 0) {
    alert(number + "\ is divisible by 3")
} else {
    alert(number + " is not divisible by 3")
}

// 9. Write a program that checks whether the given input is an even number or an odd number.
var even = prompt("Enter the number")
if (even % 2 === 0) {
    alert("you enter even number")
} else {
    alert("you enter odd number")
}

// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a.T > 40 then“ It is too hot outside.”b.T > 30 then“ The Weather today is Normal.”
// c.T > 20 then“ Today’ s Weather is cool.”
// d.T > 10 then“ OMG!Today’ s weather is so Cool.”
var temp = +prompt("Enter the temperature ");
if (temp > 40) {
    alert("It is too hot outside.")
} else if (temp > 20) {
    alert("Today’ s Weather is cool.")
} else if (temp > 10) {
    alert("OMG!Today’ s weather is so Cool")
} else { alert("invalid") }
// 11. Write a program to create a calculator
// for +, -, * , / & % using if statements. Take the following input: 
// a.First number
// b.Second number
// c.Operation(+, -, * , /, % ) Compute & show the calculated result to user.


var firstnumber = prompt("Enter the first number")
var secondnumber = prompt("Enter the second number")
var operator = prompt("Enter the operator")
if (operator === "+") {
    alert((+firstnumber) + (+secondnumber))
} else if (operator === "-") {
    alert(firstnumber - secondnumber)
} else if (operator === "*") {
    alert(firstnumber * secondnumber)
} else if (operator === "/") {
    alert(firstnumber / secondnumber)
} else if (operator === "%") {
    alert(firstnumber % secondnumber)
    alert("invalid operation")
} else {
    alert("invalid operation")
}

// chapter no12, 13
// 1. Write a program that takes a character(number or string) in a variable & checks whether the given input is a number, uppercase letter or lower
// case letter.(Hint: ASCII codes: -A = 65, Z = 90, a = 97, z = 122).
var chr = prompt("enter any character or number ")
if ((chr >= ' A ') && (chr <= 'Z ')) {
    alert("The character is a upper case letter ")
} else if ((chr >= ' a') && (chr <= 'z ')) {
    alert("The character is a lower case letter ")
} else {
    alert("The character is a number ")
}

// 2. Write a JavaScript program that accept two integers and display the larger.Also show
// if the two integers are equal.
var integ1 = +prompt("Enter first integer")
var integ2 = +prompt("Enter seconde integer")
if ((+integ1) > (+integ2)) {
    alert(integ1 + "is the larger integer")
} else if ((+integ2) > (+integ1)) {
    alert(integ2 + "is the larger integer")
} else {
    alert("Both integers  are equal")
}



// 3. Write a program that takes input a number 
// from user & state whether the number is positive, negative or zero.
var num3 = +prompt("Enter a number")
if (num3 > 0) {
    alert("the number is positive")
} else if (num3 < 0) {
    alert("the number is negative")
} else {
    alert("the number is zero")
}

// 4. Write a program that takes a character (i.e.string of length 1)
// and returns true if it is a vowel, false otherwise
var str = prompt("Enter a Character ")
if (str.length === 1) {
    if ((str === "A") || (str === "a") || (str === "E") || (str === "e") || (str === "I") || (str === "i") || (str === "O") || (str === "o") || (str === "U") || (str === "u")) {
        alert(str + " is a vowel")
    } else {
        alert(str + " is  not a vowel")
    }
} else {
    alert("enter string of lenght 1")
}


// 5. Write a program that
// a.Store correct password in a JS variable.

// b.Asks user to enter his / her password
// c.Validate the two passwords:
//     i.Check if user has entered password.If not, then give message“ Please enter your password” ii.Check
// if both passwords are same.If they are same, show message“ Correct!The password 
// you entered matches the original password”.Show“ Incorrect password” otherwise.se.
var password = "fatimasaleem123"
var user_password = prompt("Enter Correct Passord")
if (user_password === "") {
    alert("Please enter your password")


    if (password === user_password) {
        alert("Correct! password")
    }
} else {
    alert("Incorrect password")
}
// 6. This if else statement does not work.Try to fix it: var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     else greeting = "Good evening";
// }
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
// chapter14 - 16
// 1. Declare an empty array using JS literal notation to store student names in future.a
// student_names
var myArray = ["Jack", "Sawyer", "John", "Desmond"]
    // 3. Declare and initialize a strings array.
var string_array = ["Fatima", "saira", "Maira", "Hafsa"]
    // 4. Declare and initialize a numbers array.
var number_array = [1, 4, 56, 86]
    // 5. Declare and initialize a boolean array.
var boolean_array = [true, false]

// 6. Declare and initialize a mixed array.
var mixed_array = [1, "english", 4, "urdu"]
    // 7. Declare and Initialize an array and store available education qualifications
    // in Pakistan(e.g.SSC, HSC, BCS, BS, BCOM, MS, M.Phil., PhD).

document.write("<h3>Qualifications:</h3>") var qualifications = ["SSC", "HSC", "BCS ", "BS ", "BCOM ", "MS ", "M.Phil", "PhD "]

for (var x = 0; x < qualifications.length; x++) {

    document.write(x + ")" + qualifications[x] + " <br> ")
}

// 8. Write a program to store 3 student names in an array
// Take another array to store score of these three students.Assume that total marks are 500 for each student,
var students = ["Micheal", "jhon", "Tony"]
var score = [320, 230, 480]
for (var y = 0; y = students.length; y++) {
    for (var z = 0; z = score.length; z++) {

        document.write("score of " + students[y] + " is " + score[z] + ".Percentage: " + score[z] * 100 / 500 + "%<br>")
    }
}

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’ s sort method.
var student_scores = [320, 230, 480, 120];
document.write("student scores are:" + student_scores + "<br>") student_scores.sort();
document.write(" ordered score of student  is: " + student_scores + "<br>");
// 11. Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities array.
var city_name = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("city names are: <br> " + city_name + "<br><br>") var find = city_name.slice(2, 4);
document.write("Slelected cities list:<br>" + find);
// 12. Write a program to create a single string from the below mentioned array:
var arr = ["This ", " is ", " my ", " cat "]
document.write("Array:<br>" + arr + "<br>");
for (var s = 0; s < arr.length; s++) {
    document.write(arr[s])

}
// 13. Create a new array.Store values one by one in such a way that you can access the values in the order in which they were stored.(FIFO - First In First Out).var arr = ["This ", " is ", " my ", " cat "]
var devices = ["Keyboard ", " Mouse ", " Printer ", " Monitor "]
document.write("Devices:<br>" + devices + "<br>");
for (var h = 0; h < devices.length; h++) {
    document.write("Out<br>" + devices[h] + "<br>")

}
// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)
var devices = ["Keyboard ", " Mouse ", " Printer ", " Monitor "]
document.write("Devices:<br>" + devices + "<br>");
for (var d = 3; d < devices.length; d--) {
    document.write("Out<br>" + devices[d] + "<br>")

}
// chapter no 17-20
// 3. Write a program to print numeric counting from 1 to 10.
for (var counting = 0; counting <= 10; counting++) {
    document.write(counting + "<br>");
}
// 4. Write a program to print multiplication table of any number using for loop.Table number & length should be taken as an input from user.
var numberoftable = prompt("Enter the number of table")
document.write("Enter the number of table" + numberoftable + "<br>") var lenghtoftable = prompt("Enter the lenght of rtable<br>")
document.write("Enter the leght of table:" + lenghtoftable + "<br> ") for (q = 1; q <= lenghtoftable; q++) {
    document.write(numberoftable + "*" + q + "=" + numberoftable * q)
}