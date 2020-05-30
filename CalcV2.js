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
		document.querySelector("#result").textContent="Найменше число, сума кожного елемента це: " + calc();
	}
}
function calc(){
		let min = 999999;
		let temp = 0;
		let tempNum;
		let idCalc = 0;
	for (let i = 0; i < 5; i++) {
		tempNum = inputVar[i].value;
		for(let j = 0; j < 6; j++){
			temp += tempNum % 10;
			tempNum = Math.floor(tempNum / 10);
		}
		if(min > temp)
		{
			min = temp;
			idCalc = i;
		}
		temp = 0;
	}
	return inputVar[idCalc].value;
}