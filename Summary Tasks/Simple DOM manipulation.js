var div1 = document.createElement('div');
var div2 = document.createElement('div');
document.body.appendChild(div1);
document.body.appendChild(div2);
div1.textContent='I am Div 1';
div2.textContent='I am Div 2';
var button = document.createElement('button');
document.body.appendChild(button);
button.innerHTML = 'SWAP'
button.onclick = function (){
temp=div1.textContent;
div1.textContent=div2.textContent
div2.textContent=temp;
}