window.addEventListener("load", function() {
	var boton = document.getElementById("boton");
	boton.addEventListener("click", function() {
		var seconds = parseInt(document.getElementById("seconds").value);

		setInterval(color, seconds*1000);

		seconds = parseInt(document.getElementById("seconds").value ="");


		function color (){
			document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
		}
	});
});