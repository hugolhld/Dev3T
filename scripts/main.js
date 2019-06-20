/**
             * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
             *
             * @private
             * @author Todd Motto
             * @link https://github.com/toddmotto/foreach
             * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
             * @callback requestCallback      callback   - Callback function for each iteration.
             * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
             * @returns {}
             */
            var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
          
            var hamburgers = document.querySelectorAll(".hamburger");
            if (hamburgers.length > 0) {
                forEach(hamburgers, function(hamburger) {
                hamburger.addEventListener("click", function() {
                    this.classList.toggle("is-active");
                }, false);
                });
            }


 let i = 0,text
 text = 'Je m’appelle Cannelle Robert, j’ai 20 ans et je suis actuellement étudiante à l’école ESMA (École Supérieure des Métiers Artistiques) à Nantes. Je suis dans la filière “Cinéma d’animations 3D effets spéciaux” de cette école. Dans ce portfolio, vous trouverez tous mes travaux réalisées lors de ma première année d\'études.'
 let overlay = document.querySelector('.overlay')
 let hamburgerBtn = document.querySelector('.hamburger')
 let navContent = document.querySelector('ul')
 let overContent = document.querySelector('.overlay-content') 
 let hamburgerDivP = document.querySelector('.menu__hamburger p')
 let footLogo = document.querySelector('footer a img')
 let headerBackground = document.querySelector('.background')
 overContent.innerHTML = navContent.innerHTML

footLogo.addEventListener('mouseover', ()=>{
    footLogo.src = ('images/instagram (2).svg')
})

footLogo.addEventListener('mouseout', ()=>{
    footLogo.src = ('images/instagram (1).svg')
})

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset >= headerBackground.clientHeight/2){
        typing()
    }
})


function typing(){
    
    if(i < text.length){
        document.querySelector(".first__typed").innerHTML += text.charAt(i)
        i++
        setTimeout(typing,50)
    }
}

/* class Writing{
    constructor(selector){
        this.text = 'text'
        this.selector = document.querySelector(selector)
        this.init()
    } 
    init(){
        let i = 0
        if(i < text.length){
            this.selector.innerHTML += this.text.charAt(i)
            i++
            setTimeout(this.init, 5)

        }
    }
}

let writingBio = new Writing(".first__typed") */

hamburgerBtn.addEventListener(
    'click',
    function(){
        if(overlay.classList.contains("overlay-on")){
            overlay.classList.remove('overlay-on')
  
        }
        else{
            overlay.classList.add('overlay-on')
        }
    }
  )


