import data from "./data/classes"
import {tns} from 'tiny-slider/src/tiny-slider'

class App {

  constructor(slider) {
    this.slider = slider
    this.tns = ""
    this.data = data.classes
  }
  
  menuActions() {

    const button = document.querySelector(".main-header .btn-menu")
    const header = document.querySelector(".main-header")
    const toggleClass = () => header.classList.toggle("active")
    button.addEventListener("click", toggleClass)
  }

  filterActions() {

    const check = document.querySelectorAll(".check li")
    const self = this
    const classes = data.classes
    

    for (let i in check) 
      if (typeof check[i] == "object")
        check[i].addEventListener("click", function(e) {
          e.preventDefault()
          this.classList.toggle("active")
          const type = this.dataset.type
          /*const items = document.getElementsByClassName(type)
          if (this.classList.contains("active")) 
            for (let j in items) 
              if (typeof items[j] == "object")
                items[j].classList.add("active")
           else  
            for (let k in items)
              if (typeof items[j] == "object") 
                items[k].classList.remove("active")*/

          /*self.data = classes.filter((classes) => classes.type == "aquatic")
          self.tns.destroy()

          const slider = document.querySelector(".slider")
          slider.innerHTML = ""
          self.createSlider()*/
        })
  }

  createSlider() {
    const classes = this.data
    //console.log(classes)
    // Create the fields from json file
    for (let i in classes) {
      const sliderItem = document.createElement("li")
      sliderItem.classList.add(classes[i].type)
      sliderItem.classList.add("active")
      
      const title = document.createElement("div")
      title.classList.add("title")
      title.innerHTML = classes[i].title
      
      const description = document.createElement("div")
      description.classList.add("description")
      description.innerHTML = classes[i].description

      this.slider.appendChild(sliderItem)
      sliderItem.appendChild(title)
      sliderItem.appendChild(description)
    }

    this.tns = tns({
      container: this.slider,
      items: 1,
      responsive: {
        480: 2,
        768: 4
      },
      slideBy: 'page',
      autoplay: false,
      gutter: 20,
      controls: false
    })
  }

  render() {
    this.menuActions()
    this.filterActions()
    this.createSlider()
  }
}

export default App