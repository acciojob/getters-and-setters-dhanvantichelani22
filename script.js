//complete this code
class Person {
	constructor(nameVal, ageVal) {
    this.name = nameVal;
    this.age = ageVal;
}
get nameVal() {
    return this.name;
  }

  set ageVal(ageVal) {
    // this.age = ageVal;
	  return "Age: " + this.age;
  }
}

var user1 = new User("Moghul", 21);
console.log(user1.nameVal);
console.log(user1.ageVal);
class Student extends Person {
	study() {
    console.log(this.name+"is studying");
  }
}

class Teacher extends Person {
	teach() {
    console.log(this.name+"is teaching");
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
