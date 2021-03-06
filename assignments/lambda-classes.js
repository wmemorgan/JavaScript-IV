// CODE here for your Lambda Classes
//==== Person
class Person {
  constructor(attributes) {
    this.name = attributes.name
    this.age = attributes.age
    this.location = attributes.location
    this.gender = attributes.gender
  }
  speak() {
    //console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    return `Hello my name is ${this.name}, I am from ${this.location}.`
  }
}

//Examples
const mike = new Person({
  name: 'Mike',
  age: 38,
  location: 'Chicago',
  gender: 'male'
})

const carol = new Person({
  name: 'Carol',
  age: 37,
  location: 'Cleveland',
  gender: 'female'
})

//==== Instructor
class Instructor extends Person {
  constructor(attributes) {
    super(attributes)
    this.specialty = attributes.specialty
    this.favLanguage = attributes.favLanguage
    this.catchPhrase = attributes.catchPhrase
  }

  demo(subject) {
    //console.log(`Today we are learning about ${subject}.`)
    return `Today we are learning about ${ subject }.`
  }

  assignGrade(student) {
    if (student.isAGraduate()) {
      return `${student.name} has graduated.`
    } else {
      let add = Math.floor(Math.random() * (1 - 0 + 1))
      if (add) {
        //Grading is based on a "special" formula that increases the range for awarding points
        let points = Math.floor(Math.random() * (10 - 1 + 1))
        student.grade = student.grade + points
        return `${this.name} has awarded ${points} point(s) to ${student.name}\'s grade.`
      } else {
        let points = Math.floor(Math.random() * (4 - 1 + 1))
        student.grade = student.grade - points
        return `${this.name} has deducted ${points} point(s) from ${student.name}\'s grade.`
      }  
    }

  }

  grade(student, subject) {
    //console.log(`${student.name} receives a perfect score on ${subject}.`)
    return `${student.name} receives a perfect score on ${subject}.`
  }
}

// EXAMPLES
const alice = new Instructor({
  name: 'Alice',
  age: 42,
  location:  'Kansas City',
  gender: 'female',
  specialty: 'nodeJS',
  favLanguage: 'JavaScript',
  catchPhrase: "Dinner's ready, come and get it!"
})

const sam = new Instructor({
  name: 'Sam',
  age: 45,
  location:  'Tulsa',
  gender: 'male',
  specialty: 'pandas',
  favLanguage: 'Python',
  catchPhrase: "I've got nothing, bro."
})

//==== Student
class Student extends Person {
  constructor(attributes) {
    super(attributes)
    this.previousBackground = attributes.previousBackground
    this.className = attributes.className
    this.favSubjects = attributes.favSubjects
    this.grade = attributes.grade
  }

  listSubjects() {
    let subjects = this.favSubjects
    //Version 1 - Enumerate an array using a For Loop 
    //NOTE: Can directly invoke method to display subject list
    // for (let i = 0; i < subjects.length; i++) {
    //   console.log(subjects[i])
    //   //return subjects[i]
    // }
    
    //Version 2 - Enumerate an array using the .map() method
    //NOTE: Need to console log method to display subject list
    return `${this.name}\'s favorite subjects are${subjects.map((item, index) => index !== subjects.length - 1 ? ' ' + item : ' and ' + item)}`

  }

  prAssignment(subject) {
    //console.log(`${this.name} has submitted a PR for ${subject}`)
    return `${this.name} has submitted a PR for ${subject}`
  }

  sprintChallenge(subject) {
    //console.log(`${this.name} has begun sprint challenge on ${subject}`)
    return `${this.name} has begun sprint challenge on ${subject}`
  }

  isAGraduate() {
    return this.grade >= 70 ? true : false
  }

}

// EXAMPLES
const peter = new Student({
  name: 'Peter',
  age: 24,
  location: 'New York City',
  gender: 'male',
  previousBackground: 'Stand-up Comic',
  className: 'webpt4',
  favSubjects: ['HTML', 'CSS', 'JavaScript'],
  grade: 12
})

const jan = new Student({
  name: 'Jan',
  age: 23,
  location: 'Seattle',
  gender: 'female',
  previousBackground: 'Librarian',
  className: 'cs132',
  favSubjects: ['Python', 'C++', 'Java'],
  grade: 54 
})

