let menu = [
    {name: 'Telor Dadar', price: 5000},
    {name: 'Kikil', price: 6000},
    {name: 'Capcay', price: 4500},
    {name: 'Mie Goreng', price: 5500},
]

let shoppingCart = document.getElementById('shopping-cart');

let buttonTelorDadar = document.getElementById("pesan-telor-dadar");
buttonTelorDadar.addEventListener("click", () => {
    let tableRow = document.createElement('tr');
    let tableDataItem = document.createElement('td');
    let tableDataPrice = document.createElement('td');
    for (let i = 0; i <= menu.length-1; i++) {
        if (menu[i].name == 'Telor Dadar') {
            tableDataItem.innerHTML = menu[i].name;
            tableDataPrice.innerHTML = menu[i].price;
        }
    }
    tableRow.appendChild(tableDataItem);
    tableRow.appendChild(tableDataPrice);
    shoppingCart.appendChild(tableRow);
})

let buttonKikil = document.getElementById("pesan-kikil");
buttonKikil.addEventListener("click", () => {
    let tableRow = document.createElement('tr');
    let tableDataItem = document.createElement('td');
    let tableDataPrice = document.createElement('td');
    for (let i = 0; i <= menu.length-1; i++) {
        if (menu[i].name == 'Kikil') {
            tableDataItem.innerHTML = menu[i].name;
            tableDataPrice.innerHTML = menu[i].price;
        }
    }
    tableRow.appendChild(tableDataItem);
    tableRow.appendChild(tableDataPrice);
    shoppingCart.appendChild(tableRow);
})

let buttonCapcay = document.getElementById("pesan-capcay");
buttonCapcay.addEventListener("click", () => {
    let tableRow = document.createElement('tr');
    let tableDataItem = document.createElement('td');
    let tableDataPrice = document.createElement('td');
    for (let i = 0; i <= menu.length-1; i++) {
        if (menu[i].name == 'Capcay') {
            tableDataItem.innerHTML = menu[i].name;
            tableDataPrice.innerHTML = menu[i].price;
        }
    }
    tableRow.appendChild(tableDataItem);
    tableRow.appendChild(tableDataPrice);
    shoppingCart.appendChild(tableRow);
})

let buttonMieGoreng = document.getElementById("pesan-mie-goreng");
buttonMieGoreng.addEventListener("click", () => {
    let tableRow = document.createElement('tr');
    let tableDataItem = document.createElement('td');
    let tableDataPrice = document.createElement('td');
    for (let i = 0; i <= menu.length-1; i++) {
        if (menu[i].name == 'Mie Goreng') {
            tableDataItem.innerHTML = menu[i].name;
            tableDataPrice.innerHTML = menu[i].price;
        }
    }
    tableRow.appendChild(tableDataItem);
    tableRow.appendChild(tableDataPrice);
    shoppingCart.appendChild(tableRow);
})