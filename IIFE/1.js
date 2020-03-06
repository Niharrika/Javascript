(function () {
b=[];
 for (i=2;i<=l.length;i++){
	 var a = true;
	 for(j=2;j<i;j++){
		 if(i%j==0 && i!=j){
			 var a = false;
		 }
	 }
	 if(a == true){
		 b.push(i);
	 }
 }
 console.log(b);
})(l=[1,2,3,4,5,6,7,8,9,10,11,12]);
