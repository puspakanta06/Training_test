interface Student {
  id: number;
  name: string;
  age: number;
  scores: number[];
}

let students: Student[] = [
  { id: 1, name: "Sambit", age: 18, scores: [75, 85, 90] },
  { id: 2, name: "Amit", age: 19, scores: [50, 45, 60] },
  { id: 3, name: "Rakesh", age: 18, scores: [92, 88, 91] },
  { id: 4, name: "Pradeep", age: 20, scores: [65, 70, 68] },
  { id: 5, name: "Manoj", age: 21, scores: [82, 78, 80] },
  { id: 6, name: "Bikash", age: 19, scores: [35, 40, 30] },
  { id: 7, name: "Debasis", age: 18, scores: [95, 96, 99] },
  { id: 8, name: "Jitendra", age: 20, scores: [60, 58, 63] },
  { id: 9, name: "Pritam", age: 22, scores: [88, 85, 87] },
  { id: 10, name: "Shankar", age: 21, scores: [44, 39, 30] },
  { id: 11, name: "Ranjan", age: 20, scores: [91, 90, 93] },
  { id: 12, name: "Subham", age: 19, scores: [76, 79, 73] }
];

// Add new student
function addStudent(student: Student): void {
  students.push(student);
  console.log("Student added:", student);
}

// Get student by ID
function getStudentById(id: number): Student | undefined {
  return students.find((student) => student.id === id);
}

// Get average score of a student
function getAverageScore(id: number): number | null {
  const student = getStudentById(id);
  if (!student) return null;
  const sum = student.scores.reduce((a, b) => a + b, 0);
  return sum / student.scores.length;
}

// Get top scorers
function getTopScorers(minScore: number): Student[] {
  return students.filter((student) => {
    const avg = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
    return avg > minScore;
  });
}

// Sort students by name
function sortByName(): Student[] {
  return students.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
}

// Return only names
function listAllNames(): string[] {
  return students.map((student) => student.name);
}

// Check if any score < 35
function hasFailingStudents(): boolean {
  return students.some((student) => student.scores.some((score) => score < 35));
}

// Return failed scores
function getFailedSubjects(student: Student): number[] {
  return student.scores.filter((score) => score < 35);
}

// Destructure and log
function logStudentNameAndScores(student: Student): void {
  const { name, scores } = student;
  console.log("Name:", name);
  console.log("Scores:", scores);
}

// Add score using spread operator
function addScore(student: Student, newScore: number): Student {
  const newScores = [...student.scores, newScore];
  return { ...student, scores: newScores };
}

// Print summary
function printSummary(student: Student): void {
  const avg = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
  console.log(`${student.name} (age ${student.age}) has an average score of ${avg.toFixed(2)}.`);
}

// Group students by age
function groupByAge(): Record<number, Student[]> {
  const grouped: Record<number, Student[]> = {};
  students.forEach((student) => {
    if (!grouped[student.age]) {
      grouped[student.age] = [];
    }
    grouped[student.age].push(student);
  });
  return grouped;
}



console.log("\n--- Add Student ---");
addStudent({ id: 13, name: "Suraj", age: 23, scores: [80, 85, 88] });

console.log("\n--- Get Student by ID (3) ---");
console.log(getStudentById(3));

console.log("\n--- Average Score of Rakesh (ID 3) ---");
console.log(getAverageScore(3));

console.log("\n--- Top Scorers (avg > 80) ---");
console.log(getTopScorers(80));

console.log("\n--- Sorted by Name ---");
console.log(sortByName());

console.log("\n--- List All Names ---");
console.log(listAllNames());

console.log("\n--- Any Failing Students? ---");
console.log(hasFailingStudents());

console.log("\n--- Failed Subjects of Shankar ---");
const shankar = getStudentById(10);
if (shankar) console.log(getFailedSubjects(shankar));

console.log("\n--- Destructured Info of Debasis ---");
const debasis = getStudentById(7);
if (debasis) logStudentNameAndScores(debasis);

console.log("\n--- Add New Score to Debasis ---");
if (debasis) console.log(addScore(debasis, 100));

console.log("\n--- Print Summary of Debasis ---");
if (debasis) printSummary(debasis);

console.log("\n--- Group by Age ---");
console.log(groupByAge());
