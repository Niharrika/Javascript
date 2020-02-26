var object = {name: "ISRO", age: 35, role: "Scientist"};
function convertObjectToList (b){
	d=[]
for (i in b) {
	d.push([i,b[i]]);
}
console.log(d);
}
convertObjectToList(object);