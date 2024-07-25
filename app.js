var marks = 50
if (marks >50){
    console.log("true")
}else{
    console.log("false");
} 

var number = prompt("Enter your number")
if(number%2 === 0){
    console.log("even");
}
else{
    console.log("odd");
}

var num1 = "5";
var num2 = 5
console.log(+num1 + num2);

var marks = '50'
if(marks =50){
console.log('true');
}
else{
    console.log('false');
}

var number = 5
if(number%2 ===0){
console.log('even');
}
else{
    console.log('odd');
}

var x = "Vatican"
if (x === "Vatican") {
alert("Correct!");
}
if (x == "Vatican") {
alert("Wrong answer");
}

var number1 = 5;
var number2 = 8;
var number3 = 20;
//  leftside  ===> true     &&    rightside =====> ture
//           false                  ||   true
if ((number1 == 5 || number2 == 10) && number3 == 20) {
  console.log("true");
} else {
  console.log("false");
}

var rollNumber = 123;
var name = "abc";
var course = "html";
var timing = 2;
//      true                true                false           false
if (rollNumber == 123 && name == "abc" || course == "web" || timing == 3) {
  console.log("true");
} else {
  console.log("false");
}

var email = 'abc@gmail.com'
var userName = 'ab'
var password = 123

if((email == "abc@gmail.com"||userName == 'abc') && password == 123){
    console.log('true');
}else{
    console.log('false');
}

var html  = 60
var css = 75
var practicalHtml  =6
var practicalCss  = 5
if(html>70 && css > 70 && practicalHtml > 5 && practicalCss >5 ){
    console.log('pass');
}else if(html<70 && css < 70 && practicalHtml < 5  && practicalCss <5){

}

else{
    console.log('fail');
}

var number = 70;
if ( number > 80   ||  number < 100 ) {
  console.log("A+");
} else if(number < 80 || number > 60){
    console.log('A');
}else if(number<60 || number >40){
    console.log('b');
}
else {
  console.log("fail");
}

var food = prompt("enter your food", "Biryani pizza");
if (food == "biryani" || food == "pizza") {
  console.log("Available");
  var flov = prompt("enter your flov");
  if (flov == "chicken biryani" || flov === "beef biryani") {
    console.log("Available");
    var plate = prompt("enter");
  } else {
    document.write("Not Available ");
  }
} else {
  console.log("only Biryani pizza ");
}

var num1 = +prompt("enter number 1")
var num2 = +prompt("enter number 2")
var operation = prompt("enter operation to perform ");
if (operation == "+") {
    document.write(num1 + num2)


var food = prompt("Enter your food", "Biryani Pizza");
if(food == "biryani"){}

var numbers =[10,20,30,40,50]

numbers.pop() 
numbers.shift() 

console.log(numbers)

document.write(`${numbers} x 7 = ${numbers * 2}<br>`);


var num0$ = prompt("What is your score");
num0$ = parseInt(num0$);
if(num0$ >80){
    console.log("Grade A");
}else if(num0$ >70){
    console.log("Grade B");
}else if(num0$ >60){
    console.log("Grade C");
}else if(num0$ >50){
    console.log("Grade D");
}else{
    console.log("Failed");
}

var num1$ = prompt("what is a score");
num1$ = parseInt(num1$)
if(num1$ >=80){
    console.log("Grade A");
    if(num1$ >90){
    console.log("Reward $100");
    }else if(num1$ >85){
        console.log("Reward $50");
    }
    else{
        console.log("Reward $20");
    }
}else{
    console.log("Failed");
}

var num3$ = prompt("What is your score");
num3$ = parseInt(num3$);
if(num3$ >80 && num3$ <=100){
    console.log("Grade A");
}else if(num3$ >70 && num3$ <=80){
    console.log("Grade B");
}else if(num3$ >60 && num3$ <=70){
    console.log("Grade C");
}else if(num3$ >50 && num3$ <=60){
    console.log("Grade D");
}else{
    console.log("Failed");
}


var vowel =prompt("Enter your vowel");

if(vowel == "a" || vowel == "e" || vowel =="i" || vowel == "o" || vowel == "u" ){
    console.log("It's a vowel " + " ("+vowel+")");
}else{
    console.log("It's not a vowel " + " ("+vowel+")");
}

var age = 45
if(age){
    console.log("In if age = " + age);
}else{
    console.log("In else age = " + age);
}

var name1 = "Hello wOrld"
if(name1){
    console.log("In if age = " + name1);
}else{
    console.log("In else age = " + name1);
}

var start = +prompt("Enter start number")
var range = +prompt("Enter range number")
for(var i = start ; i <= range ; i+=10){
    document.write(i+" "+" I Love javascript"+"<br/>");
}

var integer =[]
for(var i=10 ; i<=20 ; i++){
    integer.push(i)
}
console.log("Orignal integer serise");
console.log(integer);

var integerSerise = integer.slice(5,8)
console.log("Extra range integer serise");

console.log(integerSerise);

var store = ["cat","Dog","pet","frog"]
var store_$ = store.slice(0,1)
console.log(store_$);
store.pop("cow");
console.log(store);

var x = 10;
var y = 25;

x += y
console.log(x);

var x = 10;
var y = 25;

x *= y
console.log(x);
document.write("<center>")
var number = +prompt("Enter number")
var rang = +prompt("Enter range")
for(var i=0; i<=rang ; i++){
    document.write("2 "+ " X "+ " = " + 2*i+ "<br/>")
}
document.write("</center>")

for(var i = 0 ; i < 10 ; i++){
    document.write(`${i} ==> i`)
    document.write(`<br>`)
    for(var j = 0; j< 5; j++){
        document.write(`${j} => j`)
        document.write(`<br>`)
    }

}
for(var i=0 ; i<=91 ;i = i+=11){
console.log(i);

}

var array = [10, 20, 30, 40, 50];

var index$ =prompt("Enter the index to change or add a value:");

if (index$ >= 0 && index$ < array.length) {
  
    var newValue = (prompt("Enter the new value:"));

    
    array[index] = newValue;
    console.log("Updated array:", array);
} else {
    console.log("Invalid index. Please enter an index within the range of the array.");
}

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
 var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
 for (var i = 0; i < firstNames.length; i++) {
for (var j = 0; j < lastNames.length; j++) {
fullNames.push(firstNames[i] + lastNames[j]);

 }
 }

for(var i= 2 ; i<5; i++){
    // console.log(i);
    for(var j = 1; j<=10; j++){
        // console.log(j);
        document.write()
    }
}


let numbers1 = [1, 2, 3, 4, 5];

// Accessing array elements
console.log(numbers1[0]); // 1

// Modifying array elements
numbers[1] = 10;
console.log(numbers); // [1, 10, 3, 4, 5]

// Adding elements to the array
numbers.push(6);
console.log(numbers); // [1, 10, 3, 4, 5, 6]


let myArry = [3,5,6,false , "string"]

console.log("Data type is "+(typeof myArry));

// object litraly

let marks ={
    Bilal: 77,
    Ahmed : 88,
    usman:93

}
console.log(typeof marks);

function findName() {
    
}
console.log(typeof findName);

let date = new Date();
console.log(typeof date);

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
     console.log(i);
 for (var j = 0; j < lastNames.length; j++) {
    //  if(firstNames[i][0] == lastNames[j][0]);
    //   fullNames.push(firstNames[i] + lastNames[j]);

 }
 }

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
 var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
