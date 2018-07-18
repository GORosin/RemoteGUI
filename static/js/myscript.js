    $(function() {
        $(document.getElementById("read back low")).click(function() {
            $.ajax({
                url: '/low',
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
        $(document.getElementById("read back high")).click(function() {
            $.ajax({
                url: '/high',
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
        $(document.getElementById("SetTemp")).click(function() {
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
        $(document.getElementById("SetPing")).click(function() {
            $.ajax({
                url: '/ping',
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
        $(document.getElementById("Break")).click(function() {
            $.ajax({
                url: '/break',
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
        $(document.getElementById("IV scan")).click(function() {
            $.ajax({
                url: '/IVscan',
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
        $(document.getElementById("Sensor")).click(function() {
            $.ajax({
                url: '/sensor',
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
        $(document.getElementById("Run Confirmation Test")).click(function() {
            $.ajax({
                url: '/confirmtest',
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
        $(document.getElementById("Set Interlock")).click(function() {
            $.ajax({
                url: '/interlock',
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
		var button = document.createElement("button");
		input.type = "text";
		input.name = "channel "+(i+1);
		input.value = "";
		button.type = "button";
		button.name = "Set High Channel "+(i+1);
		container.appendChild(input);
		container.appendChild(button);
		button.appendChild(document.createTextNode("Set Channel"));
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
		var button = document.createElement("button");
		input.type = "text";
		input.name = "channel "+(i+1);
		input.value = "";
		button.type = "button";
		button.name = "Set Low Channel "+(i+1);
		container.appendChild(input);
		container.appendChild(button);
		button.appendChild(document.createTextNode("Set Channel"));
		container.appendChild(document.createElement("br"));
	}
}