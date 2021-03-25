const items = [
  { name: 'telor-dadar' },
  { name: 'kikil' },
  { name: 'capcay' },
  { name: 'mie-goreng' },
]

let cartTable = document.querySelector('#cart')

function createRow() {
  let row = document.querySelector('.row')
}

function createFoodCard() {
  let row = document.querySelector('.row')

  let cardContainer = document.createElement('div')
  cardContainer.setAttribute('class', 'col-xl-3 col-md-6 mb-4')

  let cardBorder = document.createElement('div')
  cardBorder.setAttribute('class', 'card border-left-primary shadow h-100 py-2')

  let cardBody = document.createElement('div')
  cardBody.setAttribute('class', 'card-body')

  row.appendChild(cardContainer)
  cardContainer.appendChild(cardBorder)
  cardBorder.appendChild(cardBody)

  // isi cardBody
  let itemName = document.createElement('div')
  itemName.setAttribute('id', 'telor-dadar-item') // buat dinamis
  itemName.setAttribute('class', 'text-l font-weight-bold text-primary text-uppercase mb-1')
  itemName.innerHTML = 'Telor Dadar' //buat dinamis

  // pic
  let itemPic = document.createElement('div')
  itemPic.setAttribute('class', 'row no-gutters align-items-center')

  let itemPicInner = document.createElement('div')
  itemPicInner.setAttribute('class', 'col mr-2')

  let imgData = document.createElement('img') //buat dinamis
  imgData.setAttribute('class', 'img-thumbnail rounded mx-auto') 
  imgData.setAttribute('src', './assets/telur-dadar-warteg.jpg')
  imgData.setAttribute('alt', 'telor dadar')

  itemPicInner.appendChild(imgData)
  itemPic.appendChild(itemPicInner)

  //
  let itemPrice = document.createElement('div')
  itemPrice.setAttribute('class', 'p p-3 font-weight-bold text-gray-800')
  itemPrice.innerHTML = 'Rp 5.000' //buat dinamis

  let itemButton = document.createElement('div')
  itemButton.setAttribute('id', 'telor-dadar-button') // buat dinamis
  itemButton.setAttribute('class', 'btn btn-success btn-icon-split float-right')
  itemButton.innerHTML = 'Pesan'

  cardBody.appendChild(itemName)
  cardBody.appendChild(itemPic)
  cardBody.appendChild(itemPrice)
  cardBody.appendChild(itemButton)
}

createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()
createFoodCard()


function addItems(itemName, itemButton) {
  let item = document.querySelector(itemName)
  let button = document.querySelector(itemButton)

  button.addEventListener('click', function (event) {
    let cartRow = document.createElement('tr')
    let cartItem = document.createElement('td')
    cartItem.innerHTML = item.innerHTML
    console.log(cartItem.innerHTML)

    cartTable.appendChild(cartRow)
    cartRow.appendChild(cartItem)
  })
}

for (let i = 0; i < items.length; i++) {
  addItems(`#${items[i].name}-item`, `#${items[i].name}-button`)
}