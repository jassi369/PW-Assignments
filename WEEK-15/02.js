let student = {
    name:"Jassi",
    age:22,
    grade:'A',
    gradeupdate(updatedGrade){
        
        return this.grade = updatedGrade;
        
    }
}
console.log("The grade of the student before updating: "+student.grade);
student.gradeupdate('B')
console.log("The grade of the student after updating: "+student.grade);
