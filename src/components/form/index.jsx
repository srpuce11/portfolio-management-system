import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";

const ReusableForm = ({ fields, initialValues, validationSchema, onSubmit }) => {
  return (
    <Box m="20px">
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            >
              {fields.map((field) => (
                <TextField
                  key={field.name}
                  fullWidth
                  variant="filled"
                  type={field.type}
                  label={field.label}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values[field.name]}
                  name={field.name}
                  error={!!touched[field.name] && !!errors[field.name]}
                  helperText={touched[field.name] && errors[field.name]}
                  sx={{ gridColumn: field.gridColumn }}
                />
              ))}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Save Details
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default ReusableForm;
