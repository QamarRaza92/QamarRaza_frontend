const students = [
  {
    name: "Qamar Raza",
    marks: [
      { subject: "Math", score: 95 },
      { subject: "English", score: 88 },
      { subject: "Science", score: 92 },
      { subject: "History", score: 85 },
      { subject: "Computer", score: 98 }
    ],
    attendance: 95 
    // Case: Top performer (Grade A)
  },
  {
    name: "Rishika Sharma",
    marks: [
      { subject: "Math", score: 45 },
      { subject: "English", score: 52 },
      { subject: "Science", score: 48 },
      { subject: "History", score: 55 },
      { subject: "Computer", score: 50 }
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
      { subject: "History", score: 70 },
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
    for(i=0;i<array.length;i++)
    {
        sum=0;
        for(j=0;j<array[i]["marks"].length;j++)
        {
            sum = sum+array[i]['marks'][j]['score']
        }
        console.log(array[i]["name"]+" Total Marks: "+sum)
    }
}

total_marks(students)