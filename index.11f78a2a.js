!function(){!function(){var e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector(".mob-menu"),body:document.querySelector("body"),menuList:document.querySelector(".mob-menu-nav__list")};function t(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t),e.menuList.addEventListener("click",(function(){e.menu.classList.add("is-hidden")}))}();var e=document.getElementById("go-up-btn");function t(e){var o=document.getElementById(e);this.sldrRoot=o||document.querySelector(".sim-slider"),this.sldrList=this.sldrRoot.querySelector(".sim-slider-list"),this.sldrElements=this.sldrList.querySelectorAll(".sim-slider-element"),this.sldrElemFirst=this.sldrList.querySelector(".sim-slider-element"),this.leftArrow=this.sldrRoot.querySelector("div.sim-slider-arrow-left"),this.rightArrow=this.sldrRoot.querySelector("div.sim-slider-arrow-right"),this.indicatorDots=this.sldrRoot.querySelector("div.sim-slider-dots"),this.options=t.defaults,t.initialize(this)}window.onscroll=function(){document.body.scrollTop>150||document.documentElement.scrollTop>150?e.style.opacity=1:e.style.opacity=0},function(){var e={openHeaderModalBtn:document.querySelector("[data-header-modal-open]"),openHeroModalBtn:document.querySelector("[data-hero-modal-open]"),openOfferingsModalBtn:document.querySelector("[data-offerings-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openHeaderModalBtn.addEventListener("click",t),e.openHeroModalBtn.addEventListener("click",t),e.openOfferingsModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),document.addEventListener("DOMContentLoaded",(function(){var e=function(){document.querySelector(".nav");var e=document.querySelectorAll(".nav__link");document.querySelectorAll(".anchor").forEach((function(t){window.scrollY>=t.offsetTop-1&&e.forEach((function(e){e.classList.remove("nav__link--current"),e.dataset.section===t.dataset.section&&e.classList.add("nav__link--current")}))}))};e(),window.addEventListener("scroll",(function(){e()})),window.addEventListener("resize",(function(){e()}))})),t.defaults={loop:!0,auto:!0,interval:5e3,arrows:!0},t.prototype.elemPrev=function(e){e=e||1;var t=this.currentElement;this.currentElement-=e,this.currentElement<0&&(this.currentElement=this.elemCount-1),this.options.loop||(0==this.currentElement&&(this.leftArrow.style.display="none"),this.rightArrow.style.display="block"),this.sldrElements[this.currentElement].style.opacity="1",this.sldrElements[t].style.opacity="0",this.options.dots&&(this.dotOn(t),this.dotOff(this.currentElement))},t.prototype.elemNext=function(e){e=e||1;var t=this.currentElement;this.currentElement+=e,this.currentElement>=this.elemCount&&(this.currentElement=0),this.options.loop||(this.currentElement==this.elemCount-1&&(this.rightArrow.style.display="none"),this.leftArrow.style.display="block"),this.sldrElements[this.currentElement].style.opacity="1",this.sldrElements[t].style.opacity="0",this.options.dots&&(this.dotOn(t),this.dotOff(this.currentElement))},t.prototype.dotOn=function(e){this.indicatorDotsAll[e].style.cssText="background-color:#BBB; cursor:pointer;"},t.prototype.dotOff=function(e){this.indicatorDotsAll[e].style.cssText="background-color:#556; cursor:default;"},t.initialize=function(e){e.elemCount=e.sldrElements.length,e.currentElement=0;var t=o();function o(){return(new Date).getTime()}function n(){e.autoScroll=setInterval((function(){var n=o();n-t+10>e.options.interval&&(t=n,e.elemNext())}),e.options.interval)}e.elemCount<=1&&(e.options.auto=!1,e.options.arrows=!1,e.options.dots=!1,e.leftArrow.style.display="none",e.rightArrow.style.display="none"),e.elemCount>=1&&(e.sldrElemFirst.style.opacity="1"),e.options.loop?e.options.auto&&(n(),e.sldrList.addEventListener("mouseenter",(function(){clearInterval(e.autoScroll)}),!1),e.sldrList.addEventListener("mouseleave",n,!1)):(e.leftArrow.style.display="none",e.options.auto=!1),e.options.arrows?(e.leftArrow.addEventListener("click",(function(){var n=o();n-t>1e3&&(t=n,e.elemPrev())}),!1),e.rightArrow.addEventListener("click",(function(){var n=o();n-t>1e3&&(t=n,e.elemNext())}),!1)):(e.leftArrow.style.display="none",e.rightArrow.style.display="none")},new t,function(){var e={openFavoritesGamburgerBtn:document.querySelector("[data-favorites-gamburger-open]"),openFavoritesPastaBtn:document.querySelector("[data-favorites-pasta-open]"),openFavoritesPizzaBtn:document.querySelector("[data-favorites-pizza-open]"),openFavoritesChickenBtn:document.querySelector("[data-favorites-chicken-open]"),openFavoritesSalatBtn:document.querySelector("[data-favorites-salat-open]"),openFavoritesBorshchBtn:document.querySelector("[data-favorites-borshch-open]"),closeFavoritesYesBtn:document.querySelector("[data-modal-yes-btn]"),closeFavoritesNoBtn:document.querySelector("[data-modal-no-btn]"),modal:document.querySelector("[data-favorites-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openFavoritesGamburgerBtn.addEventListener("click",t),e.openFavoritesPastaBtn.addEventListener("click",t),e.openFavoritesPizzaBtn.addEventListener("click",t),e.openFavoritesChickenBtn.addEventListener("click",t),e.openFavoritesSalatBtn.addEventListener("click",t),e.openFavoritesBorshchBtn.addEventListener("click",t),e.closeFavoritesYesBtn.addEventListener("click",t),e.closeFavoritesNoBtn.addEventListener("click",t)}()}();
//# sourceMappingURL=index.11f78a2a.js.map
