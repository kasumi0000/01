function getStringLength(str) {
str = str || '';
return str.length;
}

getStringLength();
getStringLength('Hi');

function getStringLength(str = '') {
return str.length;
}
	
getStringLength();
getStringLength('Hi');