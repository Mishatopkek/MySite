let flag = false;
let inputVar = document.querySelectorAll('[type="number"]');
function checkFlag(){
	for (let i = 0; i < inputVar.length; i++) {
		if(inputVar[i].value === "" || inputVar[i].value < 100000 || inputVar[i].value > 999999)
		{
			inputVar[i].placeholder="Введiть число";
			inputVar[i].style.backgroundColor="#ff0000";
			flag=false;
		}
		else{
			inputVar[i].style.backgroundColor="#ffffff";
			flag=true;
		}
	}
}

document.querySelector("#clear").onclick=function(){
	for (let i = 0; i < inputVar.length; i++) {
		inputVar[i].style.backgroundColor="#ffffff";
		inputVar[i].placeholder="Введiть значення";
		inputVar[i].value="";
		document.querySelector("#result").textContent="";
	}
}
function solver(){
	checkFlag();
	if(flag){
		document.querySelector("#result").textContent="Самое меньше среди читал " + calc() +  " цифр";
	}
}
function calc(){
	let temp =inputVar[0]
	let count = 0;
		for(let i = 1; i < 5; i++){
			if(temp < inputVar[i])
				count = i;
			}
		return inputVar[count].value;
}