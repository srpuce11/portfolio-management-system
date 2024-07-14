import React from "react";
import ReusableForm from "../components/form/index";
import * as yup from "yup";

const employmentDetailsFields = [
  { name: "company", label: "Company", type: "text", gridColumn: "span 4" },
  { name: "position", label: "Position", type: "text", gridColumn: "span 4" },
  { name: "years", label: "Years", type: "text", gridColumn: "span 4" },
];

const employmentDetailsSchema = yup.object().shape({
  company: yup.string().required("required"),
  position: yup.string().required("required"),
  years: yup.string().required("required"),
});

const EmploymentDetails = ({ onSubmit }) => {

  const handleSubmit = (values) => {
    localStorage.setItem('employmentDetails', JSON.stringify(values));
    if (onSubmit) onSubmit(values);
  };

  return (
    <ReusableForm
      fields={employmentDetailsFields}
      initialValues={{
        company: "",
        position: "",
        years: "",
      }}
      validationSchema={employmentDetailsSchema}
      onSubmit={handleSubmit}
    />
  );
};

export default EmploymentDetails;
