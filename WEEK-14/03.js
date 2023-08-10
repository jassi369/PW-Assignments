const students = [
  {
    name: "Mithun",
    marks: 95,
  },
  {
    name: "Prabir",
    marks: 75,
  },
  {
    name: "Alka",
    marks: 92,
  },
  {
    name: "Shivam",
    marks: 70,
  },
  {
    name: "Farman",
    marks: 99,
  },
];

function checkResults(students){
    for(let i=0;i<students.length;i++){
        if(students[i].marks>90){
            console.log("Congratualtions "+students[i].name+"! You have cleared the exam.");
        }
    }
}
checkResults(students);
