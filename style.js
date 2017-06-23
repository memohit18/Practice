function substitute(){
	var myValue = document.getElementById('myTextBox').value;
	if(myValue.length == 0){
		alert('Please enter real value in the box!');
		return;
	}
	var myTitle = document.getElementById('title');
	myTitle.innerHTML = myValue;
	return;
	var blink_speed = 500;
	var t = setInterval (function(){
		var ele =document,getElementById('blinker');
		ele.style.visibility = (ele.style.visibility == 'hidden' ?
			'' : 'hidden');
	}, blink_speed)
}