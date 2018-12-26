// Learning basics of ES6

// 1.1 Using 'let'
// clearly, 'let' keyword is also used with defining and declaring variables similar to 'var'
// but, unlike it,'let' has a scope, it is accessible only within the block level where it is defined

if (true) {
 	let a = "inside a block";
 	console.log(a);				// > inside if block
}
console.log(a);  				// > a is not defined

let b = "maybe global";
console.log(b);					// > maybe global
if(true) {
	console.log(b)				// > maybe global
}
