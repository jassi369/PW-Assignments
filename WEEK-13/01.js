let totalValue = 2000;
let discountPercentage = 20;

function cal(){
    discount = discountPercentage*totalValue/100;
    finalprice = totalValue-discount;
    console.log("The final price after discount is: Rs."+finalprice);
}
cal();