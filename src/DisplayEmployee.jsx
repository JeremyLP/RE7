import React from 'react';

function DisplayEmployee({ employee }) {
  return (
    <div className="DisplayEmployee">
      <img
        src={employee.image}
        alt={employee.name}
        
      />
      <p>{employee.quote}</p>
    </div>
  );
};

export default DisplayEmployee;