// document.write(firstNames , lastNames);
for(var i = 0; i<firstNames.length; i++ ){
    
    for(var j = 0 ; j< lastNames.length; j++){
        
    }

for(var a = 0 ; a <= 100 ; a++){
    if(a%2 !== 0){
       document.write("Number is even " +a + "<br>");
  
    }
}

var sum = 0 ;
for(var a = 0 ; a <=5 ; a++){
    sum +=a
    
}
console.log("sum value " +sum);



}
document.write(i,j)

for(var a = 5; a >=1; a--){
    for(var b = 5 ; b>=1 ; b--)
    document.write(a)
}

document.write("<h3>Star Pattern</br></3>")
for(var a = 1;a <= 5; a++){
    for(var b = 1; b <= a ; b++){
        document.write(b + " ")
    }
    document.write("<br>")
}
document.write("<br>")
for(var a = 1;a <= 5; a++){
    for(var b = 1; b <= a ; b++){
        document.write(a + " ")
    }
    document.write("<br>")
}

document.write("<br>")
for(var a = 5;a >=1; a--){
    for(var b = 1; b <= a ; b++){
        document.write(a + " ")
    }
    document.write("<br>")
}

document.write("<br>")
for(var a = 5;a >=1; a--){
    for(var b = 1; b <= a ; b++){
        document.write(b + " ")
    }
    document.write("<br>")
}


console.log(0.1 + 0.2 === 0.3);

var arr = ['ali', 'usman','hassan','irfan','pasha']

var userFind = 'hassan'
var flag = true
for(var i = 0 ; i < arr.length ; i++){
    if(userFind === arr[i]){
        flag = false
        break;
    }
}if(flag == false){
    console.log('found');
}else{
    console.log('Not found');
}

var arr = ['ali', 'usman','hassan','irfan','pasha']

for(var i = 0 ; i < arr.length; i++){
   
    console.log(arr[i][0].toUpperCase()+arr[i].slice(1));
}

var arr = ['ali', 'usman','hassan','irfan','pasha']
var firstLetter = 'a'
for(var i = 0 ; i < arr.length; i++){
    if(firstLetter == [i]){ 
    console.log(arr[i][0].toUpperCase()+arr[i].slice(1));
}
}

var month = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam cum consequuntur quasi ex, exercitationem fuga dolore dicta praesentium error!Deleniti maiores quaerat excepturi dolore vel consequuntur laudantium quasodit nemo';
var text = ''
for(var i = 0 ; i < arr.length; i++){
    console.log(text.slice(i, i +5));
}

var text = 'my name is xyz'
// console.log(text.slice(0,0+2));
for(var i = 0; i < text.length; i++){
    console.log(text.slice(i,i+2));
}

var text = "video provides a powerfull way to help you prove"
var userReplace = prompt("Enter replace word");
var userAdd = prompt("Enter you new word")
for(var i = 0; i<text.length ; i++){
    if(text.slice(i,i+userReplace.length) == userReplace){
        console.log(text.slice(0,i) + userAdd + text.slice(i+userReplace.length));
    }
}

var str ="The quick to  jumps lazy dogs"

var findWord = "fox"
for(var i = 0; i < str.length ; i++){
    if(findWord === str.slice(i,i +3)){
        console.log("found");
    }else{
        console.log("not found");
    }
//    console.log(str.slice(i, i + 3));
}


let firstChar =  ["pakistan","lahor","islamabad"];
let firstindex1 = "pakistan"

let index = firstChar.indexOf("lahor")

let index02 = firstindex1.indexOf("k")
console.log(index);

