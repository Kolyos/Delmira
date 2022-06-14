
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function (){
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());    
   }
};
if (isMobile.any()) {
   document.body.classList.add('_touch');
   
      let menuArrows = document.querySelectorAll('.bottom__list-link');
      if(menuArrows.length > 0){
         for (let index = 0; index < menuArrows.length; index++){
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function(e){
               menuArrow.parentElement.classList.toggle('_active')
            });
         }
      }

} else {
   document.body.classList.add('_pc');
}
const moreMenu = document.querySelector('.bottom__list-first');
const subMenu = document.querySelector('.bottom__submenu');
if(moreMenu){
   
   moreMenu.addEventListener("click", function(e){
      moreMenu.classList.toggle('_active');
      subMenu.classList.toggle('_active');
})};


const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.header__body');
if(iconMenu){
   
   iconMenu.addEventListener("click", function(e){
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
})};

const searchMenu = document.querySelector('.menu__search-mobile');
const closeBody = document.querySelector('.menu_search');
if(searchMenu){
   
   searchMenu.addEventListener("click", function(e){
      searchMenu.classList.toggle('_active');
      closeBody.classList.toggle('_active');
})};




const searchClose = document.querySelector(' .close__search');
const searchBlock = document.querySelector('.menu_search');
if(searchClose){
   searchClose.addEventListener("click", function(e){
      searchClose.classList.toggle('_active');
      searchBlock.classList.remove('_active');
})};

function ibg(){

	let ibg=document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if(ibg[i].querySelector('img')){
				ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
			}
		}
	}

ibg();

$(document).ready(function(){
   $('.slider__new').slick();
});

$(document).ready(function(){
   $('.slider__sale').slick({
      dots:true,
      slidesToShow:1,
      slidesToScroll:1
   });
});


$(document).ready(function(){
   $('.slider__contact').slick({
      slidesToShow:3,
      slidesToScroll:1
   });
});

$(document).ready(function(){
   $('.contact__slider').slick({
      slidesToShow:1
   });
});