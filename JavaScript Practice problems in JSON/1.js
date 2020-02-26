var object = {name: "RajiniKant", age: 33, hasPets : false};
d=[]
function array (a){
	var d=[];
	for (i in object){
		var b = object[i];
		d.push(b);
	}
console.log(d);
}
array(object);
		