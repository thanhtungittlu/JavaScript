var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

const tabs_item =  $$('.tab-item')
const tabs_pane =  $$('.tab-pane')

const tabs_active = $('.tab-item.active')
const line = $(".tabs .line")

line.style.left =tabs_active.offsetLeft + 'px'
line.style.width =tabs_active.offsetWidth + 'px'


tabs_item.forEach((tab,index) => {
    const pane = tabs_pane[index]
    tab.onclick = function(){
      $('.tab-item.active').classList.remove('active') // remove active cũ
      $('.tab-pane.active').classList.remove('active')

      line.style.left =this.offsetLeft + 'px'
      line.style.width =this.offsetWidth + 'px'

      this.classList.add('active')
      pane.classList.add('active')
    }
})

