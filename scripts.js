function updateTable(){
    let prices = document.getElementsByClassName('productPrice');
    let quantity = document.getElementsByClassName('productQuantity');
    let subtotals = document.getElementsByClassName('subTotal');
    let total = document.getElementsByClassName('totalCost');

    let totalFloat = 0; //Has to be reset to zero every time the function runs.

    for(i = 0;i < subtotals.length;i++){
        subtotals[i].innerText = parseInt(quantity[i].value)*parseFloat(prices[i].innerText);
        totalFloat += parseFloat(subtotals[i].innerText);
        }
    total[0].innerHTML = totalFloat;    
}