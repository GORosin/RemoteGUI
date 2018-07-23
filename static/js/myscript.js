$(function() {
    $(document.getElementById("onoff")).click(function() {
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
    $(document.getElementById("channel 6")).click(function() {
        $.ajax({
            url: '/channel6',
            data: $('form').serialize(),
            type: 'POST'
        });
    });
    $(document.getElementById("onoff2")).click(function() {
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
    $(document.getElementById("onoff3")).click(function() {
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

function onOff(buttonid,inputid){
    currentvalue = document.getElementById(buttonid).value;
    if(currentvalue == "Off"){
        document.getElementById(buttonid).value="On";
        document.getElementById(inputid).value="On";
    }else{
        document.getElementById(buttonid).value="Off";
        document.getElementById(inputid).value="Off";
    }
}

function noReload(){
	if(event.key == 'Enter'){
		event.preventDefault();
		document.myform.submit();
	}
}

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
		console.log(container.childNodes);
		$(document.getElementById(button.id)).click(function() {
		    console.log(button.id)
            $.ajax({
                url: '/'+input.name,
                data: $('form').serialize(),
                type: 'POST'
            });
        });
	}
	/*var children = container.childNodes;
	$(document).on('click',button.id,function() {
        for(var child=container.firstChild; child!=null; child=child.nextSibling) {
            console.log(child);
            if(child.contains(input)){
                name = child.name;
            }
            if(child.contains(button)){
                console.log(button.id);
                console.log(name);
                $.ajax({
                    url: '/'+name,
                    data: $('form').serialize(),
                    type: 'POST'
                });
            }
        }
    });*/
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
		$(document.getElementById(button.id)).click(function() {
            $.ajax({
                url: '/'+input.name,
                data: $('form').serialize(),
                type: 'POST'
            });
        });
	}
}