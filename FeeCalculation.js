import React from 'react';

function FeeCalculation({ exams }) {
  const calculateTotalFee = () => {
    return exams.reduce((total, exam) => (exam.selected ? total + exam.fee : total), 0);
  };

  return <div>Total Fee: ${calculateTotalFee()}</div>;
}

export default FeeCalculation;