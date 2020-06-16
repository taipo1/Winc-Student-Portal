import studentData from "./studentData";

const students = Object.values(studentData);
// let studentCount = students.length;

const dataManipulation = {
  // fetch assignments from single student
  fetchstudentratings: (student) => {
    let combinedArray = [];
    const assignments = Object.values(student.assignments);
    assignments.forEach((assignment) => {
      combinedArray.push(assignment);
    });
    return combinedArray;
  },

  // Fetch single assignment from all students
  fetchAssignmentData: (assignment) => {
    let results = {
      enjoyment: [],
      difficulty: [],
    };
    students.forEach((student) => {
      results.enjoyment.push(student.assignments[assignment][0]);
      results.difficulty.push(student.assignments[assignment][1]);
    });
    return results;
  },
  // takes an array of students with nested assignment and sums all the results
  combineRatings: (filteredStudents) => {
    let combinedRatings = [];
    // itterate trough Student Array.

    for (let i = 0; i < filteredStudents.length; i++) {
      let assignmentArray = Object.values(filteredStudents[i].assignments);
      // itterate trough Assignment array
      for (let j = 0; j < assignmentArray.length; j++) {
        combinedRatings[j] === undefined
          ? combinedRatings.push(assignmentArray[j])
          : (combinedRatings[j] = [
              combinedRatings[j][0] + assignmentArray[j][0],
              combinedRatings[j][1] + assignmentArray[j][1],
            ]);
      }
    }
    return combinedRatings;
  },
  CalculateAvarageArray: (assignmentArray) => {
    const newArray = assignmentArray.map((item) => {
      return (item = [item[0] / students.length, item[1] / students.length]);
    });
    return newArray;
  },
};

export default dataManipulation;
