 $(function() {
	$('button').click(function() {
		$.ajax({
			url: '/temp',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response) {
				console.log(response);
			},
			error: function(error) {
				console.log(error);
			}
		});
	});
});
function noReload(){
	if(event.key == 'Enter'){
		event.preventDefault();
		document.myform.submit();
	}
}
function addFields1(){
	if(event.key != 'Enter'){
		return;
	}
	event.preventDefault();
	var number = document.getElementById("member").value;
	if(number > 3){
		number = 3;
	}
	var container = document.getElementById("container");
	while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
	}
	for (i=0;i<number;i++){
		container.appendChild(document.createTextNode("Channel " + (i+1)));
		var input = document.createElement("input");
		input.type = "text";
		input.name = "channel "+(i+1);
		input.value = "";
		container.appendChild(input);
		container.appendChild(document.createElement("br"));
	}
}
function addFields2(){
	if(event.key != 'Enter'){
		return;
	}
	event.preventDefault();
	var number = document.getElementById("member2").value;
	if(number > 3){
		number = 3;
	}
	var container = document.getElementById("container2");
	while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
	}
	for (i=0;i<number;i++){
		container.appendChild(document.createTextNode("Channel " + (i+1)));
		var input = document.createElement("input");
		input.type = "text";
		input.name = "channel "+(i+1);
		input.value = "";
		container.appendChild(input);
		container.appendChild(document.createElement("br"));
	}
}