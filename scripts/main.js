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
 text = 'Je m’appelle Cannelle Robert, j’ai 20 ans et suis actuellement étudiante en première année à l’école ESMA Nantes. Je suis dans la filière “cinéma d’animations 3D effets spéciaux” de cette école. Actuellement en première année, je réalise différentes créations en 2D et en 3D sous forme d’image. Illud autem non dubitatur quod cum esset aliquando virtutum omnium domicilium Roma, ingenuos advenas plerique nobilium, ut Homerici bacarum suavitate Lotophagi, humanitatis multiformibus officiis retentabant. '
 let overlay = document.querySelector('.overlay')
 let hamburgerBtn = document.querySelector('.hamburger')
 let navContent = document.querySelector('ul')
 let overContent = document.querySelector('.overlay-content') 
 overContent.innerHTML = navContent.innerHTML

typing()

function typing(){
    
    if(i < text.length){
        document.querySelector(".first__typed").innerHTML += text.charAt(i)
        i++
        setTimeout(typing,0)
    }
}

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
