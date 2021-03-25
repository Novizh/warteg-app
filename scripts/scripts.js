

function addItems(itemName, itemButton, itemPrice, cart) {
  let item = document.querySelector(itemName)
  let button = document.querySelector(itemButton)
  let cartTable = document.querySelector(cart)
  let price = document.querySelector(itemPrice)

  button.addEventListener('click', function (event) {
    let cartRow = document.createElement('tr')
    let cartItem = document.createElement('td')
    let cartPrice = document.createElement('td')

    cartPrice.innerHTML = price.innerHTML
    cartItem.innerHTML = item.innerHTML

    cartTable.appendChild(cartRow)
    cartRow.appendChild(cartItem)
    cartRow.appendChild(cartPrice)
  })
}


addItems('#telor-dadar-item', '#telor-dadar-button', '#hargaTelor', '#cart')
addItems('#kikil-item', '#kikil-button','#hargaKikil', '#cart')
addItems('#capcay-item', '#capcay-button','#hargaCapcay' ,'#cart')
addItems('#mie-goreng-item', '#mie-goreng-button','#hargaMie', '#cart')