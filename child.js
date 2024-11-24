


// $('.custom-header-mobile-menus .hs-item-has-children > a').after(' <div class="child-trigger"></div>');
// $('.child-trigger').click(function() {
//   $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
//   $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
//   $(this).next('.hs-menu-children-wrapper').slideToggle(250);
//   $(this).toggleClass('child-open');
//   return false;
// });



// const searchButton = document.querySelector(".child-theme span.custom-search")
// const closeButton = document.querySelector(".child-theme a.search-close")
// const childTheme = document.querySelector(".child-theme")
// const formWrapper = document.querySelector(".search-style-fullscreen")


// searchButton.addEventListener("click", ()=>{
//   formWrapper.classList.add("search-open")
//   childTheme.classList.add("disable-scroll")
// })
// closeButton.addEventListener("click", ()=>{
//   formWrapper.classList.remove("search-open")
//   childTheme.classList.remove("disable-scroll")

// })

// const mobileTrigger = document.querySelector(".child-theme .custom-mobile-trigger")
// const mobileMenu = document.querySelector(".child-theme nav.custom-header-mobile-menus")
// const closeIcon = document.querySelector(".child-theme .custom-header-menu-closeIcon .mobi-overlay")



// mobileTrigger.addEventListener("click", ()=>{
//   mobileMenu.classList.add("menu-open")
//   closeIcon.classList.add("icon-open")
//   childTheme.classList.add("nav-open")

// })
// closeIcon.addEventListener("click", ()=>{
//   mobileMenu.classList.remove("menu-open")
//   closeIcon.classList.remove("icon-open")
//   childTheme.classList.remove("nav-open")

// })

// const menuTrigger = document.querySelector(".mobile-menu")
// const childTheme = document.querySelector(".child-theme")
// if(menuTrigger){
//   menuTrigger.addEventListener("click", ()=>{
//     menuTrigger.classList.toggle("open")
//     childTheme.classList.toggle("mobile-open")
//   })
// }
// setTimeout(() => {
//   $('.newsletter-form .form-section form .hs-form-field').append('<div class="mail-icon"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg></div>');
// }, 500);

// $('.custom-header-navigation .hs-item-has-children > a').after("<div class=child-trigger></div>")
// $('.child-trigger').click(function() {
//   $(this).next('.hs-menu-children-wrapper').slideToggle(250);
//   $(this).toggleClass('child-open');
//   $(this).parent().toggleClass('submenu-open');
//   return false;
// });

// // header
// window.addEventListener('scroll', function () {
//   document.body.classList.toggle('sticky', window.scrollY > 80)
// })

// setInterval(function () {
//   var headerHeight = $('.custom-main-header-wrapper').outerHeight();
//   $('.custom-main-header-wrapper').css('min-height', headerHeight);
// }, 50);
// setInterval(function () {
//   const headerWrapper= document.querySelector(".custom-main-header-wrapper") 
//   const headerHeight = headerWrapper.offsetHeight
//   headerWrapper.style.minHeight = headerHeight + 'px';
// }, 50);

// $( '.child-theme .menu-main-menu-container .hs-menu-wrapper>ul>li' ).each( function () {
//   $( this ).children( '.hs-menu-children-wrapper' ).css( {
//     marginLeft: ($( this ).children( '.hs-menu-children-wrapper' ).innerWidth() / 2) * -1
//   } );
// } );
// var liElements = document.querySelectorAll('.child-theme .menu-main-menu-container .hs-menu-wrapper > ul > li');

// liElements.forEach(function(li) {
//   var childrenWrapper = li.querySelector('.hs-menu-children-wrapper');
//   if (childrenWrapper) {
//     var marginLeftValue = (childrenWrapper.offsetWidth / 2) * -1;
//     childrenWrapper.style.marginLeft = marginLeftValue + 'px';
//   }
// });


// const mobileTrigger = document.querySelector(".child-theme .menu-button")
// const childTheme = document.querySelector(".child-theme")

// if(mobileTrigger){
//   mobileTrigger.addEventListener("click",()=>{
//     childTheme.classList.toggle("mobile-menu-open")
//   })
// }

// $('.child-theme .custom-header-mobile-menu .hs-menu-wrapper > ul > li.hs-item-has-children > a').after(' <div class="child-trigger"></div>');
// $('.child-trigger').click(function() {
//   $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
//   $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
//   $(this).next('.hs-menu-children-wrapper').slideToggle(250);
//   $(this).toggleClass('child-open');
//   return false;
// });

// text.forEach(function(txt){
//     const newLink = document.createElement('a')
//     newLink.setAttribute('href', val)
//     console.log(newLink)
// })


const mobileTrigger = document.querySelector(".inner-header a.btn-menu");
const main = document.getElementsByTagName('html')[0]; // Access the first (and only) <html> element
mobileTrigger.addEventListener("click", function(){
  main.classList.toggle('menu-open');
});

const links = document.querySelectorAll('.mobile-menu .hs-menu-wrapper>ul>li.hs-item-has-children>a')
const childLinks = document.querySelectorAll('.mobile-menu .hs-menu-wrapper>ul>li.hs-item-has-children > ul')


links.forEach(link=>{
  const childTrigger = document.createElement('div')
  childTrigger.classList.add("child-trigger")
  link.after(childTrigger)
})

links.forEach((lnk, index)=>{
  if(index < childLinks.length){
    let title = lnk.innerText;
    let backLink = document.createElement('a')
    backLink.classList.add('backLink')
    backLink.setAttribute('href', 'javascript:void(0);');
    backLink.textContent = `${title}`
    childLinks[index].prepend(backLink)
    backLink.addEventListener('click', function(){
      let parent = this.parentNode.parentNode;
      parent.classList.remove('child-open')
    })
  }
})


const trigger = document.querySelectorAll(".mobile-menu .hs-menu-wrapper>ul>li.hs-item-has-children>.child-trigger")
trigger.forEach(child=>{
  child.addEventListener('click', function(e){
    let parentWrp = this.parentElement
    parentWrp.classList.add('child-open')
  })
})

