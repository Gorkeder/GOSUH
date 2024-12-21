if(window.innerHeight > window.innerWidth){
    if(window.innerWidth < 1000){
        alert("Пожалуйста переверните устройство в вертикальное положение или расширьте окно сайта!");
        
    }
    const ad = window.innerWidth;
    console.log(ad)
}



const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    toggleScrollTopBtn();
};

function toggleScrollTopBtn() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } 
    else {
        scrollTopBtn.style.display = "none";
    }
}


scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 

    });
    
    
    scrollTopBtn.animate([
        {transform: 'translate(0)'},
        {transform: 'translate(300px, 0)'}
    ], 400);

});





$(document).ready(function(){
	$('.slider').bxSlider({
		pager: true,
		controls: true,
		auto: true,
		mode: 'fade',
		pause: 4000,
		minSlides: 1,
		maxSlides: 1
	});
});