console.log(index02);


var str ="The quick to pakistan jumps lazy pakistandogs"

let firstindex = "pakistan";
if(str.indexOf(firstindex1) != -1){
        console.log("found");
    }else{
        console.log("Not found");
    }

var str ="The quick brown to the jumps lazy dogs"

var replaceWord = "to"
var addWord = "fox"

var char =str.indexOf(replaceWord)
console.log(char);

// console.log(str.slice(0,char));

if(char != -1){
   console.log(

       str.slice(0,char) + addWord + str.slice(char + replaceWord.length)
    );
}



let str ="The quick brown to the jumps lazy dogs";

console.log("Index number of "+str.indexOf("to"));

var arry = ["html","javascript"]


let replace = arry.toString().replace("javascript", "Node.js");

console.log(replace);


var givenString = "Hello this is a practice string for javascript"

var index = givenString.replace("Hello","Node.js");


console.log(index);

var givenString = "Hello this is a practice string for javascript"

console.log(givenString.split(" "));

console.log(givenString[4]);

console.log(givenString.charAt(givenString.length-1));

var str = 'Lorem ipsum dolor sit amet consectetur sit adipisicing sit elit. Dolorum, neque!'
var num = str.indexOf("sit")
console.log(num);

var str = 'Lorem ipsum dolor sit amet consectetur sit adipisicing sit elit. Dolorum, neque!'

var findText = 's '
var flag = true
var count = 0
for(var i = 0; i < str.length; i++){
    if(str.slice(i,i+findText.length) === findText.length){
        console.log("found");
    flag =false
        ++count
    }
    else{
        console.log("Not found");
    }
}



var str = "Lorem ipsum dolor sit amet consectetur sit adipisicing sit elit. Dolorum, neque"

var num = str.indexOf("sit")
console.log(num);

var useInput = prompt("Enter a word...")
for(var i= useInput.length -1 ; i>= 0  ; i--){
    console.log(useInput[i]);
}

var useInput = "Lorem ipsum dolor sit amet consectetur sit adipisicing sit elit. Dolorum, neque"
var update = "sit";

for(var i= useInput.length -1 ; i>= 0  ; i--){
    update += useInput[i];

}if(useInput === update){
    console.log("It is a plaindrome word..");
}else{
    console.log("It is not plaindrome word..");
}



var firstName = "chemistry"

var num = firstName.slice(0,1)

var firstChar = firstName.charAt(0)

console.log(num);

var text = "The quick brown fox jumps lazy dogs"


for (var i = 0; i < text.length; i++) {
     if (text.charAt(i) === " ") {
             console.log("Exclamation point found!");
             break;
         }
            console.log("Exclamation Not point found!" + i + "\n")
        }
        if(flag){
            
                console.log("Exclamation point found!");
    
                 }else{
                        console.log("Exclamation Not point found!");
         }
    
    
    for(var a = 0; a <= 5 ; i++){
            if(i == 3){
                    console.log("hey: " + i + "\n");
                    break;
                }
                    console.log("Number: " + i + "\n");
            
            }
            
            
            var str ="The quick to fox jumps lazy dogs"
            
            var num = str.split(" ")
            var newArry = []
            for(var i = 0; i < num.length; i++){
                var word = num[i]
                newArry.push (word[0].toUpperCase() + word.slice(1));
               
            }

            console.log(newArry);

let string = "Hello, world!";
let reversedString = string.split("").reverse().join("");
console.log(reversedString);


let num1 = Math.random();

let num$ = Math.round(num1)
console.log(num$);

if(num1 === 0 || num$ === 1){

}
            

let name$ = prompt("Enter your guss number")
let num2 = Math.random()*100;

let num3 = Math.round(num2)


if(name$ == num3){
    console.log("you win");

}else if(name$ == num3){
    console.log("loss..");
}
else{
    console.log("loss..");
}
            
            
let user = Math.random()*255

let num = Math.round(user)

let rgb = "RGB:("

console.log( rgb + num +","+ num + "," + num + ");");


let userPrime = +prompt("Enter a Positive number");
let isPrime = true;

if (userPrime === 1) {
      console.log("1 is neither prime not composite number");
    } else if (userPrime > 1) {
          for (let i = 2; i < userPrime; i++) {
                if (userPrime % i === 0) {
                      isPrime = false;
                      break;
                    }
                  }
                  if (isPrime) {
                        console.log(`${userPrime} is a Prime Number`);
                      } else {
    console.log(`${userPrime} is not a Prime Number`);
  }
} else {
      console.log("The number is not a  prime number");
    }         
            
    
    for(var i = 0 ; i <= 2 ; i++){
        var a = prompt("Enter number")
        console.log(a);
    }        
    
            
    for(var i = 0 ; i <= 2 ; i++){
        var a = prompt("Enter number")
        console.log(a);
    }        
    

    var str = prompt("Enter your name")

    str = str.charAt(str.length -1)
  
    console.log(str);

    console.log("23");

var num = Math.random()*900

var num1 = Math.floor(num+100)

console.log(num1);

var date = new Date();
var date_$ =date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear()
// console.log(date_$);



// console.log(date.toString());
// console.log(date.toDateString());

var date = new Date();

var date_2 = "0"+date.getMonth()+"-"+date.getDate() +"-"+date.getFullYear().toString().slice(2);

console.log(date_2);


var date = new Date();

console.log("Month : " + date.getMonth());
console.log("Day : " + date.getDay());

