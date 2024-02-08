const getacctitles = document.getElementsByClassName('acctitle');
// console.log(getacctitles);//HTML Collection
const getactivecontents = document.querySelectorAll('.acccontent');
// console.log(getactivecontents); //NodeList

// console.log(getacctitles.length)//4

// console.log(getacctitles[0]); // element
// console.log(getacctitles[1]); // element
// console.log(getacctitles[2]); // element
// console.log(getacctitles[3]); // element

for(var x = 0;x < getacctitles.length;x++){
	// console.log(x); // 0 to 3
	// console.log(getacctitles[x]);

	getacctitles[x].addEventListener('click',function(e){

		// console.log('hay');
		// console.log(x); //4
		// console.log(getacctitles[x]); // undefined

		// console.log(e);
		// console.log(e.target);  // current h1
		// console.log(this);

		// e.target.classList.toggle('active'); // toggle က classList နဲ့ပဲ အလုပ်လုပ်မယ် because of Array 
		this.classList.toggle('active'); 

						//acctitle  acccontent
		const getcontent = this.nextElementSibling;
		// console.log(getcontent);
		// console.log(getcontent.scrollHeight+"px");

		// getcontent.style.height = getcontent.scrollHeight+"px";


		if(getcontent.style.height){
			// remove
			getcontent.style.height = null; //beware can't set 0 
			getcontent.style.transition = "0.3s"; 
		}else{
			// add
			getcontent.style.height = getcontent.scrollHeight+"px";
			getcontent.style.transition = "0.3s";

		}

	});


	if(getacctitles[x].classList.contains('active')){
		getactivecontents[x].style.height = getactivecontents[x].scrollHeight+"px";
		// getactivecontents[x].style.transition = "0.3s";		
	}


}//25GA

