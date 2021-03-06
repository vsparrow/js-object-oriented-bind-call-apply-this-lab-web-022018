// Your functions should not only invoke the functions passed as arguments,
//   but also modify the this value of the functions passed through while ensuring arguments are properly passed.
//
// We ask you to write the following functions:
//
// justInvoke(fn):
//   The function simply invokes the function passed through to it.
//   It also returns the return value of the passed through function.
function justInvoke(fn){
  return fn()
}//justInvoke

// setThisWithCall(fn, thisValue, arg):
//   The function again invokes the function passed to it,
//   but uses the call method to return the function's this value.
//   (Make sure to correctly pass the third argument!)
function setThisWithCall(fn,thisValue,arg){
  // console.log(fn)         //ƒ (){ return {thisValue: this, arguments: Array.from(arguments)} }
  // console.log(thisValue) //{name:bob}
  // console.log(arg)      //18
  setResults= fn.call(thisValue,arg)
  // console.log(setResults)
  return setResults
}//setThisWithCall

// setThisWithApply(fn, thisValue, args):
//   Again, invoke the function passed to it,
//   change the this value of that function passed to it.
//   In addition, we ask you to invoked the passed function with arguments.
//   You should accomplish all of the above by using apply.
function setThisWithApply(fn,thisValue,args){
  console.log(args)
  return fn.apply(thisValue,args)
}

// returnNewFunctionOf(functionToBeCopied, thisValue):
//  Here, we ask you to write a function that returns a copy of the function passed through,
//   but sets the this value of the function's copy.
function returnNewFunctionOf(functionToBeCopied,thisValue){
  return functionToBeCopied.bind(thisValue)
}
