var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var students = [
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
function addStudent(student) {
    students.push(student);
    console.log("Student added:", student);
}
// Get student by ID
function getStudentById(id) {
    return students.find(function (student) { return student.id === id; });
}
// Get average score of a student
function getAverageScore(id) {
    var student = getStudentById(id);
    if (!student)
        return null;
    var sum = student.scores.reduce(function (a, b) { return a + b; }, 0);
    return sum / student.scores.length;
}
// Get top scorers
function getTopScorers(minScore) {
    return students.filter(function (student) {
        var avg = student.scores.reduce(function (a, b) { return a + b; }, 0) / student.scores.length;
        return avg > minScore;
    });
}
// Sort students by name
function sortByName() {
    return students.sort(function (a, b) { return (a.name > b.name ? 1 : a.name < b.name ? -1 : 0); });
}
// Return only names
function listAllNames() {
    return students.map(function (student) { return student.name; });
}
// Check if any score < 35
function hasFailingStudents() {
    return students.some(function (student) { return student.scores.some(function (score) { return score < 35; }); });
}
// Return failed scores
function getFailedSubjects(student) {
    return student.scores.filter(function (score) { return score < 35; });
}
// Destructure and log
function logStudentNameAndScores(student) {
    var name = student.name, scores = student.scores;
    console.log("Name:", name);
    console.log("Scores:", scores);
}
// Add score using spread operator
function addScore(student, newScore) {
    var newScores = __spreadArray(__spreadArray([], student.scores, true), [newScore], false);
    return __assign(__assign({}, student), { scores: newScores });
}
// Print summary
function printSummary(student) {
    var avg = student.scores.reduce(function (a, b) { return a + b; }, 0) / student.scores.length;
    console.log("".concat(student.name, " (age ").concat(student.age, ") has an average score of ").concat(avg.toFixed(2), "."));
}
// Group students by age
function groupByAge() {
    var grouped = {};
    students.forEach(function (student) {
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
var shankar = getStudentById(10);
if (shankar)
    console.log(getFailedSubjects(shankar));
console.log("\n--- Destructured Info of Debasis ---");
var debasis = getStudentById(7);
if (debasis)
    logStudentNameAndScores(debasis);
console.log("\n--- Add New Score to Debasis ---");
if (debasis)
    console.log(addScore(debasis, 100));
console.log("\n--- Print Summary of Debasis ---");
if (debasis)
    printSummary(debasis);
console.log("\n--- Group by Age ---");
console.log(groupByAge());
