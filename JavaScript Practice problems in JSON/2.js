var object = {name : "RajiniKanth", age : 25, hasPets : true};
function printAllKeys (a) {
	d=[];
	for (i in a){
		d.push(i)
	}
console.log(d);
}
printAllKeys(object);