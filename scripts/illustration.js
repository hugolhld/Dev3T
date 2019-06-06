

class Slider {
    constructor(selector, sliding)
    {
      this.slider = document.querySelector(selector)
      this.sliding = sliding
      this.currentPosition=0
      this.sliderContainer
      // pour savoir la largeur d'un item
      this.sliderCardWidth=this.slider.querySelector('.slider__image').offsetWidth;
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
      this.arrowPrevImg = document.createElement('img')
      this.arrowPrevImg.setAttribute('src', "images/left-arrow.svg")
      this.arrowPrev.appendChild(this.arrowPrevImg)

  
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
      
      
  
      this.init()
    }
  
    init(){
      for(let i=0; i<this.buttons.length; i++)
      {
        this.buttons[i].addEventListener('click', ()=>{
          let target = this.buttons[i].getAttribute('data-target');
  
          for(let j=0; j< this.slider.length; j++)
          {
            if(this.slider[j].classList.contains(target))
            {
              this.slider[j].style.display= 'block'
              this.sliderContent[j].classList.add('slider')              
              let mySlider = new Slider(".slider", 1)
              this.divTemp = document.querySelector('.sliderContainer')
              console.log(this.divTemp)
              this.divTemp.classList.add('remove')
            }
            else{
              this.sliderContent[j].classList.remove('slider')
              this.slider[j].style.display= 'none'
              this.divRemove = document.querySelector('.remove')
              this.sliderContent[j].removeChild(this.divRemove)
              
              
            }
          }
        })
      }
    }
  
  }
  
  let myFilter = new Filter()
  
