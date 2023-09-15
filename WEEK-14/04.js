const products = [
  { name: "Laptop", price: 120000 },
  { name: "Mobile", price: 70000 },
  { name: "Laptop Bag", price: 20000 },
  { name: "Watch", price: 20000 },
  { name: "Mobile Charger", price: 1500 },
];
function calMax(){
    let maxPrice=0;
    for(let i=0;i<products.length;i++){
        if(products[i].price>maxPrice){
            maxPrice=products[i].price;
        }
    }
    return maxPrice;
}
function calMin(){
    let minPrice=products[0].price;
    for(let i=0;i<products.length;i++){
        if(products[i].price<minPrice){
            minPrice = products[i].price;
        }
    }
    return minPrice;
}
let max = calMax(products)
let min = calMin(products);
console.log("Maximum Price:",max);
console.log("Maximum Price:",min);