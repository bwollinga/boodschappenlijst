const prices = document.getElementsByClassName('productPrice');
const quantity = document.getElementsByClassName('productQuantity');
const subtotals = document.getElementsByClassName('subTotal');
const total = document.getElementsByClassName('totalCost');

function updateTable(){
    let totalFloat = 0;

    for(i = 0;i < subtotals.length;i++){
        subtotals[i].innerText = (parseInt(quantity[i].value) * parseFloat(prices[i].innerText)).toFixed(2);
        totalFloat += parseFloat(subtotals[i].innerText);
        }
        
    total[0].innerHTML = totalFloat.toFixed(2);    
}