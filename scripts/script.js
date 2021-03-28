const listMakanan = [
    {name: 'telor-dadar', price: 12000},
    {name: 'kikil', price: 13000},
    {name: 'capcay', price: 11000},
    {name: 'mie-goreng', price: 5000},
    {name: 'ayam-goreng', price: 6000},
    {name: 'ayam-bakar', price: 7000},
    {name: 'ayam-krispi', price: 8000},
    {name: 'ayam-geprek', price:11000}
]

const listMinuman = [
    {name: 'air-putih', price: 1000},
    {name: 'es-teh', price: 3000},
    {name: 'es-jeruk', price: 3500},
    {name: 'soda', price: 5000},
    {name: 'es-coklat', price: 5000},
    {name: 'enerjen', price: 5000},
    {name: 'kofimix', price: 3000},
    {name: 'es-susu', price: 2000},
]

let cartTable = document.querySelector('#cart'); // select the first element with id 'cart'

function formatNumberToCurrency(number) {
    return Intl.NumberFormat('id').format(number);
}

function createMenuCard(name, price) {
    let row = document.querySelector('.row');

    let cardContainer = document.createElement('div');
    cardContainer.setAttribute('class', 'col-xl-3 col-md-6 mb-4');

    let cardBorder = document.createElement('div');
    // color changes based on number of cards
    if (cardCounter % 4 == 0) cardBorder.setAttribute('class', 'card border-left-primary shadow h-100 py-2');
    if (cardCounter % 4 == 3) cardBorder.setAttribute('class', 'card border-left-success shadow h-100 py-2');
    if (cardCounter % 4 == 2) cardBorder.setAttribute('class', 'card border-left-info shadow h-100 py-2');
    if (cardCounter % 4 == 1) cardBorder.setAttribute('class', 'card border-left-warning shadow h-100 py-2');
    let cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');

    row.appendChild(cardContainer);
    cardContainer.appendChild(cardBorder);
    cardBorder.appendChild(cardBody);

    // card contents
    let itemName = document.createElement('div');
    itemName.setAttribute('id', `${name}-item`);
    // color changes based on number of cards
    if (cardCounter % 4 == 0) itemName.setAttribute('class', 'text-l font-weight-bold text-primary text-uppercase mb-1');
    if (cardCounter % 4 == 3) itemName.setAttribute('class', 'text-l font-weight-bold text-sucess text-uppercase mb-1');
    if (cardCounter % 4 == 2) itemName.setAttribute('class', 'text-l font-weight-bold text-info text-uppercase mb-1');
    if (cardCounter % 4 == 1) itemName.setAttribute('class', 'text-l font-weight-bold text-warning text-uppercase mb-1');
    itemName.innerHTML = name.split('-').join(' ') // changes every dashes (-) to space ( ) in all item name

    // card images
    let itemImg = document.createElement('div');
    itemImg.setAttribute('class', 'row-no-gutters align-items-center');

    let itemImgInner = document.createElement('div');
    itemImgInner.setAttribute('class', 'col mr-2');

    let imgData = document.createElement('img');
    imgData.setAttribute('class', 'img-thumbnail rounded mx-auto');
    imgData.setAttribute('src', `./assets/${name}.jpg`); // dynamic image source based on item name being passed
    imgData.setAttribute('alt', `${name}`);
    
    itemImgInner.appendChild(imgData);
    itemImg.appendChild(itemImgInner);

    itemPrice = document.createElement('div');
    itemPrice.setAttribute('id', `${name}-price`); // dynamic set id based on item name being passed
    itemPrice.setAttribute('class', 'p p-3 font-weight-bold text-gray-800');
    itemPrice.innerHTML = `Rp. ${formatNumberToCurrency(price)}`;

    let itemButton = document.createElement('div');
    itemButton.setAttribute('id', `${name}-button`);
    itemButton.setAttribute('class', 'btn btn-success');

    let itemButtonText = document.createElement('span');
    itemButtonText.setAttribute('class', 'text');
    itemButtonText.innerHTML = 'Pesan';

    itemButton.appendChild(itemButtonText);
    
    cardBody.appendChild(itemName);
    cardBody.appendChild(itemImg);
    cardBody.appendChild(itemPrice);
    cardBody.appendChild(itemButton);
}

function addItems(obj, itemName, itemButton, itemPrice) {
    let item = document.querySelector(itemName);
    let button = document.querySelector(itemButton);
    let price = document.querySelector(itemPrice);

    button.addEventListener('click', function (event) {
        let cartRow = document.createElement('tr');
        let cartItem = document.createElement('td');
        let cartPrice = document.createElement('td');
        cartItem.innerHTML = item.innerHTML.toUpperCase();
        cartPrice.innerHTML = price.innerHTML;

        cartTable.appendChild(cartRow);
        cartRow.appendChild(cartItem);
        cartRow.appendChild(cartPrice);

        let cartAction = document.createElement('td');
        createExtraPortionButton(cartAction, cartItem);
        createDeleteButton(cartAction, obj);
        cartRow.appendChild(cartAction);
        
        // console.log(itemPrice);
        totalPrice += obj.price;
        calculateTotal();
    })
}

function createExtraPortionButton(parent, inner) { // Toggle extra portion
    let extraPortionButton = document.createElement('button');
    extraPortionButton.innerHTML = "Porsi Besar";
    extraPortionButton.setAttribute('class', 'btn btn-info');
    extraPortionButton.setAttribute('id', 'extra-portion');
    parent.appendChild(extraPortionButton);
  
    let temp = inner.innerHTML;
    extraPortionButton.addEventListener('click', function callback(event) { // callback event to handdle events for toggle buttons
        if (inner.innerHTML == temp) {
            inner.innerHTML += ' - Porsi Besar';
        } else {
            inner.innerHTML = temp;
        }
    })
}

function createDeleteButton(parent, obj) {
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Hapus';
    deleteButton.setAttribute('class', 'btn btn-danger ml-2');

    parent.appendChild(deleteButton);

    deleteButton.addEventListener('click', function (event) {
        let rowDelete = deleteButton.closest('tr'); // traverse the elements and its parents until it finds a node that match the parameter
        let mainTable = rowDelete.closest('table');

        mainTable.removeChild(rowDelete); // remove a specified child node

        totalPrice -= obj.price;
        calculateTotal();
    })
}

function calculateTotal() {
    let totalPriceColumn = document.querySelector('#total-harga');
    totalPriceColumn.innerHTML = `Rp ${formatNumberToCurrency(totalPrice)}`;
}

function chooseCategory() {
    let buttonMakanan = document.querySelector('#button-makanan');
    let buttonMinuman = document.querySelector('#button-minuman');

    buttonMakanan.addEventListener('click', function (event) { // show category makanan when triggered
        let row = document.querySelector('.row');
        row.innerHTML = ''; // clear all elemement in row before calling category list
        generateCardList(listMakanan);
    })

    buttonMinuman.addEventListener('click', function (event) { // show category minuman when triggered
        let row = document.querySelector('.row');
        row.innerHTML = '';
        generateCardList(listMinuman);
    })
}

let totalPrice = 0;
let cardCounter = 0;
function generateCardList(items) {
    for (let i = 0; i <= items.length-1; i++) {
        createMenuCard(items[i].name, items[i].price);
        addItems(items[i], `#${items[i].name}-item`, `#${items[i].name}-button`, `#${items[i].name}-price`);
        cardCounter++;
    }
}

generateCardList(listMakanan); // show category makanan by default
chooseCategory();