var img =document.getElementsByClassName('img');

 	for(var i=1;i<img.length;i++){
 		img[i].addEventListener("click",function(e){
 			console.log(this);
 			document.getElementById("muestra").setAttribute("src","assets/img/"+ "img-"+[i]+".jpg");
			document.getElementById("normal").style.display="block";
	    });
    }

	
document.getElementById("normal").addEventListener("click",function (e){
		document.getElementById("cerrar").style.display="none";
});	
