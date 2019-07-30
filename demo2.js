
let a=["Mani","Rajesh","Rahul","Peter"];

/*
let temp=a.map(function(x){
     return  "Hello!!!"+x;
});

console.log(a);
console.log(temp);*/

let p=[{name: 'Ravi', gender:'M'},{name:"Kiran", gender:'M'},{name:"Priya",gender:"F"}];
/*
 let result=p.map(function(x){
	  if(x.gender=='M')
		  return "Mr. "+x.name;
	  else
		  return "Miss. "+x.name;
  });
  
  console.log(result);*/
  
let temp=a.map((x)=> "Hello!!"+ x);
let temp2=p.map((x)=> x.gender=="M"?("Mr. "+x.name):("Miss. "+x.name));

console.log(temp);
console.log(temp2);

  