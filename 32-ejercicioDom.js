'use strict'

window.addEventListener("load",function(){

	var formulario = document.querySelector("#formulario");
	var boxDashed=document.querySelector(".dashed");
	boxDashed.style.display="none";

	formulario.addEventListener("submit",function(){

		var nombre=document.querySelector("#nombre").value;
		var apellido=document.querySelector("#apellido").value;
		var edad=parseInt(document.querySelector("#edad").value);	
		var errorNombre=document.querySelector("#errorNombre");
		var errorApellido=document.querySelector("#errorApellido");
		var errorEdad=document.querySelector("#errorEdad");
		
		if(nombre.trim()==null ||nombre.trim().length==0 || typeof nombre=="number"){
			//alert("El nombre no es valido");
			errorNombre.style.background="#9bf096";
			errorNombre.innerHTML="El nombre no es valido.";
			return false;
		}else{
			errorNombre.style.display="none";
		}

		if(apellido.trim()==null ||apellido.trim().length==0){
			//alert("El apellido no es valido");
			errorApellido.style.background="#9bf096";
			errorApellido.innerHTML="El apellido no es valido.";
			return false;
		}else{
			errorApellido.style.display="none";
		}

		if(edad==null || edad<=0 || isNaN(edad) || edad>99){
			//alert("La edad no es valido");
			errorEdad.style.background="#9bf096";
			errorEdad.innerHTML="La edad no es valida.";
			return false;
		}else{	
			errorEdad.style.display="none";				
		}
		//Activa la caja
		boxDashed.style.display="block";
		
		var pNombre=document.querySelector("#pNombre span");
		var pApellido=document.querySelector("#pApellido span");
		var pEdad=document.querySelector("#pEdad span");

		pNombre.innerHTML=" "+nombre;
		pApellido.innerHTML=" "+apellido;
		pEdad.innerHTML=" "+edad;

	})
});