console.log("Minutes : " + date.getMinutes());
console.log("Seconds : " + date.getSeconds());
console.log("MiliSecond : " + date.getMilliseconds());
var date = new Date("2015-3-25");
console.log(typeof date);
let ampm 
if(hour>= 12){
  ampm = "PM"
}else{
    hour
    ampm = "AM"
}

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var month = ["jan","Feb","March","Aprile","May","jun","july","Aug","Sept",'Oct','Novmber']

console.log(`${month[date.getMonth()]} ${date.getDate()} ${days[date.getDay()]}
${date.getFullYear()} ${date.getHours()} ${date.getMinutes()}`);


//  ******************** funtion start *********************

function greet(){
    var number = prompt("Enter number")
    if(number % 2 === 0){
        console.log("Even number");
    }
}


function greet(){
  var user = Math.random()*100
  var num = Math.round(user)
  console.log(num);


}

function game(){
    var user = Math.random()*100
    var num = Math.round(user)
    if(num === 2 || num === 3 || num ===8){
        console.log("Win");
    }else{
        console.log("loss")
    }
    
  
}
game()


function tellTime(){
    var now = new Date();
    var theHr = now.getHours();
    var theMain = now.getMinutes();
    console.log("Current time: " + theHr + ":" + theMain);
}tellTime()

function foo(a,b,c){
    console.log(a+b+c);
}foo(10,15)

function num2(){
    
    var merchTot = 200
    var orderTot;
     if (merchTot >= 100) {
         orderTot = merchTot;
         }
     else if (merchTot < 50.01) {
     orderTot = merchTot + 5;
     }
     else {
         orderTot = merchTot + 5 + (.03 * (merchTot - 50));
        }
        return merchTot
    }num2()
    
    for(var i = 0 ; i < 5; i++){
            if(i === 5){
                    break
                }
                console.log(i);
            }
            
            
            var findValue = prompt("Enter")
            var weeksDay = ["mon","tue", "wed", "thur", "fri",'sat'," sun"]
            
            for(var i = 0 ; i < weeksDay.length; i++){
                    if(findValue[i] ){
        console.log("true");
    }
}
let get = function (){
    
    }
    
    var revers = ""
    var num = plin.split(" ").reverse().join()
    console.log(num);
    if(num === plin){
            console.log("plindroom word");
        }else{
                console.log("not a plindroom word");
            }
            
                    var plin = "bilal";
            
            for(var i = plin.length -1; i >= 0; i--){
    
                    console.log(plin[i]);
}

if(plin === "civic"){
    console.log("plindroom word");
}else{
    console.log('not a plindrom word');
}
// start
var word = ["html","web dovelpment" , "css"]

var num = ""

for(var i = 0 ; i < word.length ;i++){
        if(word[i] > num){ 
                num = word[i]
            }
        }
        console.log("longest word" ,num);

// end

var word = [100,500 , 5000]

var num = 0

for(var i = 0 ; i < word.length ;i++){
        if(word[i] > num){ 
                num = word[i]
            }
        }
        console.log("longest word" ,num);

        
         
        function pass(){
            var num = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@$%#&"
            let passwordlength = 12
            let password = ''
            for(var i = 0 ; i < passwordlength ; i++ ){
               var randomindex = Math.floor(Math.random()*num.length)
               password += num.charAt(randomindex)
            }
            return password;
        }
        var newPassword = pass();
        console.log(newPassword);
        
        
var date = new Date()


var target = new Date(date.getFullYear() ,7,14)

var days = target.getTime() - date.getTime();

var  getdays = Math.ceil(days/(1000 * 60 * 60 * 24));

var dyas_$ = date.getDay();
var days2 = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]


var daysOf = days2[dyas_$]

console.log(daysOf);
      


console.log(daysOfweek);

console.log("remaning days " + getdays);


let now = new Date("14 aug 2024");

var days2 = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var date = new Date()

var days = now - date;

var  getdays = days/(1000*3600*24);

var round = Math.round(getdays)
console.log(round);
let now2 = days2[now.getDay()]

console.log(now2);

var convert = now.toString();



console.log(convert.slice(0,3));


let sundays = 0

for(let i = 2024; i < 2051 ; i++){
    var eachYear = new Date(i,0,1)
    // console.log(eachYear.getDay());
    if(eachYear.getDay() == 0){
        console.log(i);
        sundays++
    }
}console.log(sundays);

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
for(let i = 2024 ; i <= 2050 ; i++){
    var year = new Date(`january 1,${i}`)
    // console.log(year);
    if(days[year.getDay()] == 'Sun'){
    }
    console.log('Sunday' , i);
}

var myGreeting= "hbd";
for( let i=0; i<4; i++){
    const myTimeout = setTimeout(myGreeting, 5000);
    console.log(myTimeout);
}

var key = "tues"
switch (key) {
    case "mon":
        console.log("Todya is Mon");
        break;
    case "tues":
        console.log("Todya is Mon");
    break;
    default:
    console.log("not match");    
    break;
}

function pass() {
    var text=document.getElementById('main')
    console.log(text);
}

var arr = ['jan',"feb","march","april",'mayjunjulaugseptoctnovdec']

function greet() {
var xyz=document.getElementById('main').value;
var abc=document.getElementById('type').value;
console.log(xyz , abc);
}
function greet() {
    var abc=document.getElementById('type').value;
    console.log(abc);
    
    }
greet();

function show(){
    var text = document.getElementById("text").innerHTML = "Rizwan"
    console.log(text);
}

