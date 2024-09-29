//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)
})();

// ----()()---(i)function definition-----(ii)function execution call----
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('shalini')