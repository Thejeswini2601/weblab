import React from 'react';

function ExamSelection({ exams, onChange }) {
  const handleCheckboxChange = (exam) => {
    const updatedExams = exams.map((e) =>
      e.name === exam.name ? { ...e, selected: !e.selected } : e
    );
    onChange(updatedExams);
  };

  return (
    <div>
      <h2>Exam Selection</h2>
      {exams.map((exam) => (
        <div key={exam.name}>
          <input
            type="checkbox"
            checked={exam.selected}
            onChange={() => handleCheckboxChange(exam)}
          />
          {exam.name} - ${exam.fee}
        </div>
      ))}
    </div>
  );
}

export default ExamSelection;