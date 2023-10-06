const calories = document.querySelector(".bmr_result .calories");
const calculateBtn = document.querySelector(".bmrpage #bmr_btn");
const age = document.querySelector(".bmrpage #age");
const height = document.querySelector(".bmrpage #height");
const weight = document.querySelector(".bmrpage #weight");

const calculateBMR = (weight, height, age, gender) =>{
	var g = document.getElementsByName('gender');
	for(i = 0; i < g.length; i++){
		if(g[i].checked){
			if(g[i].value == "male"){
				return 10*weight + 6.25*height - 5*age + 5;
			}
			return 10*weight + 6.25*height - 5*age - 161;
		}
	}
};

calculateBtn.addEventListener("click", () => {
	let genderValue = document.querySelector(".bmrpage input[name='gender']:checked").value;
	let BMR = calculateBMR(weight.value, height.value, age.value, genderValue.value);
		
	calories.innerHTML = BMR.toLocaleString("en-UK");

	//input validation
	if(age.value == "" || age.value < 10 || age.value > 100){
		calories.innerHTML = '0';
		alert("Invalid Age");
		return false;
	}else if(height.value == "" || height.value < 60 || height.value > 260){
		calories.innerHTML = '0';
		alert("Invalid Height");
		return false;
	}else if(weight.value == "" || weight.value < 20 || weight.value > 700){
		calories.innerHTML = '0';
		alert("Invalid Weight");
		return false;
	}
	
	if(age.value && height.value && weight.value){
		calories.innerHTML = BMR.toLocaleString("en-UK");
	}else{
		calories.innerHTML = '0';
	}
	
});