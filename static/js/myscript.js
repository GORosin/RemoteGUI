$(function() {
    $(document.getElementById("onoff")).click(function() {
        var request = $.ajax({
            url: '/low',
            data: $('form').serialize(),
            type: 'POST',
            dataType: "html"
        });
        request.done(function(JSON_array){
            array_data = JSON.parse(JSON_array)["array"];
            //console.log(array_data[0]);
            changeText("myspan", array_data[0])
        })
    });
    $(document.getElementById("onoff2")).click(function() {
        var request = $.ajax({
            url: '/high',
            data: $('form').serialize(),
            type: 'POST',
            dataType: "html"
        });
        request.done(function(JSON_array){
            array_data = JSON.parse(JSON_array)["array"];
            //console.log(array_data[0]);
            changeText("myspan", array_data[0])
        })
    });
    $(document.getElementById("channel 1")).click(function() {
        var request = $.ajax({
            url: '/channel1',
            data: $('form').serialize(),
            type: 'POST',
            dataType: "html"
        });
        request.done(function(JSON_array){
            array_data = JSON.parse(JSON_array)["array"];
            //console.log(array_data[0]);
            changeText("myspan", array_data[0])
        })
    });
    $(document.getElementById("read channel 1")).click(function() {
        var request = $.ajax({
            url: '/readchannel1',
            data: $('form').serialize(),
            type: 'POST',
            dataType: "html"
        });
        request.done(function(JSON_array){
            array_data = JSON.parse(JSON_array)["array"];
            //console.log(array_data[0]);
            readVoltCurrent("lowspan", array_data[0], array_data[1], array_data[2], "Channel 1")
        })
    });
    $(document.getElementById("channel 6")).click(function() {
        var request = $.ajax({
            url: '/channel6',
            data: $('form').serialize(),
            type: 'POST',
            dataType: "html"
        });
        request.done(function(JSON_array){
            array_data = JSON.parse(JSON_array)["array"];
            //console.log(array_data[0]);
            changeText("myspan", array_data[0])
        })
    });
    $(document.getElementById("read channel 6")).click(function() {
        var request = $.ajax({
            url: '/readchannel6',
            data: $('form').serialize(),
            type: 'POST',
            dataType: "html"
        });
        request.done(function(JSON_array){
            array_data = JSON.parse(JSON_array)["array"];
            //console.log(array_data[0]);
            readVoltCurrent("highspan", array_data[0], array_data[1], array_data[2], "Channel 1")
        })
    });
    $(document.getElementById("SetTemp")).click(function() {
        var request = $.ajax({
            url: '/temp',
            data: $('form').serialize(),
            type: 'POST',
            dataType: "html"
        });
        request.done(function(JSON_array){
            array_data = JSON.parse(JSON_array)["array"];
            //console.log(array_data[0]);
            changeText("myspan", array_data[0])
        })
    });
    $(document.getElementById("ReadTemp")).click(function() {
        var request = $.ajax({
            url: '/readtemp',
            data: $('form').serialize(),
            type: 'POST',
            dataType: "html"
        });
        request.done(function(JSON_array){
            array_data = JSON.parse(JSON_array)["array"];
            //console.log(array_data[0]);
            readTemp("tempspan", array_data[0], array_data[1])
        })
    });
    $(document.getElementById("SetPing")).click(function() {
        var request = $.ajax({
            url: '/ping',
            data: $('form').serialize(),
            type: 'POST',
            dataType: "html"
        });
        request.done(function(JSON_array){
            array_data = JSON.parse(JSON_array)["array"];
            //console.log(array_data[0]);
            changeText("myspan", array_data[0])
        })
    });
    $(document.getElementById("Break")).click(function() {
        var request = $.ajax({
            url: '/break',
            data: $('form').serialize(),
            type: 'POST',
            dataType: "html"
        });
        request.done(function(JSON_array){
            array_data = JSON.parse(JSON_array)["array"];
            //console.log(array_data[0]);
            changeText("myspan", array_data[0])
        })
    });
    $(document.getElementById("IV scan")).click(function() {
        var request = $.ajax({
            url: '/IVscan',
            data: $('form').serialize(),
            type: 'POST',
            dataType: "html"
        });
        request.done(function(JSON_array){
            array_data = JSON.parse(JSON_array)["array"];
            //console.log(array_data[0]);
            changeText("myspan", array_data[0])
        })
    });
    $(document.getElementById("onoff3")).click(function() {
        var request = $.ajax({
            url: '/sensor',
            data: $('form').serialize(),
            type: 'POST',
            dataType: "html"
        });
        request.done(function(JSON_array){
            array_data = JSON.parse(JSON_array)["array"];
            //console.log(array_data[0]);
            changeText("myspan", array_data[0])
        })
    });
    $(document.getElementById("Run Confirmation Test")).click(function() {
        var request = $.ajax({
            url: '/confirmtest',
            data: $('form').serialize(),
            type: 'POST',
            dataType: "html"
        });
        request.done(function(JSON_array){
            array_data = JSON.parse(JSON_array)["array"];
            //console.log(array_data[0]);
            changeText("myspan", array_data[0])
        })
    });
    $(document.getElementById("Run Tests")).click(function() {
        var request = $.ajax({
            url: '/runtests',
            data: $('form').serialize(),
            type: 'POST',
            dataType: "html"
        });
        request.done(function(JSON_array){
            array_data = JSON.parse(JSON_array)["array"];
            //console.log(array_data[0]);
            changeText("myspan", array_data[0])
        })
    });
    $(document.getElementById("standardtest")).click(function() {
        var request = $.ajax({
            url: '/standardtest',
            data: $('form').serialize(),
            type: 'POST',
            dataType: "html"
        });
        request.done(function(JSON_array){
            array_data = JSON.parse(JSON_array)["array"];
            //console.log(array_data[0]);
            changeText("myspan", array_data[0])
        })
    });
    $(document.getElementById("Set Interlock")).click(function() {
        var request = $.ajax({
            url: '/interlock',
            data: $('form').serialize(),
            type: 'POST',
            dataType: "html"
        });
        request.done(function(JSON_array){
            array_data = JSON.parse(JSON_array)["array"];
            //console.log(array_data[0]);
            changeText("myspan", array_data[0])
        })
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
	}
}

function changeText(text, num){
    if(num == 1){
        document.getElementById(text).innerHTML = "Replied";
    }
    else{
        document.getElementById(text).innerHTML = "Server not responding";
    }
}

function check(id, hiddenid){
    if(document.getElementById(id).checked){
        document.getElementById(hiddenid).disabled = true;
    }
}
function readVoltCurrent(text, num, volt, current, channel){
    if(num == 1){
        document.getElementById(text).innerHTML = channel+" Voltage: "+volt+", Current: "+current;
    }
    else{
        document.getElementById(text).innerHTML = "Server not responding";
    }
}

function readTemp(text, num, temp){
    if(num == 1){
        document.getElementById(text).innerHTML = "Current Temperature: "+temp;
    }
    else{
        document.getElementById(text).innerHTML = "Server not responding";
    }
}

function verify(input){ //hard imposes min and max limitations by changing any value over the limit to the limit value.
    console.log(input);
    if(input.includes("read")){
        return
    }
    if(parseFloat(document.getElementById(input).value) > document.getElementById(input).max){
        document.getElementById(input).value = document.getElementById(input).max;
    }
    else if(parseFloat(document.getElementById(input).value) < document.getElementById(input).min){
        document.getElementById(input).value = document.getElementById(input).min;
    }
    if(parseFloat(document.getElementById(input).value) > 0){
        //console.log("input"+input)
        if(input=="high"||input=="channel7"||input=="channel8"||input=="channel9"||input=="channel10"){
            if(confirm("Warning: Positive Voltage")){
                console.log("confirm successful")
            }
            else{
                document.getElementById(input).value = 0;
            }
        }
    }
}

function getInput(name, channel){ //posts dynamic channel value
    //console.log(name);
    var request = $.ajax({
        url: '/'+name,
        data: $('form').serialize(),
        type: 'POST',
        dataType: "html"
    });
    request.done(function(JSON_array){
        array_data = JSON.parse(JSON_array)["array"];
        //console.log(array_data[0]);
        if(name.includes("read")){
            if(parseInt(channel)>5){
                readVoltCurrent("highspan", array_data[0], array_data[1], array_data[2], "Channel "+array_data[3])
            }
            else{
                readVoltCurrent("lowspan", array_data[0], array_data[1], array_data[2], "Channel "+array_data[3])
            }
        }
        else{
            changeText("myspan", array_data[0])
        }
    })
};

function addFields1(event){ //used for low voltage
    if(event.key != 'Enter'){
        return
    }
	event.preventDefault();
	var number = document.getElementById("member").value;
	if(number>5){
	    number = 5;
	    document.getElementById("member").value = number;
	}
	else if(number<1){
	    document.getElementById("member").value = 1;
	}
	var container = document.getElementById("container");
	while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
	}
	for (i=1;i<number;i++){
		container.appendChild(document.createTextNode("Channel " + (i+1)+" "));
		var input = document.createElement("input");
		var button = document.createElement("button");
		var read = document.createElement("button");
		input.type = "number";
		input.name = "channel"+(i+1);
		input.id = "channel"+(i+1);
		input.value = "0";
		input.min = "-100";
		input.max = "100";
		input.step = "0.01";
		button.type = "button";
		button.id = "channel "+(i+1);
		read.type = "button";
		read.id = "read channel "+(i+1);
		container.appendChild(input);
		container.appendChild(button);
		container.appendChild(read);
		button.appendChild(document.createTextNode("Set Voltage"));
		read.appendChild(document.createTextNode("Read Back"));
		container.appendChild(document.createElement("br"));
	}
	var children = container.childNodes;
    for(var child=container.firstChild; child!=null; child=child.nextSibling){
        if(child.type=="button"){
            name = child.id.replace(/\s/g, "");
            channel = ""
            if(name.includes("read")){
                channel = name.replace("readchannel","")
            }
            console.log(name);
            console.log(channel)
            //console.log(child.id);
            $(document.getElementById(child.id)).click((function(value){
                return function(){
                    getInput(value, channel);
                    console.log(value);
                    verify(value)
                }
            })(name));
        }
    }
}

function addFields2(event){ //used for high voltage. separate function because too many variables are different from low voltage.
    if(event.key != 'Enter'){
        return
    }
	event.preventDefault();
	var number = document.getElementById("member2").value;
	if(number>5){
	    number = 5;
	    document.getElementById("member2").value = number;
	}
	else if(number<1){
	    document.getElementById("member2").value = 1;
	}
	var container = document.getElementById("container2");
	while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
	}
	for (i=1;i<number;i++){
		container.appendChild(document.createTextNode("Channel " + (i+1)+ " "));
		var input = document.createElement("input");
		var button = document.createElement("button");
		var read = document.createElement("button");
		input.type = "number";
		input.name = "channel"+(i+6);
		input.id = "channel"+(i+6);
		input.value = "0";
		input.min = "-10000";
		input.max = "10000";
		input.step = "5";
		button.type = "button";
		button.id = "channel "+(i+6);
		read.type = "button";
		read.id = "read channel "+(i+6);
		container.appendChild(input);
		container.appendChild(button);
		container.appendChild(read);
		button.appendChild(document.createTextNode("Set Voltage"));
		read.appendChild(document.createTextNode("Read Back"));
		container.appendChild(document.createElement("br"));
	}
	var children = container.childNodes;
    for(var child=container.firstChild; child!=null; child=child.nextSibling){
        if(child.type=="button"){
            name = child.id.replace(/\s/g, "");
            channel = ""
            console.log(name);
            console.log(channel)
            //console.log(child.id);
            $(document.getElementById(child.id)).click((function(value){
                return function(){
                    if(name.includes("read")){
                        channel = name.replace("readchannel","")
                    }
                    getInput(value, channel);
                    console.log(value);
                    verify(value)
                }
            })(name));
        }
    }
}