const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// },0)

// const myTotal = myNums.reduce( (acc,currVal) => acc + currVal,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "shirt",
        price: 1000
    },
    {
        itemName: "t-shirt",
        price: 2000
    },
    {
        itemName: "jeans",
        price: 1500
    },
    {
        itemName: "trousers",
        price: 1600
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc+ item.price, 0)
console.log(priceToPay);
