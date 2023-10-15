function squareOfANumber(num){
    console.log(num*num);
}
function operation(num,func){
    func(num);
}
operation(5,squareOfANumber);