function show(){
    var text = document.getElementById("text").innerHTML
    console.log(text);
}
// Project 1 In Conter:-
var data = 0
function increment(){
data++
    var text = document.getElementById('text').innerText = data
    console.log(text);
}


function decrement(){
    data--
    var text1 = document.getElementById('text').innerText = data
    console.log(text1);
}
function rest(){
    var text2 = document.getElementById('text').innerText = "0"
 data = text2;
console.log(text2);
}

// project 2

function addValue(){
    
}    

var msg = document.getElementById("img")

function carbutton(){
    msg.src='https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80'
}

function byclebutton()
{
msg.src='https://plus.unsplash.com/premium_photo-1677053177164-82d1f9c13e7e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D'
}

function busbutton()
{
    msg.src='https://img.freepik.com/free-vector/cartoon-school-bus-white-background_1308-132853.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715212800&semt=sph';

}

function aroplanebutton()
{
    msg.src='https://img.freepik.com/free-photo/planes-wing-cuts-through-sky-cotton-candy-clouds-during-radiant-sunset_91128-4456.jpg'
}

function reset(){
    var msg = document.getElementById("img")
    msg.src="https://i.pinimg.com/736x/d2/6d/2a/d26d2aab2ff63cb48b3a91b0e8e0aa55.jpg"

}


let valueGet = document.getElementById("valueGet")
function aplhabte(){
    var arr = ["Ant","Apple","Aeroplane","Ambulance","Angry",]
    var get = document.getElementById("valueGet");
    get.innerText  = arr[Math.floor(Math.random()* 5)]
    

}


var arr = ["items1","items2","items3","items4"]
var str='123456789'
var [name1, ...name2] =str

console.log(name1);

var roll = Math.ceil(Math.random()*6)
// console.log(roll);
var image = document.getElementById("image")
image = image.src=`image/${roll}.jpg`;

switch (roll) {
    case 1:
        image.src="image\bus.jpg"
        break;
        case 2:
            image.src="image\bus.jpg"
             break;

    default:
        break;
}


var word = ["html","web dovelpment" , "css"]

var num = ""

for(var i = 0 ; i < word.length ;i++){
    console.log(word[i]);
        if(word[i] > num){ 
                num = word[i]
            }
        }
        console.log("longest word" ,num);


var arr = ["ali","ahmed"]

var name1 = arr[0]

var age = 25
var msg = (age > 20) ? "you are fine" : "yor not fine"

console.log(msg);

var i=0;
while(i<10){
    console.log(i);
    break;
}

var btn=document.getElementById('btn')
alert('hello word')

btn.addEventListener('btn',function msg() {
    
})

var btn = document.getElementById('btn')
var imge = document.getElementById('imge')
var flag = 1
function changeImge(){
    if(flag == 1){
        imge.src = 'https://www.freeiconspng.com/thumbs/lightbulb-png/light-bulb-png-bulb-png1247-12.png'
        btn.innerText = "OFF";
        flag = 0
    }
    else{
        imge.src = 'https://www.shutterstock.com/image-illustration/3d-illustration-light-bulb-isolated-600nw-749587456.jpg'
        btn.innerText = "ON"
        flag = 1
    }
}
btn.addEventListener('click',changeImge)


let sum = a=> a*a

console.log(sum(5));


function outer(){
    console.log("hello outer funtion");
    function inner(){
    }
    inner()
    console.log("hello inner funtion");
}
outer()

function outer(){
    console.log("hello outer funtion");
    function inner(){
        console.log("hello inner funtion");
    }
    inner()
}
outer()


function outer(){
    console.log("hello outer funtion");
    function inner(){
        function innerInside(){
            console.log("hello innerInSide funtion");
        }
        innerInside
    }
    inner()
    console.log("hello inner funtion");
}
outer()



function outer(a,b){
    return a+b
    console.log("hello outer funtion");
    function inner(){
        function innerInside(){
            console.log("hello innerInSide funtion");
        }
        innerInside()
    }
    inner()
    console.log("hello inner funtion");
}
outer(5,10)

let a = 30
function outer(){
    // let a =20
    console.log("this value is ", a);
    function inner(){
        // let a = 10 
        console.log("this value is ", a);
    }
    inner()
}
outer()

{

    let a = 30
}
function outer(){
    // let a =20
    console.log("this value is ", a);
    function inner(){
        // let a = 10 
        console.log("this value is ", a);
    }
    inner()
}
outer()

for(let i = 0 ; i < 10 ; i++){
    console.log(i);
}

let i = 0
for(i ; i < 10 ; i++){
}
console.log(i);

let name1 = "hassan"
console.log(name1);

name1 = "raza"
console.log(name1);

{

    let name1 = "hassan"
    console.log(name1);
}

let name1$ = "raza"
console.log(name1$);

function addSum(a,b,c,...d){
console.log(a);
console.log(b);
console.log(c);
console.log(d);
}
addSum(5, 33,44,55,66,11,66,77,88,99,3,7,5,9,6,2,1)

function addSum(...a){
    for(index of a ){
        console.log(index);
    }
    }
    addSum(5, 33,44,55,66,11,66,77,88,99,3,7,5,9,6,2,1)

function addSum(...a){
    let sum = 0
    for(index of a ){
        // console.log(index);
        sum += index

    }
    return sum
    }
var ans = addSum(5, 33,44,55,66,11,66,77,88,99,3,7,5,9,6,2,1)

console.log(ans);


function addSum(...a){
    console.log(a);
    
    }
var ans = addSum(["ali","ather","sufyan"])


