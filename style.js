window.onload = addstyle;

function addstyle(){
	var node = document.createElement('style');
	node.src = 'https://cdn.jsdelivr.net/gh/jibia-code/Jibia-search/search.css';
	document.body.appendChild(node);
}