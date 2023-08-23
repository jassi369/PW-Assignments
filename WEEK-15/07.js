//Adding, Updating, Deleting

const myMap = new Map()
function adduser(name,age,email){
    let userDB = {age,email};
    myMap.set(name,{age,email})
}

function update(name,age,email){
    if(myMap.has(name)){
        const userDB = myMap.get(name);
        userDB.age = age;
        userDB.email = email;
    }
}

function deleteUser(name){
    myMap.delete(name);
}

adduser("Elon",22,"Elon@x.com");
adduser("Tony",21,"tony@x.com");
adduser("Pepper",21,"Pepper@x.com");
console.log(myMap);
update("elon",55,"Elonmusk@x.com");
console.log(myMap);
deleteUser("Pepper");
console.log(myMap);

