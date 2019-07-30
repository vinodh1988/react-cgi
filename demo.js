


  var a=function(){
      console.log("Function is working...!!!");
  }
  
  var b=function(){
	  return "Hello!!! world";
  }
  a();
  
  console.log(b());
  
  //ES2015 syntax-- arrow function
  
  var c=()=> console.log("Arrow function is working");
  
  var d=()=> "Hello!!! arrow";
  
  var e=(a,b)=>a+b;
  
  var f=function(a,b){
	  return a+b;
  }
  
  c();
  console.log(d());
  console.log(e(23,34));
  console.log(f(12,34));