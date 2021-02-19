function updateTable(){
    let prices = document.getElementsByClassName('productPrice');
    let quantity = document.getElementsByClassName('productQuantity');
    let subtotals = document.getElementsByClassName('subTotal');
    let total = document.getElementsByClassName('totalCost');

    let totalFloat = 0;

    for(i = 0;i < subtotals.length;i++){
        subtotals[i].innerText = (parseInt(quantity[i].value) * parseFloat(prices[i].innerText)).toFixed(2);
        totalFloat += parseFloat(subtotals[i].innerText);
        }
        
    total[0].innerHTML = totalFloat.toFixed(2);    
}