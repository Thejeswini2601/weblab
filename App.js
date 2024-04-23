import React, { useState } from 'react';

function EnrollmentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedExams, setSelectedExams] = useState([]);
  const [enrolledStudents, setEnrolledStudents] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const totalFee = calculateTotalFee(selectedExams);
    const student = { name, email, exams: selectedExams, totalFee };
    setEnrolledStudents([...enrolledStudents, student]);
    setName('');
    setEmail('');
    setSelectedExams([]);
  };

  const calculateTotalFee = (exams) => {
    let total = 0;
    exams.forEach((exam) => {
      switch (exam) {
        case 'Math':
          total += 50;
          break;
        case 'Science':
          total += 60;
          break;
        case 'History':
          total += 40;
          break;
        default:
          break;
      }
    });
    return total;
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = [...enrolledStudents];
    updatedStudents.splice(index, 1);
    setEnrolledStudents(updatedStudents);
  };

  return (
    <div>
      <h1>Student Exam Enrollment</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br /><br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br /><br />
        <label>Select Exams:</label><br />
        <input type="checkbox" id="math" value="Math" checked={selectedExams.includes('Math')} onChange={(e) => setSelectedExams(e.target.checked ? [...selectedExams, e.target.value] : selectedExams.filter(exam => exam !== e.target.value))} />
        <label htmlFor="math">Math ($50)</label><br />
        <input type="checkbox" id="science" value="Science" checked={selectedExams.includes('Science')} onChange={(e) => setSelectedExams(e.target.checked ? [...selectedExams, e.target.value] : selectedExams.filter(exam => exam !== e.target.value))} />
        <label htmlFor="science">Science ($60)</label><br />
        <input type="checkbox" id="history" value="History" checked={selectedExams.includes('History')} onChange={(e) => setSelectedExams(e.target.checked ? [...selectedExams, e.target.value] : selectedExams.filter(exam => exam !== e.target.value))} />
        <label htmlFor="history">History ($40)</label><br /><br />
        <button type="submit">Enroll</button>
      </form>
      <hr />
      <h2>Enrolled Students</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Exams</th>
            <th>Total Fee</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {enrolledStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.exams.join(', ')}</td>
              <td>${student.totalFee}</td>
              <td><button onClick={() => handleDeleteStudent(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EnrollmentForm;
