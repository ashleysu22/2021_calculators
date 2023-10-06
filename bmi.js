let button = document.getElementById('bmi_btn');

button.addEventListener('click', () => {
	const height = parseInt(document.getElementById('height').value);
	const weight = parseInt(document.getElementById('weight').value);
	const result = document.getElementById('bmi_result');
	
	let h_status=false, w_status=false;
	
	if(height === '' || isNaN(height) || (height<= 0)){
		document.getElementById('height_error').innerHTML = '*Invalid height';	
	}else{
		document.getElementById('height_error').innerHTML = '';	
		h_status=true;
	}
	
	if(weight === '' || isNaN(weight) || (weight<= 0)){
		document.getElementById('weight_error').innerHTML = '*Invalid weight';	
	}else{
		document.getElementById('weight_error').innerHTML = '';	
		w_status=true;
	}
	
	if(h_status && w_status){
		const bmi = (weight / ((height*height)/10000)).toFixed(2);
		
		if(bmi < 18.6){
			result.innerHTML = "Under weight: " + bmi;
		}else 
		if(bmi >= 18.6 && bmi < 24.9){
			result.innerHTML = "Normal: " + bmi;
		}else {
			result.innerHTML = "Over weight: " + bmi;
		}
	}else{
		alert('The form has errors.');
		result.innerHTML = '';
	}
});