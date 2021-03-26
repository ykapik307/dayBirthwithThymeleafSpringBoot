let butt=document.querySelector('.sub');
let day=document.querySelector('.day');
let year=document.querySelector('.year');
let month=document.querySelector('#month');
let content=document.querySelector('.modal-content');
let modal=document.querySelector('.modal');

butt.addEventListener('click',()=>{
	let dt=day.value+" "+month.value+" "+year.value;
	
	let sDt=String(dt);
	
	const birthday = new Date(sDt);
	const day1 = birthday.getDay();
	let weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	let dayyy=weekDays[day1];
	content.innerHTML=`
	<h3>You were born on : ${dayyy}</h3>
	<img src="images/${dayyy}.PNG" >
	
	`
	 modal.style.display='block';
	window.addEventListener('click',clearModal);
	
})
function clearModal(e){                //takes an argument event
    if(e.target==modal)
    {
        modal.style.display='none';
    }
 }