function addSum(...a){
    
    if(a == [0]){
        a.slice(0,1)
        console.log(a);
    }
    
    }
var ans = addSum(["ali","ather","sufyan"])

var msg = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ex
delectus corrupti culpa facere fugiat, ducimus vel enim incidunt sit
reiciendis commodi sequi corporis dolorem nulla officia est. Odio, omnis!
Minus amet fuga deleniti dolores laudantium. Quis dolorem accusantium sit
nulla expedita dolorum perferendis perspiciatis, culpa voluptatem, aliquid
molestias itaque soluta, vero veniam! Tempora nam cupiditate adipisci
illum, a repellendus. Error officiis est eligendi, possimus voluptatem,
nostrum nemo cupiditate placeat ipsam dolores, illo pariatur quasi dolor
non. Cum, iure ex maxime, quidem veritatis, dicta molestias dolor
quibusdam soluta molestiae eius. Iste nisi facere sunt, molestias debitis
impedit dignissimos est minima! Fuga in porro pariatur aperiam quae culpa
cumque et omnis odio? Similique, corporis aspernatur sunt saepe accusamus
officiis dicta voluptatem? Repudiandae, totam magnam eius odit velit quasi
error possimus, voluptatum expedita ad nihil placeat dicta corrupti quidem
dolore ea itaque cupiditate illo quae quia. Maiores deserunt quas laborum
at corporis!`;

var convert = msg.slice(0,200)
var read = document.getElementById("read")
// document.write(read)
if(msg.length >= 200){
    var convert = msg.slice(0,200)
    read.innerHTML = `${convert} <button id='btn'> See More </button>`
}
var button = document.getElementById("btn")
console.log(button.innerText);

function showMsg(){
    read.innerHTML = `${msg} <button id='btn> see less </button>`
    
}showMsg()

button.addEventListener("click","showMsg")


let btn = document.getElementById("btn")

btn.addEventListener("click", function(e){
    console.log(btn);
    console.log(e);
})
btn.addEventListener("keypress", function(e){
    console.log(btn);
    console.log(e);
})


var str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ducimus autem
aut? Blanditiis accusantium, repellat excepturi fugiat ratione aliquam sit
optio accusamus molestiae officia est dolores quod repellendus dignissimos
rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ducimus autem
aut? Blanditiis accusantium, repellat excepturi fugiat ratione aliquam sit
optio accusamus molestiae officia est dolores quod repellendus dignissimos
rem. `

var text = document.getElementById("para")

function shoText(a){

    if(a){
        text.innerHTML = `${str} <button id='btnl'>see less</button>`

    }else{
        text.innerHTML = `${str.slice(0,400)} <button id='btnm'>see more</button>`
    }
}

shoText(false)
text.addEventListener("click",function(e){
    if(e.target.id == 'btnm'){
        shoText(true)
    }else if(e.target.id == 'btnl'){
        shoText(false)
    }
    console.log(e.target.id);
})
document.write(str.length);

var str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates
      recusandae numquam ducimus tenetur beatae est quo inventore minus tempore
      cumque nesciunt iste ab porro odit libero sequi molestias, excepturi eum
      fugiat. Rem fuga dolorem laboriosam provident eos culpa inventore tenetur
      accusamus sunt. Nostrum vitae repellat voluptatum illum non ullam labore,
      debitis blanditiis saepe! Accusamus totam cumque perspiciatis saepe at
      recusandae quisquam placeat culpa doloremque ducimus alias beatae nulla
      quod ea veritatis, dicta incidunt iusto quia optio voluptates? Assumenda
      repellendus obcaecati aperiam necessitatibus consequuntur exercitationem
      vel, aliquid ex non ipsam minus molestias quidem accusamus. Deserunt
      consequatur, doloremque iusto quidem doloribus laudantium dignissimos
      saepe a ducimus, voluptatibus esse rerum ab, repudiandae incidunt facere
      aut. Sit quae minus eaque dicta quis amet, illum repudiandae velit natus!
      Laboriosam hic quasi quae sit debitis aliquid veritatis, adipisci amet
      quod! Veritatis nostrum numquam, ab voluptate dolore corporis. Tempore
      suscipit autem nulla deserunt, velit obcaecati eaque est dicta corrupti!
      Ad ut nobis unde veniam molestiae, ipsum quisquam soluta exercitationem
      molestias debitis ducimus, consectetur laudantium sequi omnis tempore nisi
      aperiam eius ratione totam esse dicta! Dicta rerum voluptas natus. Magni
      voluptate rerum praesentium sed exercitationem animi voluptatibus nostrum
      quis corporis accusantium aperiam cum unde doloribus repellat id officia
      natus, error nemo soluta aliquam excepturi ut enim deleniti deserunt.
      Cumque blanditiis id vitae cupiditate. Aliquid sunt unde iusto facilis,
      officia minima nobis ab dolor. Quia, autem et vitae praesentium quis
      ipsam. Temporibus modi possimus velit facere recusandae voluptatem
      sapiente cumque optio tenetur nisi eveniet ad ullam tempore sunt,
      accusantium nulla laborum dolor perspiciatis voluptatibus delectus fuga
      voluptatum id ea? Maxime omnis iste voluptatibus eius molestias impedit,
      itaque praesentium sint totam, maiores nihil sapiente quidem quisquam aut.
      A aut voluptate fugiat ex repellat, earum maiores, id numquam,
      necessitatibus eveniet minus laudantium non quisquam magnam officia vel
      ea. Harum eum in distinctio animi dolores, repudiandae fugit maxime?
      Commodi consectetur sit illo ipsam vitae ullam rem? Et laboriosam
      accusamus esse inventore totam doloremque dolorum maxime harum beatae,
      numquam modi possimus corrupti doloribus ullam? Autem mollitia animi
      quibusdam commodi libero? Magni sequi explicabo iste, adipisci et facere
      totam impedit repellendus, quibusdam vero, placeat veritatis. At ex
      reiciendis et, iusto ullam modi possimus nemo nisi dolorum quae quo fuga
      omnis recusandae. Voluptate, laudantium fuga. Suscipit reprehenderit iusto
      harum, sit deleniti explicabo necessitatibus consequatur. Excepturi est
      aperiam reiciendis ex sunt vel laboriosam rerum, hic non. Ea mollitia
      eligendi sapiente vitae. Ipsum neque consequatur iste.`

