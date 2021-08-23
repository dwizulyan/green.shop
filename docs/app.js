function navSlide(){
	var link = document.getElementById("link");
	if(link.style.left === "-50%"){
		link.style.left = "0";
	}
	else {
		link.style.left = "-50%"
	}
}