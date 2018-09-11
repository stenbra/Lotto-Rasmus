//slumptal mellan 1 och 39
//OBS dålig kod, mjlighet till dublikat => använd inte ;)
function lottoRad() {
	arra = [];
	
	for (var i=0; i<=6; i++) {

		let lottery = Math.floor(Math.random() * 38)+1;
		arra[i]=lottery;
	 	
		for(var l=i;l>=0; l--){

			if(arra[i]==arra[l]){
				arra[i]= Math.floor(Math.random() * 38)+1;
			}
			
		}
		
	 	document.getElementById ("lotto_" + i).innerHTML =  arra[i];

	}
}