const bobby = new Student({
  name: 'Bobby',
  age: 20,
  location: 'Houston',
  gender: 'male',
  previousBackground: 'Hotel Concierge',
  className: 'ux10',
  favSubjects: ['Ideation', 'Sketch'],
  grade: 33
})

const cindy = new Student({
  name: 'Cindy',
  age: 19,
  location: 'Las Vegas',
  gender: 'female',
  previousBackground: 'Pharmaceutical Sales Rep',
  className: 'ds30',
  favSubjects: ['Python', 'SQL'],
  grade: 82
})

console.log(alice.assignGrade(bobby))
//console.log(bobby.grade)

//==== Project Manager
class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes)
    this.gradClassName = attributes.gradClassName
    this.favInstructor = attributes.favInstructor
  }

  standUp(channel) {
    //console.log(`${this.name} announces to ${channel} channel, @${channel} stand up times!`)
    return `${this.name} announces to ${channel} channel, @${channel} stand up times!`
  }

  debugsCode(student, subject) {
    //console.log(`${this.name} debugs ${student.name}\'s code on ${subject}.`)
    return `${this.name} debugs ${student.name}\'s code on ${subject}.`
  }

}

// EXAMPLES
const greg = new ProjectManager({
  name: 'Greg',
  age: 31,
  location: 'Ft. Lauderdale',
  gender: 'male',
  specialty: 'data structures',
  favLanguage: 'C++',
  catchPhrase: "Now Dad were talking Man to man to Man not kid to man but man to man to man",
  gradClassName: 'cs50',
  favInstructor: 'Alice'
})

const marcia = new ProjectManager({
  name: 'Marcia',
  age: 30,
  location: 'Malibu',
  gender: 'female',
  specialty: 'd3',
  favLanguage: 'SQL',
  catchPhrase: "Oh, my nose!",
  gradClassName: 'ds5',
  favInstructor: 'Alice'
})

console.log(marcia.assignGrade(cindy))

// Verify personnel information
const persons = [mike, carol]
const instructors = [alice, sam]
const students = [peter, jan, bobby, cindy]
const projectManagers = [greg, marcia]

const personInfo = (array) => array.map(classObj => {
  console.log(classObj)
  console.log(classObj.speak())
})

personInfo(persons)

const instructorInfo = (array) => array.map(classObj => {
  console.log(classObj)
  console.log(classObj.speak())
  console.log(classObj.demo('HTML'))
  console.log(classObj.grade(peter, 'HTML'))
})

instructorInfo(instructors)

const studentInfo = (array) => array.map(classObj => {
  console.log(classObj)
  console.log(classObj.speak())
  ///Directly invoke the function to enumerate the array of subjects - if using Version 1 of the .listSubjects() method
  //classObj.listSubjects()
  console.log(classObj.listSubjects())
  console.log(classObj.prAssignment('C++'))
  console.log(`${classObj.name}\'s current grade is ${classObj.grade}`)
  console.log(classObj.sprintChallenge('Python'))
})

studentInfo(students)

const projectManagerInfo = (array) => array.map(classObj => {
  console.log(classObj)
  console.log(classObj.speak())
  console.log(classObj.demo('Python'))
  console.log(classObj.grade(cindy, 'Python'))
  console.log(classObj.standUp(`ds30_${classObj.name}`))
  console.log(classObj.debugsCode(cindy, 'Python'))
})

projectManagerInfo(projectManagers)

//Stretch Goal Testing
const evaluators = [...instructors, ...projectManagers]
const studentGrading = (evaluators, students) => {
  for (let i = 0; i < evaluators.length; i++) {
    for (let j = 0; j < students.length; j++) {
      console.log(evaluators[i].assignGrade(students[j]))
    }
  }
}

//studentGrading(evaluators,students)

//The Lambda School Way: No Student Left Behind
let graduatingStudents = students.filter(student => student.grade >= 70)
console.log(graduatingStudents.length)

while (graduatingStudents.length < students.length) {
  studentGrading(evaluators, students)
  graduatingStudents = students.filter(student => student.grade >= 70)
  console.log(`${graduatingStudents.length} students have graduated. There are ${students.length - graduatingStudents.length} remaining`)
}










