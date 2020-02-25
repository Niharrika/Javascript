var request = new XMLHttpRequest()
	method = 'GET',
	url = 'https://restcountries.eu/rest/v2/all';
request.open(method,url,true);
request.onload = function () {
	var data = JSON.parse(this.response)
for (i=0;i<data.length;i++){
	var object = data [i];
	console.log('item' + i+ ': '+'Name: '+ object.name+' '+'Capital: '+ object.capital);
}
};
request.send();
