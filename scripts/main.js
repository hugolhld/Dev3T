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
        setTimeout(typing,10)
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
