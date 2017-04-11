var img =document.getElementsByClassName('img');
var showModal=function(e){
 			document.getElementById("muestra").src=this.firstElementChild.src
 			// this.firstElementChild.setAttribute("src","assets/img/"+ "img-"+(i)+".jpg");
			document.getElementById("normal").style.display="block";
	    };
 	for(var i=0;i<img.length;i++){
 		img[i].addEventListener("click",showModal);
    }
	
document.getElementById("cerrar").addEventListener("click",function (e){
		document.getElementById("normal").style.display="none";
});	
