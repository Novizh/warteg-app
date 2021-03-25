const items = [
  { name: 'telor-dadar' },
  { name: 'kikil' },
  { name: 'capcay' },
  { name: 'mie-goreng' },
  { name: 'ayam-goreng' },
  { name: 'ayam-bakar' },
  { name: 'ayam-krispi' },
  { name: 'nasi' },
  { name: 'ayam-geprek' },
  { name: 'nasi-kuning' },
]

let cartTable = document.querySelector('#cart')

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function createFoodCard(name) {
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
  itemPrice.setAttribute('class', 'p p-3 font-weight-bold text-gray-800')
  itemPrice.innerHTML = 'Rp 5.000' // buat dinamis

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

function addItems(itemName, itemButton) {
  let item = document.querySelector(itemName)
  let button = document.querySelector(itemButton)

  button.addEventListener('click', function (event) {
    let cartRow = document.createElement('tr')
    let cartItem = document.createElement('td')
    cartItem.innerHTML = item.innerHTML.toUpperCase()
    
    cartTable.appendChild(cartRow)
    cartRow.appendChild(cartItem)
    
    let cartAction = document.createElement('td')
    createDeleteButton(cartAction)

    cartRow.appendChild(cartAction)
  })
}

function createDeleteButton(parent) {
  let deleteButton = document.createElement('button')
  deleteButton.innerHTML = 'remove'
  parent.appendChild(deleteButton)

  deleteButton.addEventListener('click', function (event) {
    let rowDelete = deleteButton.closest('tr')
    let mainTable = rowDelete.closest('table')

    mainTable.removeChild(rowDelete)
  })

}

// function callings
let colorCounter = 0
for (let i = 0; i < items.length; i++) {
  createFoodCard(items[i].name)
  addItems(`#${items[i].name}-item`, `#${items[i].name}-button`)
  colorCounter++
}