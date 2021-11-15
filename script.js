function showElm(id, innerHtml) {
	document.getElementById(id).hidden = false;
	document.getElementById(id).innerHTML = innerHtml;
}

var hidden = false;

function showContent(id) {
	document.getElementById(id).hidden = false;
	hidden = false;
}

function toggContent(id, idClick, innerHtmlShown, innerHtmlHidden) {
	hidden = !hidden;
	document.getElementById(id).hidden = !hidden;
	
	if(document.getElementById(id).hidden == true) {
		document.getElementById(idClick).innerHTML = innerHtmlHidden;
	}
	if(document.getElementById(id).hidden == false) {
		document.getElementById(idClick).innerHTML = innerHtmlShown;
	}
}