// Задача 1: Створення простого калькулятора з можливістю обчислення простих математичних операцій, таких як додавання, віднімання, множення та ділення, за допомогою прототипів та прототипного наслідування.

function Calculator() {
  this.currentValue = 0;
}

Calculator.prototype.setValue = function (value) {
  this.currentValue = value;
  return this;
};

Calculator.prototype.add = function (value) {
  this.currentValue += value;
  return this;
};

Calculator.prototype.subtract = function (value) {
  this.currentValue -= value;
  return this;
};

Calculator.prototype.multiply = function (value) {
  this.currentValue *= value;
  return this;
};

Calculator.prototype.divide = function (value) {
  if (value !== 0) {
    this.currentValue /= value;
    return this;
  } else {
    throw new Error("Division by zero is not allowed.");
  }
};

const calc = new Calculator();
calc.setValue(10).add(5).subtract(3).multiply(20).divide(23);
console.log(calc.currentValue);

// Задача 2: Напишіть програму для обчислення середнього балу студента. Програма має мати можливість вводити інформацію про студента, таку як його ім'я, прізвище та оцінки з різних предметів. Для обчислення середнього балу необхідно використовувати прототипне наслідування.

function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = [];
}

Student.prototype.addGrade = function (grade) {
  this.grades.push(grade);
};

function StudentWithAverage(firstName, lastName) {
  Student.call(this, firstName, lastName);
}

StudentWithAverage.prototype = Object.create(Student.prototype);
StudentWithAverage.prototype.constructor = StudentWithAverage;

StudentWithAverage.prototype.calculateAverage = function () {
  if (this.grades.length === 0) {
    return 0;
  }
  const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
  return sum / this.grades.length;
};

const student1 = new StudentWithAverage("John", "Doe");
student1.addGrade(88);
student1.addGrade(92);
student1.addGrade(84);
console.log(student1.calculateAverage());

const student2 = new StudentWithAverage("Jane", "Smith");
student2.addGrade(75);
student2.addGrade(85);
student2.addGrade(79);
console.log(student2.calculateAverage());
