class car{
    constructor(company,year,model,name,engine){
        this.company = company;
        this.year = year;
        this.model = model;
        this.name = name;
        this.engine = engine;
    }
}

const Bmw = new car("BMW",2022,"M5","BMW M5","V12")
console.log(Bmw);