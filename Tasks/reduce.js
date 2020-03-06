arr = [1,2,3,4,5,6,7]
let sum1 = arr.reduce((sum,item)=>{
return sum+item},0);
let sum2 = arr.reduce((sum,item)=>{
	if (item%2==1){
		return sum +item;
	}
	else{
		return sum;
	};
console.log(sum+item);
console.log(sum);
);