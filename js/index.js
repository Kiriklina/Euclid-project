window.addEventListener('DOMContentLoaded', function(){
  var mySwiper = new Swiper(".swiper-container", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  document.querySelector('#header-burger-menu').addEventListener('click', function(){
    document.querySelector('#burger-menu').classList.toggle('is-active')
    document.querySelector('body').classList.toggle('hidden-scroll')
  })

  document.querySelector('#burger-close-button').addEventListener('click', function(){
    document.querySelector('#burger-menu').classList.toggle('is-active')
    document.querySelector('body').classList.toggle('hidden-scroll')
  })

  document.querySelector('#link-about-us').addEventListener('click', function(){
    document.querySelector('#burger-menu').classList.toggle('is-active')
    document.querySelector('body').classList.toggle('hidden-scroll')
  })

  document.querySelectorAll('.tabs_btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function(tabContent){
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })
})
