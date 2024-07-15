import React from "react";
import ReusableForm from "../components/form/index";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const educationDetailsFields = [
  { name: "degree", label: "Degree", type: "text", gridColumn: "span 4" },
  { name: "university", label: "University", type: "text", gridColumn: "span 4" },
  { name: "graduationYear", label: "Graduation Year", type: "text", gridColumn: "span 4" },
];

const educationDetailsSchema = yup.object().shape({
  degree: yup.string().required("required"),
  university: yup.string().required("required"),
  graduationYear: yup.string().required("required"),
});

const EducationDetails = ({ onSubmit }) => {

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    localStorage.setItem('educationDetails', JSON.stringify(values));
    if (onSubmit) onSubmit(values);
    alert('Form submitted successfully!');
    navigate('/employee');
  };

  return (
    <ReusableForm
      fields={educationDetailsFields}
      initialValues={{
        degree: "",
        university: "",
        graduationYear: "",
      }}
      validationSchema={educationDetailsSchema}
      onSubmit={handleSubmit}
    />
  );
};

export default EducationDetails;
