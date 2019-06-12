let overlay = document.querySelector('.overlay')
 let hamburgerBtn = document.querySelector('.hamburger')
 let navContent = document.querySelector('ul')
 let overContent = document.querySelector('.overlay-content') 
 overContent.innerHTML = navContent.innerHTML

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

class Slider {
    constructor(selector, sliding)
    {
      this.slider = document.querySelector(selector)
      this.sliding = sliding
      this.currentPosition=0
      this.sliderContainer
      // pour savoir la largeur d'un item
      this.sliderCardWidth=this.slider.querySelector('.slider__image').offsetWidth
      // pour savoir combien il y a d'items
      this.numberItems = this.slider.querySelectorAll('.slider__image').length
  
      this.arrowNext
      this.arrowPrev
      this.arrowNav
  
      this.init()
  
      this.hideArrow()
      //this.filter()
    }
  
    init()
    {
  
      // ajout de la div intermédiaire
      this.sliderContainer= document.createElement('div')
      this.sliderContainer.classList.add('sliderContainer')
      this.sliderContainer.style.width= this.numberItems*this.sliderCardWidth +'px'
      this.sliderContainer.innerHTML = this.slider.innerHTML
      this.slider.innerHTML= '';
      this.slider.appendChild(this.sliderContainer)
  
      // ajout des fleches
      this.arrowNav = document.createElement('div')
      this.arrowNav.classList.add('arrowNav')
      this.slider.appendChild(this.arrowNav)
  
      this.arrowNext = document.createElement('div')
      this.arrowNext.classList.add('arrowNext')
      this.arrowNav.appendChild(this.arrowNext)
      this.arrowUP = document.createElement('div')
      this.arrowUP.classList.add('up')
      this.arrowDN = document.createElement('div')
      this.arrowDN.classList.add('down')
      this.arrowNext.appendChild(this.arrowUP)
      this.arrowNext.appendChild(this.arrowDN)
  
      this.arrowPrev = document.createElement('div')
      this.arrowPrev.classList.add('arrowPrevious')
      this.arrowNav.appendChild(this.arrowPrev)
      this.arrowUP = document.createElement('div')
      this.arrowUP.classList.add('up')
      this.arrowDN = document.createElement('div')
      this.arrowDN.classList.add('down')
      this.arrowPrev.appendChild(this.arrowUP)
      this.arrowPrev.appendChild(this.arrowDN)
  
      this.arrowNext.addEventListener('click',()=>
      {
        this.currentPosition = this.currentPosition + this.sliding
        let toSlide = this.sliderCardWidth*this.currentPosition
        this.sliderContainer.style.transform= 'translateX(-'+toSlide+'px)'
        this.hideArrow()
      })
  
      this.arrowPrev.addEventListener('click',()=>
      {
        this.currentPosition = this.currentPosition - this.sliding
        let toSlide = this.sliderCardWidth*this.currentPosition
        this.sliderContainer.style.transform= 'translateX(-'+toSlide+'px)'
        this.hideArrow()
      })
    }
  
  hideArrow()
    {
      if(this.currentPosition==0)
      {
        this.arrowPrev.classList.remove('is-visible')
      }
      else{
        this.arrowPrev.classList.add('is-visible')
      }
  
      if(this.currentPosition+this.sliding>=this.numberItems){
        this.arrowNext.classList.remove('is-visible')
      }
      else{
        this.arrowNext.classList.add('is-visible')
      }
  
    }
  }
  //Litrer slider

  class Filter{
    constructor()
    {
      this.buttons = document.querySelectorAll('.slider__button')
      this.slider = document.querySelectorAll('.home__slider')
      this.sliderContent = document.querySelectorAll('.slider__selection')
      this.sliderImg = document.querySelectorAll('.slider__container')
      this.sliderTitle = document.querySelectorAll('.second__title h3')
      this.btnTitle = document.querySelectorAll('.slider__button p')
      this.sliderImgDiv = document.querySelectorAll('.slider__image')
      this.buttonContainersTitle = document.querySelector('.change__title')
  
      this.init()
    }
  
    init(){
      for(let i=0; i<this.buttons.length; i++)
      {
        let targetTitle = this.buttons[i].getAttribute('data-title')
        this.btnTitle[i].innerHTML = targetTitle
        
        this.buttons[i].addEventListener('click', ()=>{
          let target = this.buttons[i].getAttribute('data-target')
          this.sliderTitle[i].innerHTML = targetTitle
          document.documentElement.scrollTop = 0
          this.buttonContainersTitle.innerHTML = 'Dans la même catégorie'
          
          for(let j=0; j< this.slider.length; j++)
          {
            if(this.slider[j].classList.contains(target))
            {
              this.slider[j].style.display= 'block'
              this.sliderContent[j].classList.add('slider')
              if(this.sliderContent[j].firstElementChild.classList.contains('slider__image') ){
                let mySlider = new Slider(".slider", 1)
              }              
            }
            else{
              this.sliderContent[j].classList.remove('slider')
              this.slider[j].style.display= 'none'
            }
          }
        })
      }
    }
  
  }
  
  let myFilter = new Filter()
  
