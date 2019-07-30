



class Student{
	
   constructor(sno,name){
     this.sno=sno;
	 this.name=name;
   }
   
   display(){
     console.log(this.sno+" "+this.name);
   }
}

var temp=new Student(13,"Ram");

var temp3=new Student("Ramesh",15);

temp.display();
temp3.display();
