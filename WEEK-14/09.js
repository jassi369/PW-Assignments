function uniqueCharacterCheck(arguments){
    let str = arguments;
    const set = new Set(str);
    console.log(set);
    if(str.length == set.size)
    {
        console.log(`The input string contains unique characters`);
    }
    else{
        console.log(`The input string contains duplicates`);
    }
}
uniqueCharacterCheck("mithun");
uniqueCharacterCheck("anurag");