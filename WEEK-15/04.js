function checkProp(obj,prop){
  return obj.hasOwnProperty(prop);
}

sampleObject= { name: "Elon Musk", email:"elonmusk@x.com"}

console.log(checkProp(sampleObject,"name"));
console.log(checkProp(sampleObject,"phoneNum"));