var defultLength =500
var show = document.getElementById("para")

function showMsg(){

    if(defultLength >= str.length){
        show.innerHTML = `${str} <button id='btnl'> see less </button>`
    }else{
        show.innerHTML = `${str.slice(0,defultLength)} <button id='btnm'>See More</button>`
    }
}showMsg()

show.addEventListener('click',function(a){
    if(a.target.id == 'btnm'){
        defultLength+= 500
    }else if(a.target.id == 'btnl'){
        defultLength+=500
        show()
    }
})


var arr = ["hassan","ahmed","aliyan"]
var index = 0;
setInterval(()=>{
    document.write(arr[index],"<br/>");
    index = [index + 1] % arr.length
},1000)



setInterval(hello,1000)
function hello(){
    document.write("Bilal Ahmed","<br/>");
}
var image = document.getElementById("img")

function main(){
        image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKrA0er90LkB21SUccqN8xwMOiHYyqMGEwwSgMg6rcw&s"
    }
    setInterval(main,1000)
    
    var images3 = [
        "https://img.freepik.com/free-photo/fresh-yellow-daisy-single-flower-close-up-beauty-generated-by-ai_188544-15543.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFx557XPIXXmnhk7joe2Pq2uQhb1iCJ688RgQZzH5ZA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8g0osR_uusexr2AELLqVlRooj-FFwiifTMyr-67yz1A&s"
    ]


    var images2  = [
        "#7b40b6",
        "#b6405a",
        "#40b64a",
        "#b4b640"
    ]
var index = 0
    function changeImage(){
    var image = document.getElementById("img")
    index=(index+1)%images3.length
    image.src=images3[index]

    console.log('hello');
}

setInterval(changeImage,2000)

var index2 = 0
    function changeImage$(){
    var image = document.getElementById("img2")
    index2=(index2+1)%images3.length
    image.style.backgroundColor=images3[index2]

    console.log('hello');
}

setInterval(changeImage$,2000)

var main = document.getElementById("main")

main.addEventListener("mouseover",()=>{
    main.style.transition = '0.s'  
    main.style.transform = 'scale(1.4)';
    main.style.height = '300px'
    main.style.width = '400px'
})
main.addEventListener("mouseout",()=>{
    main.style.transition = '0.3s'
    main.style.transform = 'scale(1)';
})

let tag = document.getElementsByTagName("p")

tag[2].style.color='blue'
tag[0].style.color='red'
tag[2].style.backgroundColor='black'
tag[2].innerText = "All items"

for(let i = 0 ; i < tag.length ; i++){
    if(i % 2 == 0){
        tag[i].style.color='blue'
    }else{
        tag[i].style.color='red'
    }
}

var count = 0;

function abc(){
    for(var i = 0 ;i < 5 ; i++){
        console.log(count--);
    }
}
abc()
abc()
abc()


function foo(a){
    a("Hello")
}
foo(alert);

let log = console.log;

log("ahter")
log("Bilal")


function abc(a){
     console.log(a);
}

var arr = ['bial','sufyan']

abc(arr)

function checkatendance(bacha){
    var lastClass = [1122,2233,3344,4455]

    if(lastClass.indexOf(bacha) !== -1){
        return "Aya tha"
    }else{
        return "Nahi aya"
    }
  
}
console.log(checkatendance(+prompt("Enter your roll number")));

var count = 0;
console.log(count);

function foo(){
    for(var i=1; i< 5; i++){
        count++
        console.log(count);
    }
}
foo()
foo()
foo()

console.log(count);


const arr = ['bilal']
const obj$ = {}

obj$.bilal = "Ahmed";

obj$[arr] = 'hello'

console.log(obj$.bilal);



myinput.addEventListener("selectionchange", () => {
    
        document.getElementById("start").innerHTML = myinput.selectionStart;
    
        document.getElementById("end").innerHTML = myinput.selectionEnd;
    
        document.getElementById("direction").innerHTML = myinput.selectionDirection;
    });
    
    console.log(myinput);
    
    
    
let button$ = document.getElementById('bold')
button$.addEventListener('click',()=>{
document.getElementById("mytext");

document.execCommand('bold', false, null)

})

italic2.addEventListener('click',()=>{
document.getElementById("mytext");

document.execCommand('italic', false, null)

})



underline.addEventListener('click',()=>{
    document.getElementById("mytext");
    
    document.execCommand('underline', false, null)
    
})


