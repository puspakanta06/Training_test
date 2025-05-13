const students = [
    { id: 1, name: "Rahul", age: 18, scores: [67, 89, 90] },
    { id: 2, name: "Anita", age: 19, scores: [45, 32, 50] },
    { id: 3, name: "Zara", age: 18, scores: [90, 92, 88] }
];



function addStudent(student) {
    if (typeof student.name !== 'string' || student.name.trim() === '') {
        console.error("Invalid name");
        return;
    }
    if (
        !Array.isArray(student.scores) || student.scores.some(score => typeof score !== 'number' || score < 0 || score > 100)) {
        console.error("Invalid scores");
        return;
    }
    const newId = students.length ? students[students.length - 1].id + 1 : 1;
    students.push({
        id: newId,
        ...student
    });
    console.log("Student added:", student.name);
}

function getStudentById(id) {
    for (const stu of students) {
        if (stu.id == id) {
            console.log(stu.name);
            return;
        }
    }
    console.log('No Student Found in that id')
}

function getAverageScore(id) {
    const student = students.find(s => s.id === id);
    if (!student) {
        console.log("Student not found");
        return;
    }
    const total = student.scores.reduce((sum, score) => sum + score, 0);
    const average = total / student.scores.length;
    console.log(`Average score of ${student.name}: ${average}`);

}

function getTopScorers(minScore) {
    var result = students.filter(student => {
        let sum = 0;
        for (let i = 0; i < student.scores.length; i++) {
            sum += student.scores[i];
        }
        const average = sum / student.scores.length;
        return average > minScore;
    });
    console.log(result)
}

function sortByName() {
    let result = students.sort((a, b) => a.name.localeCompare(b.name));
    console.log(result)
}

function listAllNames() {
    students.map(item => {
        console.log(item.name)
    })
}

function hasFailingStudents() {
    let result = students.find(student => student.scores.some(score => score < 35));
    if (result) {
        console.log(result)
    }
    else {
        console.log('every one passed')
    }
}
function getFailedSubjects(students) {
    var flag=1;
    students.map(student => {
        student.scores.map(item => {
            if (item< 35) {
                console.log(student.name + '=' + item)
                console.log(student.name + ' failed')
                 flag=0;
            }
        })

    });
    if(flag==1){
        console.log('no failed student')
    }
} 

function Destructure(){   
const { name, scores} = students[0];    
console.log(name);  
console.log(scores);
}

function addScoreToFirstStudent(students, newScore) {
 let result= [
        {
            ...students[0],
            scores: [...students[0].scores, newScore]
        },
        ...students.slice(1)
    ];
    console.log(result)
}

function getStudentSummary(student) {
    const averageScore = student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length;    
    let result= `${student.name} (age ${student.age}) has an average score of ${averageScore.toFixed(2)}.`;
    console.log(result)
}

getStudentById(2);
getAverageScore(1);
getTopScorers(70);
sortByName();
listAllNames();
hasFailingStudents();
getFailedSubjects(students);
Destructure();
addScoreToFirstStudent(students, 95);
getStudentSummary(students[2]);