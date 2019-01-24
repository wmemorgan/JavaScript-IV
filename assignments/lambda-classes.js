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
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
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
  location: 'Cleveland'
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
    console.log(`Today we are learning about ${subject}.`)
  }

  grade(student) {
    console.log(`${student.name} receives a perfect score on ${subject}.`)
  }
}

// EXAMPLES
const alice = new Instructor({
  name: 'Alice',
  age: 42,
  location:  'Kansas City',
  specialty: 'nodeJS',
  favLanguage: 'JavaScript',
  catchPhrase: "Dinner's ready, come and get it!"
})

const sam = new Instructor({
  name: 'Sam',
  age: 45,
  location:  'Tulsa',
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
  }

  listSubjects() {
    let subjects = this.favSubjects
    console.log(subjects.map(subject => `${subject} \n`))
  }

  prAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`)
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`)
  }

}

// EXAMPLES
const peter = new Student({
  name: 'Peter',
  age: 24,
  location:  'New York City',
  previousBackground: 'Stand-up Comic',
  className: 'webpt4',
  favSubjects: ['HTML', 'CSS', 'JavaScript']
})

const jan = new Student({
  name: 'Jan',
  age: 23,
  location: 'Seattle',
  previousBackground: 'Librarian',
  className: 'cs132',
  favSubjects: ['Python', 'C++', 'Java'] 
})

const bobby = new Student({
  name: 'Bobby',
  age: 20,
  location:  'Houston',
  previousBackground: 'Hotel Concierge',
  className: 'ux10',
  favSubjects: ['Ideation', 'Sketch']
})

const cindy = new Student({
  name: 'Cindy',
  age: 19,
  location:  'Las Vegas',
  previousBackground: 'Pharmaceutical Sales Rep',
  className: 'ds30',
  favSubjects: ['Python', 'SQL']
})

//==== Project Manager
class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes)
    this.gradClassName = attributes.gradClassName
    this.favInstructor = attributes.favInstructor
  }

  standUp(channel) {
    console.log(`${channel}, @${channel} stand up times`)
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}\'s code on ${subject}.`)
  }

}

// EXAMPLES
const greg = new ProjectManager({
  name: 'Greg',
  age: 31,
  location:  'Ft. Lauderdale',
  specialty: 'data structures',
  favLanguage: 'C++',
  catchPhrase: "Now Dad were talking Man to man to Man not kid to man but man to man to man",
  gradClassName: 'cs50',
  favInstructor: 'Alice'
})

const marcia = new ProjectManager({
  name: 'Marcia',
  age: 30,
  location:  'Malibu',
  specialty: 'd3',
  favLanguage: 'SQL',
  catchPhrase: "Oh, my nose!",
  gradClassName: 'ds5',
  favInstructor: 'Alice'
})