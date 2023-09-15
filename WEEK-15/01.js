let car = {
  make: "hundai",
  model: "Grand i10",
  year: 2017,
};

function properties() {
  for (const prop in car) {
    console.log(`${prop} => ${car[prop]} `);
  }
}
properties();
