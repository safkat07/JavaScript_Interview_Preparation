const myNums = [1, 2, 3]


const initialValue = 0

const mytTotal = myNums.reduce((acc, curentValue) => {
    console.log(`acc: ${acc} and currval: ${curentValue}`);
    return acc + curentValue
}, 3)

// console.log(mytTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const shop =  shoppingCart.reduce(( acc,item ) => {
    return acc + item.price
},0)

console.log(shop);
