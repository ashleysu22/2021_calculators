let display = document.querySelector(".calculator_screen [name='display']");

let calculate = (number) =>{
	display.value += number;
}

let result = () =>{
	try{
		display.value=eval(display.value);
	}
	catch(err){
		display.value = "Error";
	}
}

function clearNum(){
	display.value = " ";
}

function deleteNum(){
	display.value = display.value.slice(0,-1);
	//0 is the starting point
	//-1 is the end of the number
	//if change to -2, it will delete the last two numbers
}
