import React, { useState } from 'react';
import ExamSelection from './ExamSelection';

function EnrollmentForm() {
  const [studentDetails, setStudentDetails] = useState({
    name: '',
    email: '',
  });
  const [exams, setExams] = useState([
    { name: 'Math', fee: 50, selected: false },
    { name: 'Science', fee: 60, selected: false },
    { name: 'History', fee: 40, selected: false },
  ]);
  const handleStudentFormSubmit = ({ name, email }) => {
    setStudentDetails({ name, email });
  };

  const handleExamSelectionChange = (updatedExams) => {
    setExams(updatedExams);
  };

  return (
    <div>
      <h1>Student Exam Enrollment</h1>
      <StudentForm onSubmit={handleStudentFormSubmit} />
      <ExamSelection exams={exams} onChange={handleExamSelectionChange} />
      <FeeCalculation exams={exams} />
    </div>
  );
}
export default EnrollmentForm;