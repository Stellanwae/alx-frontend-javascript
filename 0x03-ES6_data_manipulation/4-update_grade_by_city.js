export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const studentsList = listStudents.filter((student) => student.location === city);
  for (const student of studentsList) {
    student.grade = 'N/A';
  }
  const newStudents = studentsList.map((student) => {
    const single = student;
    for (const grade of newGrades) {
      if (single.id === grade.studentId) {
        single.grade = grade.grade;
      }
    }
    return single;
  });
  return newStudents;
}
