const fakeItemData = {
  Smartphone: 699.99,
  Laptop: 1199.0,
  SmartWatch: 199.5,
  Headphones: 129.95,
  GamingConsole: 499.0,
  TShirt: 19.99,
  Jeans: 49.95,
  Dress: 89.5,
  Sneakers: 79.95,
  Jacket: 149.0,
  CoffeeMaker: 59.99,
};
const myMap = new Map();
for( const key in fakeItemData){
    myMap.set(key,fakeItemData[key]*80)
}
console.log(myMap);
