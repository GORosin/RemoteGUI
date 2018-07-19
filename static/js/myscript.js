$(function() {
    $(document.getElementById("voltage low")).click(function() {
        $.ajax({
            url: '/low',
            data: $('form').serialize(),
            type: 'POST'
        });
    });
//    $(document.getElementById("voltage low")).click(function() {
//        var val = $(this).val();
//            $.ajax({
//                url: '/low',
//                type: "POST",
//                data:{
//                    val
//                }
//            })
//        })
    $(document.getElementById("channel 1")).click(function() {
        $.ajax({
            url: '/channel1',
            data: $('form').serialize(),
            type: 'POST'
        });
    });
    $(document.getElementById("channel 2")).click(function() {
        $.ajax({
            url: '/channel2',
            data: $('form').serialize(),
            type: 'POST'
        });
    });
    $(document.getElementById("channel 3")).click(function() {
        $.ajax({
            url: '/channel3',
            data: $('form').serialize(),
            type: 'POST'
        });
    });
    $(document.getElementById("channel 4")).click(function() {
        $.ajax({
            url: '/channel4',
            data: $('form').serialize(),
            type: 'POST'
        });
    });
    $(document.getElementById("channel 5")).click(function() {
        $.ajax({
            url: '/channel5',
            data: $('form').serialize(),
            type: 'POST'
        });
    });
    $(document.getElementById("channel 6")).click(function() {
        $.ajax({
            url: '/channel6',
            data: $('form').serialize(),
            type: 'POST'
        });
    });
    $(document.getElementById("channel 7")).click(function() {
        $.ajax({
            url: '/channel7',
            data: $('form').serialize(),
            type: 'POST'
        });
    });
    $(document.getElementById("channel 8")).click(function() {
        $.ajax({
            url: '/channel8',
            data: $('form').serialize(),
            type: 'POST'
        });
    });
    $(document.getElementById("channel 9")).click(function() {
        $.ajax({
            url: '/channel9',
            data: $('form').serialize(),
            type: 'POST'
        });
    });
    $(document.getElementById("channel 10")).click(function() {
        $.ajax({
            url: '/channel10',
            data: $('form').serialize(),
            type: 'POST'
        });
    });
    $(document.getElementById("voltage high")).click(function() {
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

$(document).ready(function(){
    $('#read back low').click(function(){
        if(value=="off"){
            value="on";
        }
        else{
            value="off";
        }
    });
});

function addFields1(){
    if(event.key != 'Enter'){
        return
    }
	event.preventDefault();
	var number = document.getElementById("member").value;
	var container = document.getElementById("container");
	while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
	}
	for (i=1;i<number;i++){
		container.appendChild(document.createTextNode("Channel " + (i+1)+" "));
		var input = document.createElement("input");
		var button = document.createElement("button");
		input.type = "number";
		input.name = "channel"+(i+1);
		input.value = "0";
		input.min = "0";
		input.max = "100";
		input.step = "0.01";
		button.type = "button";
		button.id = "channel "+(i+1);
		container.appendChild(input);
		container.appendChild(button);
		button.appendChild(document.createTextNode("Set Voltage"));
		container.appendChild(document.createElement("br"));
	}
}
function addFields2(){
    if(event.key != 'Enter'){
        return
    }
	event.preventDefault();
	var number = document.getElementById("member2").value;
	var container = document.getElementById("container2");
	while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
	}
	for (i=1;i<number;i++){
		container.appendChild(document.createTextNode("Channel " + (i+1)+ " "));
		var input = document.createElement("input");
		var button = document.createElement("button");
		input.type = "number";
		input.name = "channel"+(i+6);
		input.value = "0";
		input.min = "0";
		input.max = "100";
		input.step = "0.01";
		button.type = "button";
		button.id = "channel "+(i+6);
		container.appendChild(input);
		container.appendChild(button);
		button.appendChild(document.createTextNode("Set Voltage"));
		container.appendChild(document.createElement("br"));
	}
}