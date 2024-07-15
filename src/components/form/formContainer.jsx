import React, { useState } from "react";
import PersonalDetails from "../../pages/personalDetail";
import EducationDetails from "../../pages/educationDetails";
import EmploymentDetails from "../../pages/employeeDetail";

const FormContainer = () => {
  const [userId] = useState(new Date().getTime().toString());
  const [personalDetails, setPersonalDetails] = useState(JSON.parse(localStorage.getItem('personalDetails')) || {});
  const [educationDetails, setEducationDetails] = useState(JSON.parse(localStorage.getItem('educationDetails')) || {});
  const [employmentDetails, setEmploymentDetails] = useState(JSON.parse(localStorage.getItem('employmentDetails')) || {});

  const handleFinalSubmit = () => {
    const userDetails = {
      userId,
      personalDetails,
      educationDetails,
      employmentDetails,
    };


    const storedUserDetails = JSON.parse(localStorage.getItem('userDetails')) || [];


    localStorage.removeItem('personalDetails');
    localStorage.removeItem('educationDetails');
    localStorage.removeItem('employmentDetails');


    storedUserDetails.push(userDetails);
    localStorage.setItem('userDetails', JSON.stringify(storedUserDetails));
    console.log("All data saved", userDetails);
  };

  return (
    <div>
      <PersonalDetails onSubmit={setPersonalDetails} />
      <EducationDetails onSubmit={setEducationDetails} />
      <EmploymentDetails onSubmit={setEmploymentDetails} />
      <button onClick={handleFinalSubmit}>Save All Details</button>
    </div>
  );
};

export default FormContainer;
