var div = document.createElement('div');
document.body.appendChild(div);
div.textContent='Div Created';
div.addEventListener("mouseover", myScript);
div.addEventListener("mouseout", myScript1);
function myScript() {
	div.style.color="red";
}
function myScript1() {
	div.style.color="Black";
}