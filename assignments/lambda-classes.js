// CODE here for your Lambda Classes
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