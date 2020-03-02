function dis(val) 
         { 
           document.getElementById("result").value+=val 
		 }
	
   function solve() {
   let x = document.getElementById("result").value;
   var obj = new calculator(parseInt(x[0]),parseInt(x[2]));
   switch (x[1]){
	   case '+':
	  k= obj.add();
	   break;
	   case '-':
	  k= obj.sub();
	   break;
	   case '*':
	  k= obj.mul();
	   break;
	   case '/':
	  k= obj.div();
	   break;
	   default:
	   k='invalid input';
	   break;
	    }
	
		document.getElementById("result").value=k;
		
		 }
		 function clr(){
			 document.getElementById("result").value="";
		 }
class calculator {
      constructor (val1,val2) {
        this.val1 = val1;
		this.val2= val2;
      }		 
  add (){
	   
	   return this.val1 + this.val2;
   }
   sub () {
	   return this.val1-this.val2;
   }
   mul () {
	   return this.val1*this.val2;
   }
   div (){
	   return this.val1/this.val2;
   }

}
