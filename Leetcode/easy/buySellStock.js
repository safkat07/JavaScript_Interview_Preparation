
function buySellStock(array) {

    let buyPrice = array[0]
    let profitPrice = 0
    let profitElement = 0

    for (let i = 1; i < array.length; i++) {
        if (array[i] < buyPrice) {
            buyPrice = array[i]
        }
    }
    console.log('The buyprice: ', buyPrice);

    // if the buy price is the last element of the array then return false
    const indexOfBuyPrice = array.indexOf(buyPrice)
    console.log('length of the array', array.length);
    console.log('index of buy price', indexOfBuyPrice);
    if (indexOfBuyPrice == array.length - 1) {
        console.log('the buy price is the last element of the array');
    }
    else {
        console.log('the buy price is NOT the last element of the array');
        for (let j = indexOfBuyPrice + 1; j < array.length; j++) {
            let calcPrice = array[j] - buyPrice
            if (calcPrice > profitPrice) {
                profitPrice = calcPrice

            }
        }

        console.log('profit price', profitPrice);

    }

}

//154 / 212 testcases passed

let arr = [2, 4, 1]
buySellStock(arr)