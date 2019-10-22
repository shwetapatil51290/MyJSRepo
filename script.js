console.log('Hello World!!!!');

/*************************
* Variables and data types
*/

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';

//Type of data types => Primitives => Number, String, Boolean, Undefined, Null
//Javascript has dynamic typing = data types are automatically assigned to variables

var age = 28;
var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

//var 3years = 3;                   // variable name cannot start from number or special character except _ and $
//var john/mark = 'J and M';        // unexpected token '/'
//var function = 23;                // cannot use reserved keyword such as 'function', 'if'


/************************************
* Variable mutation and type coercion
*/

var firstName = 'John';
var age = 28;

//Type coercion
console.log(firstName + ' ' + age);  //O/P = John 28 -> Sice 28 is not a string still it printed because of Type coercing -> age will be converted automatically to String

var job, isMarried;
job = 'teacher';
isMarried = false;
//isMarried = false;
console.log(firstName + 'is a ' + age + ' year old' + job + '. Is he married? ' + isMarried); //Here Boolean converted to String. 
//If isMarried is not assigned to any value the undefined will come. i.e. undefined is also converted to String which is type coercion.

//Variable mutation
age = 'twenty eight';
job = 'driver';

//alert(firstName + 'is a ' + age + ' year old' + job + '. Is he married? ' + isMarried);     //ok

//var lastName = prompt('What is his lastname?');          //ok
console.log(firstName + ' ' +lastName);

/**********
* Operators
*/

 var year, yearJohn, yearMark;
 now = 2018;

 //Math operators

 ageJohn = now - 28;
 ageMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//Logical operators
var isJohnOlder = ageJohn < ageMark;
console.log(isJohnOlder);


//tyoeOf operator
console.log(typeof isJohnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');

var x;
console.log(typeof x);

/********************
* Operator precedence
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x,y;
x = y =  (3+5) * 4 - 6;
console.log(x, y); // o/p would be -> 26 26
// y variable will also have value  as assignment operator associativity is from right to left
// First y = 26 then x = y will happen and then x = 26 would assigned

// 2 + 4 + 5 -> it would be clcu;ated as follows
//(2+4) + 5 -> 6 + 5 -> ( 6 + 5 ) -> 11 ===> beacause + opeatros has associativity from left to right