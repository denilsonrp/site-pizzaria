/*
 * date on footer
 */
const date = new Date()
const weekday = date.getDay()
const days = document.querySelectorAll(`[data-day]`)

Array.from(days).forEach(function(el) {
  if (el.dataset.day == weekday) {
    el.classList.add('-bold')
  }
})

/*
 * open modal
 */
const ctaRatingModal = document.querySelectorAll(`[data-modal]`)

const openModal = function(e) {
  document.getElementById('wrapper-modal').classList.add('-active')
}

Array.from(ctaRatingModal).forEach(function(element) {
  element.addEventListener('click', openModal)
})

/*
 * close modal
 */

const ctaCloseModal = document.querySelectorAll(`[data-close-modal]`)

const closeModal = function(e) {
  document.getElementById('wrapper-modal').classList.remove('-active')
}

Array.from(ctaCloseModal).forEach(function(element) {
  element.addEventListener('click', closeModal)
})

/*
 * loading products
 */

const categories = document.getElementsByClassName('actRenderItemsByCategory')
const loadingItems = document.getElementById('loading-items')
const containerItems = document.getElementById('container-items')

const renderItemsByCategory = function(e) {
  e.preventDefault()
  
  const category = this.getAttribute("data-category")
  
  Array.from(categories).forEach(function(element) {
    element.classList.remove('-active')
  })
  this.classList.add('-active')
  
  containerItems.classList.add('-flex')
  loadingItems.classList.remove('_none')

  const cardProduct = containerItems.querySelectorAll('.card-product')
  cardProduct.forEach((card => {
    card.classList.add('_none')
  }))

  setTimeout(() => {
    loadingItems.classList.add('_none')
    containerItems.classList.remove('-flex')

    cardProduct.forEach((card => {
      card.classList.remove('_none')
    }))
  }, 2000)
}

Array.from(categories).forEach(function(element) {
  element.addEventListener('click', renderItemsByCategory)
})