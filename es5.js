



   function Student(sno,name){
        this.sno=sno;
		this.name=name;
   }
   
   Student.prototype.display=function(){
     console.log(this.sno+" "+this.name);
   }
   
   var obj=new Student(12,"Ramesh");
   obj.display();