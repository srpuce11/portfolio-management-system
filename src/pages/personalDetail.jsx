import React from "react";
import ReusableForm from "../components/form/index";
import * as yup from "yup";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const personalDetailsFields = [
  { name: "firstName", label: "First Name", type: "text", gridColumn: "span 2" },
  { name: "lastName", label: "Last Name", type: "text", gridColumn: "span 2" },
  { name: "email", label: "Email", type: "text", gridColumn: "span 4" },
  { name: "contact", label: "Contact Number", type: "text", gridColumn: "span 4" },
  { name: "address1", label: "Address 1", type: "text", gridColumn: "span 4" },
  { name: "address2", label: "Address 2", type: "text", gridColumn: "span 4" },
];

const personalDetailsSchema = yup.object().shape({
//   firstName: yup.string().required("required"),
//   lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
//   contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
//   address1: yup.string().required("required"),
//   address2: yup.string().required("required"),
});

const PersonalDetails = ({ onSubmit }) => {

  const handleSubmit = (values) => {
    localStorage.setItem('personalDetails', JSON.stringify(values));
    if (onSubmit) onSubmit(values);
  };

  return (
    <ReusableForm
      fields={personalDetailsFields}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        address1: "",
        address2: "",
      }}
      validationSchema={personalDetailsSchema}
      onSubmit={handleSubmit}
    />
  );
};

export default PersonalDetails;
