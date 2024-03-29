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

            let overlay = document.querySelector('.overlay')
            let hamburgerBtn = document.querySelector('.hamburger')
            let navContent = document.querySelector('ul')
            let overContent = document.querySelector('.overlay-content') 
            let hamburgerDivP = document.querySelector('.menu__hamburger p')
            let hamburgerDiv = document.querySelector('.menu__hamburger')
            let hamburgerDivImg = document.querySelector('.hamburger__image')
            overContent.innerHTML = navContent.innerHTML
           
            hamburgerBtn.addEventListener(
             'click',
             function(){
                 if(overlay.classList.contains("overlay-on")){
                     overlay.classList.remove('overlay-on')
                     hamburgerDiv.style.display = 'flex'
                     hamburgerDivImg.style.display = 'block' 
                 }
                 else{
                     overlay.classList.add('overlay-on')
                     hamburgerDiv.style.display = 'block'
                     hamburgerDivImg.style.display = 'none' 
                 }
             }
           )