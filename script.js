function solver() {
 const a = document.getElementById("aValue").value;
 const b = document.getElementById("bValue").value;
 const x = document.getElementById("xValue").value;
 let y = Math.sqrt((Math.exp(x + 5)/(-1+x)))+Math.cos(Math.log(x))^2;
 let s = ((a * Math.cos(b * x) - 4) / (Math.exp(a - x) - (b * x))) + Math.abs(x + Math.cos(x))/(x - a);
 let result_y = document.getElementById("result_y");
 let result_s = document.getElementById("result_s");
 result_y.textContent = "y= " + y;
 result_s.textContent = "s= " + s;
}