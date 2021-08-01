window.addEventListener('load', function load(event){
    var addItem = document.getElementById('phoneNumber');
    addItem.addEventListener('keyup', function() { generateLink(); });
});

function generateLink()
		{
			var phone=document.getElementById("phoneNumber").value;
			phone=parseFloat(phone);
			if(isNaN(phone)==true)
			{
				document.getElementById("informationText").innerHTML="Please input phone number";
			}
			else{
			document.getElementById("informationText").innerHTML="";
			var output=document.getElementById("outputButton");
			output.innerHTML='<button><a href="https://web.whatsapp.com/send?phone='+phone+'" target="_blank" rel="noopener">Start Message</a></button>';	
			//output.innerHTML='<button><a href="https://api.whatsapp.com/send?phone='+phone+'" target="_blank" rel="noopener">Start Message</a></button>';	
			
			}			
			console.log(phone);		
		}
