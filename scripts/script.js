let addButton = document.querySelector('#tombol')
let foodCard = document.querySelector('#contoh')
let cart = document.querySelector('#cart')

addButton.addEventListener('click', function(event) {
  // let div = document.creat
  let clone = foodCard.cloneNode(true)
  cart.appendChild(clone)
  console.log('masuk')
})