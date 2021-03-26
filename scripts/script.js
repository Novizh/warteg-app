const listMakanan = [
  { name: 'telor-dadar', price: 12000 },
  { name: 'kikil', price: 13000 },
  { name: 'capcay', price: 11000 },
  { name: 'mie-goreng', price: 5000 },
  { name: 'ayam-goreng', price: 6000 },
  { name: 'ayam-bakar', price: 7000 },
  { name: 'ayam-krispi', price: 8000 },
  { name: 'ayam-geprek', price: 11000 },
  // { name: 'nasi', price: 9000 },
  // { name: 'nasi-kuning', price: 10100 },
]
const listMinuman = [
  { name: 'air-putih', price: 1000 },
  { name: 'es-teh', price: 3000 },
  { name: 'es-jeruk', price: 3500 },
  { name: 'soda', price: 5000 },
  { name: 'es-coklat', price: 5000 },
  { name: 'enerjen', price: 5000 },
  { name: 'kofimix', price: 3000 },
  { name: 'es-susu', price: 2000 }
]

let cartTable = document.querySelector('#cart')

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatNumberToCurrency(num) {
  return Intl.NumberFormat('id').format(num)
}

function createFoodCard(name, price) {
  let row = document.querySelector('.row')

  let cardContainer = document.createElement('div')
  cardContainer.setAttribute('class', 'col-xl-3 col-md-6 mb-4')

  let cardBorder = document.createElement('div')
  if (colorCounter % 4 === 0) cardBorder.setAttribute('class', 'card border-left-primary shadow h-100 py-2') // buat dinamis
  if (colorCounter % 4 === 3) cardBorder.setAttribute('class', 'card border-left-success shadow h-100 py-2') // buat dinamis
  if (colorCounter % 4 === 2) cardBorder.setAttribute('class', 'card border-left-info shadow h-100 py-2') // buat dinamis
  if (colorCounter % 4 === 1) cardBorder.setAttribute('class', 'card border-left-warning shadow h-100 py-2') // buat dinamis

  let cardBody = document.createElement('div')
  cardBody.setAttribute('class', 'card-body')

  row.appendChild(cardContainer)
  cardContainer.appendChild(cardBorder)
  cardBorder.appendChild(cardBody)

  // isi cardBody
  let itemName = document.createElement('div')
  itemName.setAttribute('id', `${name}-item`) // buat dinamis/
  itemName.setAttribute('class', 'text-l font-weight-bold text-primary text-uppercase mb-1')
  itemName.innerHTML = name.split('-').join(' ') //buat dinamis/

  // pic
  let itemPic = document.createElement('div')
  itemPic.setAttribute('class', 'row no-gutters align-items-center')

  let itemPicInner = document.createElement('div')
  itemPicInner.setAttribute('class', 'col mr-2')

  let imgData = document.createElement('img')
  imgData.setAttribute('class', 'img-thumbnail rounded mx-auto')
  imgData.setAttribute('src', `./assets/${name}.jpg`) // buat dinamis/
  imgData.setAttribute('alt', `${name}`) // buat dinamis/

  itemPicInner.appendChild(imgData)
  itemPic.appendChild(itemPicInner)

  //
  let itemPrice = document.createElement('div')
  itemPrice.setAttribute('id', `${name}-price`)
  itemPrice.setAttribute('class', 'p p-3 font-weight-bold text-gray-800')
  itemPrice.innerHTML = `Rp ${formatNumberToCurrency(price)}` // buat dinamis, format angka rupiah // buat fungsi

  let itemButton = document.createElement('div')
  itemButton.setAttribute('id', `${name}-button`) // buat dinamis/
  itemButton.setAttribute('class', 'btn btn-success btn-icon-split float-right')

  let itemButtonText = document.createElement('span')
  itemButtonText.setAttribute('class', 'text')
  itemButtonText.innerHTML = 'Pesan'

  itemButton.appendChild(itemButtonText)

  cardBody.appendChild(itemName)
  cardBody.appendChild(itemPic)
  cardBody.appendChild(itemPrice)
  cardBody.appendChild(itemButton)
}

function addItems(obj, itemName, itemButton, itemPrice) {
  let item = document.querySelector(itemName)
  let button = document.querySelector(itemButton)
  let price = document.querySelector(itemPrice)

  button.addEventListener('click', function (event) {
    let cartRow = document.createElement('tr')
    let cartItem = document.createElement('td')
    let cartPrice = document.createElement('td')
    cartItem.innerHTML = item.innerHTML.toUpperCase()
    cartPrice.innerHTML = price.innerHTML

    cartTable.appendChild(cartRow)
    cartRow.appendChild(cartItem)
    cartRow.appendChild(cartPrice)

    let cartAction = document.createElement('td')
    createDeleteButton(cartAction, obj)

    cartRow.appendChild(cartAction)

    console.log(itemPrice)
    totalPrice += obj.price
    calculateTotal()
  })
}

function createDeleteButton(parent, obj) {
  let deleteButton = document.createElement('button')
  deleteButton.innerHTML = 'Remove'
  deleteButton.setAttribute('class', 'btn btn-danger');

  parent.appendChild(deleteButton)

  deleteButton.addEventListener('click', function (event) {
    let rowDelete = deleteButton.closest('tr')
    let mainTable = rowDelete.closest('table')

    mainTable.removeChild(rowDelete)

    totalPrice -= obj.price
    calculateTotal()
  })

}

function calculateTotal() {
  let totalPriceColumn = document.querySelector('#total-harga')
  totalPriceColumn.innerHTML = 'Rp ' + formatNumberToCurrency(totalPrice)
}


// experimental

function updateOrder(something) {
  let updateButton = document.querySelector('.update-button')
  // let medium = document.querySelector('.medium')
  // let big = document.querySelector('.big')
  // let tabelRow = extra.closest('tr')
  updateButton.addEventListener('click', function (event) {

  })
}


// function createMenus() {
//   // let menuMinuman = document.querySelector('#menu-minuman')

//   // let buttonMakanan = document.createElement('#button-makanan')
//   // let buttonMinuman = document.createElement('#button-minuman')

//   let buttonMakanan = document.querySelector('#button-makanan')
//   let buttonMinuman = document.querySelector('#button-minuman')

//   buttonMakanan.addEventListener('click', function (event) {
//     // console.log('masuk')
//     let menuList = document.querySelector('.col-xl-3')
//     let row = menuList.closest('.row')
//     row.removeChild(menuList)

//     generateCardList(listMakanan)
//   })

//   buttonMinuman.addEventListener('click', function (event) {
//     let menuList = document.querySelector('.col-xl-3')
//     let row = menuList.closest('.row')
//     row.removeChild(menuList)

//     generateCardList(listMinuman)
//   })
// }




// experimental

// function createNewCategoryMenu() {
//   let menuDiv = document.querySelector('#menu')
//   let newCategoryMenu = document.createElement('button')
//   newCategoryMenu.innerHTML = 'makanan'

//   menuDiv.appendChild(newCategoryMenu)
// }

// createNewCategoryMenu()
// createNewCategoryMenu()

// function swapCategoryList(menuList) {
//   let row = document.querySelector('.row')
// }

// function callings
let totalPrice = 0
let colorCounter = 0
function generateCardList(items) {
  for (let i = 0; i < items.length; i++) {
    createFoodCard(items[i].name, items[i].price)
    addItems(items[i], `#${items[i].name}-item`, `#${items[i].name}-button`, `#${items[i].name}-price`)
    colorCounter++
  }
}

generateCardList(listMinuman)
// createMenus()