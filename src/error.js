// prettier/prettier
  import { createApp } from 'vue'

// camelcase
const time_lock = 1

// no-async-promise-executor
const a = Promise.resolve(1)
new Promise(async (resolve, reject) => {
  resolve(await a)
})

// new-cap
const a1 = new b()

// semi
const a2 = 1;

// array-bracket-newline
const bb = [
]

// quotes
const a3 = "132"

// spaced-comment
//this is

// no-return-assign
let fn = () => {
  return c = 1
}

// prefer-template
var str = "Hello, " + name + "!";

// prefer-rest-params
function foo (a, b) {
  console.log(arguments)
}
foo(1, 2)

// no-param-reassign
let fn1 = (a) => {
  a = bb
}

// no-confusing-arrow
var x = a => 1 ? 2 : 3;

// no-tabs
// var a \t= 2;

// no-var
var a4 = 1

// prefer-const
let a5 = 1

// prefer-arrow-callback
foo(function(a) { return a; });

// block-scoped-var
{
  var a6 = 1
}
console.log(a6)

// no-else-return
if (a) {
  return 
} else {
  return 
}

// padded-blocks
if (a) {

  b();

}

// padding-line-between-statements
function a7() {
  console.log(1)
  return 
}

// no-else-return
function a8() {
  if (a) {
    console.log(1)
    return 
  } else {
    console.log(2)
  }
}

// no-multiple-empty-lines



// lines-around-comment
const night ='long'
/** s */

// eol-last
function doSomething() {
  var foo = 2;
}

// default-case
switch (a) {
  case 1:
      /* code */
      break;
}

// dot-location
const a10 = a9.
  b()

// eqeqeq
const a11 = (a1 == 1)

// new-parens
const a12 = new Function

// no-debugger
debugger

// no-array-constructor
const a13 = new Array()

// no-caller
function a14(a, b) {
  arguments.callee(a, b)
}

// no-cond-assign
if (a = 1) {

}

// no-const-assign
const a15 = 1
a15 = 2

// no-control-regex
var pattern1 = /\x00/;

// no-delete-var
// var x;
// delete x;

// no-dupe-args
// function foo(a, b, a) {
//   console.log("value of the second a:", a);
// }

// no-dupe-class-members
class Foo {
  bar() { console.log("hello"); }
  bar() { console.log("goodbye"); }
}

// no-dupe-keys
const a16 = {
  foo: 1,
  foo: 2
}

// no-duplicate-case
switch (a) {
  case 1:
      break;
  case 2:
      break;
  case 1:         // duplicate test expression
      break;
  default:
      break;
}

// no-empty-character-class
// var foo = /^abc[]/;

// no-empty-pattern
var {a: {}} = foo

// no-eval
eval('console.log(1)')

// no-ex-assign
try {
  // code
} catch (e) {
  e = 10;
}

// no-extend-native
Object.prototype.extra = 55;

// no-extra-bind
var x = function () {
  foo();
}.bind(bar);

// no-extra-label
A: while (a) {
  break A;
}

// no-fallthrough
switch(foo) {
  case 1:
      doSomething();

  case 2:
      doSomething();
}

// no-func-assign
// function foo() {}
// foo = bar;

// no-implied-eval
setTimeout("alert('Hi!');", 100);

// no-iterator
Foo.prototype.__iterator__ = function() {
  return new FooIterator(this);
}

// no-label-var
var x = foo;
function bar() {
x:
  for (;;) {
    break x;
  }
}

// no-labels
label:
    while(true) {
        // ...
    }

// no-lone-blocks
{
  let a = 1
}

// no-loop-func
for (var i = 0; i < 10; i++) {
  funcs[i] = function() {
      return i;
  };
}

// no-multi-str
var x = "Line 1 \
         Line 2";

// no-native-reassign
window = {};

// no-negated-in-lhs
if(!key in object) {
}

// no-new-func
var x = new Function("a", "b", "return a + b");

// no-new-object
var myObject = new Object();

// no-new-symbol
var foo1 = new Symbol("foo");

// no-new-wrappers 
var stringObject = new String("Hello world");

// no-obj-calls
var math = Math();

// no-octal
// var num11 = 071; 

// no-octal-escape
// var foo = "Copyright \251";

// no-redeclare
var a17 = 3;
var a17 = 10;

// no-regex-spaces
var re = /foo   bar/;

// no-restricted-syntax

// no-script-url
location.href = "javascript:void(0)";

// no-self-assign
foo = foo;

// no-self-compare
var x = 10;
if (x === x) {
    x = 20;
}

// no-sequences
a18 = b += 5, a + b;

// no-shadow-restricted-names
var undefined = "foo";

// no-sparse-arrays
var items = [,,];

// no-template-curly-in-string
"Hello ${name}!";

// no-this-before-super
class A18 extends B18 {
  constructor() {
      this.a = 0;
      super();
  }
}

// no-throw-literal
throw "error";

// no-undef
var foo11 = someFunction();

// no-restricted-globals
function onClick() {
  console.log(event);
}

// no-unused-labels
OUTER_LOOP:
for (const student of students) {
    if (checkScores(student.scores)) {
        continue;
    }
    doSomething(student);
}

// no-unused-vars
some_unused_var = 42;

// no-use-before-define
alert(a20);
var a20 = 10;

// no-useless-computed-key
var foo123 = {["a"]: "b"};

// no-useless-concat
var foo213 = "a" + "b";

// no-useless-constructor
class A {
  constructor () {
  }
}

class B extends A {
  constructor (value) {
    super(value);
  }
}

// no-useless-escape
let foo2 = "hol\a"; // > foo = "hola"

// no-useless-rename
import { foo3 as foo3 } from "bar";

// no-with
// with (point) {
//   r = Math.sqrt(x * x + y * y); // is r a member of point?
// }

// no-whitespace-before-property
foo. bar

// max-params
function foo4 (bar, baz, qux, qxx, cxx, dxx) { // four parameters, may be too many
  doSomething();
}

// complexity
function a123(x) {
  if (true) {
      return x;
  } else if (false) {
      return x+1;
  } else {
      return 4; // 3rd path
  }
}

// require-yield
function* foo5() {
  return 10;
}

// rest-spread-spacing
// let [a21, b, ... arr] = [1, 2, 3, 4, 5];

// no-restricted-properties
// var example = disallowedObjectName.disallowedPropertyName
// disallowedObjectName.disallowedPropertyName()

// no-underscore-dangle
// var foo_;

// curly
// while (bar)
//   baz();

// no-magic-numbers
// const a22 = 2

// max-depth
// function foo7() {
//   for (;;) { // Nested 1 deep
//       while (true) { // Nested 2 deep
//           if (true) { // Nested 3 deep
//               if (true) { // Nested 4 deep
//                   if (true) { // Nested 5 deep
//                   }
//               }
//           }
//       }
//   }
// }

// array-callback-return
// var bar1 = foo.filter(function(x) {
//   if (x) {
//       return true;
//   } else {
//       return;
//   }
// });

// no-invalid-regexp
RegExp('[')

// getter-return
p123 = {
  get name(){
      // no returns.
  }
};

// valid-typeof
// typeof foo === "strnig"

// constructor-super
// class A123 {
//   constructor() {
//       super();  // This is a SyntaxError.
//   }
// }

// no-prototype-builtins
var hasBarProperty = foo33.hasOwnProperty("bar");
