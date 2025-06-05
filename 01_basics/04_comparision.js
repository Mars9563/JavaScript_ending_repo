// console.log(2 == 1);
// console.log( 2 != 1);


//Never do this

// console.log("2" > 1);
// type are not same


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// Imp equality "==" and comparison "> < <= >=" works differently
// comparison converts null to a number, it treats it as zero.
// but but but..
/*
Here's exactly what happens with equality:
Step 1: Check types

    null is null

    0 is a number

They're different types, so JavaScript tries type coercion rules for ==.
Step 2: Use the special rule for null and undefined

JavaScript has a very specific rule:

    If one operand is null and the other is undefined, return true.
    Otherwise, if one is null and the other is anything else (like a number), return false.
*/


// ===

console.log("2" === 2);