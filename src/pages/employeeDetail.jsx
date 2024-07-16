import React from "react";
import ReusableForm from "../components/form/index";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const employmentDetailsFields = [
  { name: "company", label: "Company", type: "text", gridColumn: "span 4" },
  { name: "position", label: "Position", type: "text", gridColumn: "span 4" },
  { name: "years", label: "Years", type: "number", gridColumn: "span 4" },
];

const employmentDetailsSchema = yup.object().shape({
  company: yup.string().required('Company name is required'),
  position: yup.string().required('Position is required'),
  years: yup.string().required('Years of experience is required'),
});

const EmploymentDetails = ({ onSubmit }) => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    localStorage.setItem('employmentDetails', JSON.stringify(values));
    if (onSubmit) onSubmit(values);
    alert("Form Submitted Successfully");
    navigate("/reviews")
  };

  const getInitialValues = () => {
    const savedValues = localStorage.getItem('employmentDetails');
    return savedValues
      ? JSON.parse(savedValues)
      : {
        company: "",
        position: "",
        years: "",
      };
      };

  return (
    <ReusableForm
      fields={employmentDetailsFields}
      initialValues={getInitialValues()}
      validationSchema={employmentDetailsSchema}
      onSubmit={handleSubmit}
    />
  );
};

export default EmploymentDetails;
