function calculateTotalCartValue(){
    let sum =0;
    for(var i=0;i<arguments.length;i++){
        sum=sum+arguments[i];
    }
    return sum;
}
totalPrice=calculateTotalCartValue(125,20,30);
console.log("The Total cart value is "+totalPrice);