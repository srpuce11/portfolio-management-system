import React, { useState } from "react";
import PersonalDetails from "../../pages/personalDetail";
import EducationDetails from "../../pages/educationDetails";
import EmploymentDetails from "../../pages/employeeDetail";

const FormContainer = () => {
  const [userId] = useState(new Date().getTime());
  const [personalDetails, setPersonalDetails] = useState(null);
  const [educationDetails, setEducationDetails] = useState(null);
  const [employmentDetails, setEmploymentDetails] = useState(null);

  const handleFormSubmit = (details, setDetails) => (values) => {
    setDetails(values);
  };

  const handleFinalSubmit = () => {
    const userDetails = {
      userId,
      ...personalDetails,
      ...educationDetails,
      ...employmentDetails,
    };
    localStorage.setItem(userId, JSON.stringify(userDetails));
    console.log(`Data saved for user ID: ${userId}`, userDetails);
  };

  return (
    <div>
      <PersonalDetails onSubmit={handleFormSubmit(personalDetails, setPersonalDetails)} />
      <EducationDetails onSubmit={handleFormSubmit(educationDetails, setEducationDetails)} />
      <EmploymentDetails onSubmit={handleFormSubmit(employmentDetails, setEmploymentDetails)} />
      <button onClick={handleFinalSubmit}>Save All Details</button>
    </div>
  );
};

export default FormContainer;
