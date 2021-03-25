function addItems(itemName, itemButton, cart) {
  let item = document.querySelector(itemName)
  let button = document.querySelector(itemButton)
  let cartTable = document.querySelector(cart)

  button.addEventListener('click', function (event) {
    let cartRow = document.createElement('tr')
    let cartItem = document.createElement('td')
    cartItem.innerHTML = item.innerHTML
    console.log(cartItem.innerHTML)

    cartTable.appendChild(cartRow)
    cartRow.appendChild(cartItem)
  })
}

addItems('#telor-dadar-item', '#telor-dadar-button', '#cart')
addItems('#kikil-item', '#kikil-button', '#cart')
addItems('#capcay-item', '#capcay-button', '#cart')
addItems('#mie-goreng-item', '#mie-goreng-button', '#cart')