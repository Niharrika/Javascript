var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(obj1,obj2){
var a = JSON.stringify(expected);
var b = JSON.stringify(actual);
if (a==b){
	console.log("Passed");
}
	else{
		console.log("Failed");
	}
}
assertObjectsEqual(expected,actual)