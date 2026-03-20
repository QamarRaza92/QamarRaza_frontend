const students = [
  {
    name: "Qamar Raza",
    marks: [
      { subject: "Math", score: 95 },
      { subject: "English", score: 94 },
      { subject: "Science", score: 92 },
      { subject: "History", score: 70 },
      { subject: "Computer", score: 79 }
    ],
    attendance: 95 
    // Case: Top performer (Grade A)
  },
  {
    name: "Rishika Sharma",
    marks: [
      { subject: "Math", score: 91 },
      { subject: "English", score: 90 },
      { subject: "Science", score: 95 },
      { subject: "History", score: 55 },
      { subject: "Computer", score: 56 }
    ],
    attendance: 80 
    // Case: Low average (Grade C)
  },
  {
    name: "Gopal Verma",
    marks: [
      { subject: "Math", score: 85 },
      { subject: "English", score: 80 },
      { subject: "Science", score: 35 }, // Fail in subject
      { subject: "History", score: 98 },
      { subject: "Computer", score: 75 }
    ],
    attendance: 88 
    // Case: Fail (Failed in Science)
  },
  {
    name: "Affan Khan",
    marks: [
      { subject: "Math", score: 70 },
      { subject: "English", score: 75 },
      { subject: "Science", score: 72 },
      { subject: "History", score: 68 },
      { subject: "Computer", score: 80 }
    ],
    attendance: 65 
    // Case: Fail (Low Attendance)
  },
  {
    name: "Aafab Sheikh",
    marks: [
      { subject: "Math", score: 60 },
      { subject: "English", score: 58 },
      { subject: "Science", score: 62 },
      { subject: "History", score: 55 },
      { subject: "Computer", score: 65 }
    ],
    attendance: 78 
    // Case: Average performer (Grade C)
  }
];

function total_marks(array)
{
    let student_total = [null,null,null,null,null]
    for(let i=0;i<array.length;i++)
    {
        let sum=0;
        for(let j=0;j<array[i]["marks"].length;j++)
        {
            sum = sum+array[i]['marks'][j]['score']
        }
        student_total[i] = sum
        console.log(array[i]["name"]+" Total Marks: "+sum)
    }
    return student_total
}
total_marks(students)


function student_average(array)
{
    for(let i=0;i<array.length;i++)
    {
        const no_of_sub = array[i]["marks"].length;
        let sum=0;
        for(let j=0;j<no_of_sub;j++)
        {
            sum = sum+array[i]['marks'][j]['score']
        }
        try {
            console.log(array[i]["name"]+" Average Marks: "+sum/no_of_sub)
        } catch (error) {
            console.log("No subject")
        }
    }
}
// student_average(students)


function subject_wise_highest_total(array) {
    let no_of_sub = array[0].marks.length;

    for (let i = 0; i < no_of_sub; i++) {
        let highest = array[0].marks[i].score;
        let index = 0;
        let subjectName = array[0].marks[i].subject;

        for (let j = 1; j < array.length; j++) {
            if (array[j].marks[i].score > highest) {
                highest = array[j].marks[i].score;
                index = j;
            }
        }
        console.log("Highest in " + subjectName + ": " + array[index].name + " (" + highest + ")");
    }
}
// subject_wise_highest_total(students)



function find_topper(array)
{
    student_total = total_marks(students)
    //For identifying topper
    let topper = -1;
    let index = 0
    for(i=0;i<student_total.length;i++)
    {
        if(topper<student_total[i])
        {
            index=i
            topper=student_total[i]
        }
    }
    console.log("Class Topper: "+array[index].name+" with "+topper+" marks")
}
find_topper(students)