bold.addEventListener("click",function(){
        if(textes.style.fontWeight === "700"){
            textes.style.fontWeight = "normal";
        }else{
            textes.style.fontWeight = "700";
        }if(bold.className === 'main'){
            bold.className = 'mainTow';
        }else{
            bold.className = 'main';
        }
        
        
    })
    
    italic2.addEventListener("click",function(){
        if(textes.style.fontStyle === "italic"){
                textes.style.fontStyle='normal';
        }else{
            textes.style.fontStyle='italic';
        }if(italic2.className === 'main'){
                italic2.className = 'mainTow';
            }else{
                    italic2.className = 'main';
                }
        
        
    }
    )
    
    underline.addEventListener("click",function(){
            if(textes.style.textDecoration === 'underline'){
                    textes.style.textDecoration='none';
                }else{
            textes.style.textDecoration='underline';
        }
    })  
    
        let button1 = document.getElementById('main')
        button1.addEventListener('click',()=>{
        document.getElementById("mytext");
        
        document.execCommand('bold', false, null)
        
    })

    // Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Build a Text
  let text = "";
  for (let x in person) {
    text += person[x] + " ";
  };
  
  // Display the Text
  document.getElementById("demo").innerHTML = text;


let student$ = document.querySelector("#student")

student$.addEventListener("click",function(){
    let user = prompt("Enter your name");

    let userage = prompt("Enter your age")
    let userCourse = prompt("Enter your course")

    let getData = {
            name:user,
            age:userage,
            course:userCourse,
        }

        console.log(getData);
})
console.log(student);


let student = document.querySelector("#student")
let studentData = [];
student.addEventListener("click",function () {
    let std ={
        name:prompt("Enter your name"),
        age:prompt("Enter your age"),
        course:prompt("Enter your Course"),
    }
    studentData.push(std);
console.log(studentData);

localStorage.setItem("obj",JSON.stringify(studentData))
var get = localStorage.getItem("obj")
console.log(get);
})

for (key in studentData) {
    console.log(studentData[key]);
}


function createUser(username,age,gender){
this.username=username.charAt(0).toUpperCase() + username.slice(1)
this.age=age
this.gender= gender.charAt(0).toUpperCase() + gender.slice(1)
}
createUser.prototype.display = function(){
    console.log(`user Name ${this.username} Age ${this.age} Gender ${this.gender}`);
}

var user1 = new createUser("ali",25,"male");

user1.display()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);


function CreateUser(username, age , gender){
    this.username=username
    this.age=age
    this.gender= gender
    }
    
    CreateUser.prototype.display = function(){
    console.log(`User Name ${this.username.toUpperCase()} Age${this.age}`);
    }
    display()
    CreateUser.prototype.increment = function(){
        console.log( `this age is ${this.age++}`)
    }
    
    var user1 =  new CreateUser('ali', 25 ,'male')
    var user2 =  new CreateUser('rizwan', 26 ,'male')
    
     user2.increment()
     user2.increment()
     user2.increment()

let key = 0

function sub(){

    key++

    let input = document.getElementById("input")
    
    localStorage.setItem(`id ${key}` , input.value)

}

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach((myFunction) => console.log(myFunction));


function myFunction(value, index, array) {
  txt += value + "\n";
  console.log(txt);
}
myFunction()

let carList = {
    suzuki: {
        Mehran: {
            price: '12,0000',
            image: 'https://cache2.pakwheels.com/system/car_generation_pictures/2873/original/Suzuki_Mehran_2012.jpg?1444111663',
            Transmission: 'Manual',
            detail: {
                model: 2012,
                seats: '5 seats',
                color: ['red', 'white', 'blue']
            }
        },
        Alto: {
            image: 'https://suzukifortmotors.com/wp-content/uploads/2020/12/Alto-Pearl-Black.jpg',
            price: '24,0000',
            Transmission: 'Manual / Auto',
            detail: {
                model: 2021,
                seats: '5 seats',
                color: ['red', 'white', 'blue']
            }
        }
    }}
    let button = document.getElementById("click")
    button.addEventListener("click",function(){
    })
        
        let getColor = document.getElementById("getColor");
        let random = Math.floor(Math.random()*3);
    
        let color = carList.suzuki.Mehran.detail.color[random]
        getColor.style.backgroundColor = color;
        let url = carList.suzuki.Mehran.image
        let imge = `<img class="main" src="${carList.suzuki.Mehran.image}"`

setTimeout(()=>{
    for(let i = 0 ; i < 50000; i++){
        if(i === 4999){
            console.log("found");
        }else{
            console.log("Not found");
        }
    }

},1000)

setTimeout(function foo() {
    
} 
    
, 2000);

function foo(num1,num2,num3) {
}
setTimeout(()=>{
    foo(console.log("200"))
    
},2000)
setTimeout(() => {
    foo(console.log('300'))
    
}, 5000);
setTimeout(() => {
    foo(console.log('400'))
    
}, 7000);

let obj = {
    names : "bilal",
    age: 23,

}

console.log(obj);

function sum(...num){
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum+= num[i]
        
    }

    return sum
   
   
}

let add = sum(3,4,5,6,87,8);
console.log(add);

function one(num){
    let num = "bilal";
  console.log(num);
}
one(num)


let image = document.querySelector("#imge")

userImage.onchange =function(){
 let storeImg = URL.createObjectURL(userImage.files[0])
    
   image.src = storeImg
    
       localStorage.setItem("userImage" , storeImg)
    
    
    }
    
    
    let genderValue = radioValue.addEventListener('change',(event)=> {
            if (event.target.name === 'gender') {
                    setTimeout(() => {
                            var gender = event.target.value
                console.log(gender);
                
            }, 2000);
        }
    });
    console.log(genderValue);


}