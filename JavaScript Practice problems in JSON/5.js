var object = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject (b) {
var d={}
for (i=0;i<b.length;i++) {
	d[b[i][0]]=b[i][1]
}
console.log(d);
}
fromListToObject(object);