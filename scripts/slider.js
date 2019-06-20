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

//Event for hamburger on

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

class Slider {
  constructor(selector, sliding)
  {
    this.slider = document.querySelector(selector)
    this.sliding = sliding
    this.currentPosition=0
    this.sliderContainer
    // width of items
    this.sliderCardWidth=this.slider.querySelector('.slider__image').offsetWidth
    // how much items
    this.numberItems = this.slider.querySelectorAll('.slider__image').length
    this.items = this.slider.querySelectorAll('.slider__image')

    this.arrowNext
    this.arrowPrev
    this.arrowNav

    this.init()
    this.hideArrow()
  }

  init()
  {

    // div temporary
    this.sliderContainer= document.createElement('div')
    this.sliderContainer.classList.add('sliderContainer')
    this.sliderContainer.style.width= ((this.numberItems/this.sliding) *100) +'%'
    this.sliderContainer.innerHTML = this.slider.innerHTML
    this.slider.innerHTML= '';
    this.slider.appendChild(this.sliderContainer)

    //width image
    this.sliderCardWidth = ((100/ this.sliding)/(this.numberItems/this.sliding)) + '%'

    // put arrow in slider
    this.arrowNav = document.createElement('div')
    this.arrowNav.classList.add('arrowNav')
    this.slider.appendChild(this.arrowNav)

    this.arrowNext = document.createElement('div')
    this.arrowNext.classList.add('arrowRight')
    this.arrowNav.appendChild(this.arrowNext)

    this.arrowPrev = document.createElement('div')
    this.arrowPrev.classList.add('arrowLeft')
    this.arrowNav.appendChild(this.arrowPrev)

  

    this.arrowNext.addEventListener('click',()=>
    {
      this.goTo(this.currentPosition + this.sliding)
      this.hideArrow()
    })

    this.arrowPrev.addEventListener('click',()=>
    {
      this.goTo(this.currentPosition - this.sliding)
      this.hideArrow()
    })

    
  }
      goTo (index){
        let translateX = index * -100 / this.numberItems
        this.sliderContainer.style.transform = 'translate3d(' + translateX + '%, 0, 0)'
        this.currentPosition = index
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
  //Class for chnage slider on click

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

// Function for heeader go fixed  

scroll()
const header = document.querySelector('header')
  function scroll(){
    window.addEventListener('scroll', ()=>{
      if(window.pageYOffset > header.clientHeight){
        header.style.position = 'fixed'
        header.style.animation ='animationHeader .3s'
      }
      else{
        header.style.position = 'initial'
        header.style.animation =' none'
      }
    })
  }

  