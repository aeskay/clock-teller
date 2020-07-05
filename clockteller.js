function prompter(){
			var promptBox = prompt("What is your name?");
			var time= new Date();
			var hour = time.getHours();

			var ppt = document.getElementById("promptName");
			var msg = document.getElementById("message");
			if (hour >=12 && hour <= 16 ) {
				ppt.innerHTML = "and good afternoon, " + promptBox;
			    msg.innerHTML = "How is the day going? " + promptBox;
			} else if (hour >=17 && hour <= 21 ){
				ppt.innerHTML = "and good evening, " + promptBox;
			    msg.innerHTML = "Hope the day went well? " + promptBox;
			}  else if (hour >=22 && hour <= 24 ){
				ppt.innerHTML = "and good night, " + promptBox;
			    msg.innerHTML = "It's pretty late " + promptBox +". You really should sleep now :-)";
			} else{
				ppt.innerHTML = "and good morning, " + promptBox;
			    msg.innerHTML = "Do enjoy your day! " + promptBox;
			}
			
		}

	

		function showTime(){
			var time = new Date();
			var hour = time.getHours();
			var minute = time.getMinutes();
			var second = time.getSeconds();

			 if (hour > 12 && hour <= 24) {
				var ampm = document.getElementById("ampm");
				ampm.innerHTML = "PM";
				hour = hour-12;
				
			} else if (hour = 12){
				var ampm = document.getElementById("ampm");
				ampm.innerHTML = "PM";
			}
			
			else {
				var ampm = document.getElementById("ampm");
				ampm.innerHTML = "AM";
			}

			if (hour < 10) {
				hour  = "0"+ hour ;
			} else {
				hour  = hour ;
			}

			if (minute < 10) {
				minute = "0"+ minute;
			} else {
				minute = minute;
			}

			if (second < 10) {
				second = "0"+ second;
			} else {
				second = second;
			}


			var getTime = document.getElementById("hour");
			getTime.innerHTML = hour;
			var getTime = document.getElementById("minute");
			getTime.innerHTML = minute;
			var getTime = document.getElementById("second");
			getTime.innerHTML = second;

		}

var oneSecond = 1000;
setInterval( showTime, oneSecond);
	
