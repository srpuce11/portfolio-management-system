import React, { useEffect, useRef, useState } from "react";
import { tokens } from "../Routes/theme";
import { Box, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import "./mainPage.css";
import { useScreenshot } from "use-react-screenshot";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Paper,
  Accordion,
  AccordionSummary,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";

const StyledCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  borderRadius: 15,
  boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  borderRadius: 10,
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
}));

const MainPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const ref = useRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const [screenshotUrl, setScreenshotUrl] = useState(null);
  const [error, setError] = useState("");

  const getImage = async () => {
    try {
      const result = await takeScreenshot(ref.current);
      if (result) {
        setScreenshotUrl(result);
        console.log("screenshotUrl url:>>>", screenshotUrl, "<<<<");
        var win = window.open();
        win.document.write(
          '<iframe src="' +
            screenshotUrl +
            '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:700px;" allowfullscreen></iframe>'
        );
      } else {
        setError("Failed to capture screenshot.");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {


    
  });

  const { firstName } = useParams();
  console.log("firstName from url:>>>", firstName, "<<<<");
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  console.log("User details from localStorage:", userDetails);
  const filteredUser = userDetails.filter(
    (person) =>
      person.personalDetails.firstName.toLowerCase() == firstName.toLowerCase()
  );
  console.log("User details from filteredUser:", filteredUser);
  const user = userDetails.find(
    (user) =>
      user.personalDetails.firstName.toLowerCase() === firstName.toLowerCase()
  );

  console.log("Found user:", user);
  if (!user) {
    return <Typography variant="h5">User not found</Typography>;
  }

  const myStyle = {
    width: "100%",
    height: "100%",
  };
  return (
    <>
      <div ref={ref}>
        <Container
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 9 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" component="div" gutterBottom>
            Welcome, Please find portfolio for {user.personalDetails.firstName}{" "}
            {user.personalDetails.lastName} profile..
          </Typography>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.greenAccent[500]} variant="h3">
                Personal Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <StyledPaper>
                <Typography>Email: {user.personalDetails.email}</Typography>
                <Typography>Contact: {user.personalDetails.contact}</Typography>
                <Typography>
                  Address 1: {user.personalDetails.address1}
                </Typography>
                <Typography>
                  Address 2: {user.personalDetails.address2}
                </Typography>
              </StyledPaper>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.greenAccent[500]} variant="h3">
                Education Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <StyledPaper>
                <Typography>Degree: {user.educationDetails.degree}</Typography>
                <Typography>
                  University: {user.educationDetails.university}
                </Typography>
                <Typography>
                  Graduation Year: {user.educationDetails.graduationYear}
                </Typography>
              </StyledPaper>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.greenAccent[500]} variant="h3">
                Employment Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <StyledPaper>
                <Typography>
                  Company: {user.employmentDetails.company}
                </Typography>
                <Typography>
                  Position: {user.employmentDetails.position}
                </Typography>
                <Typography>Years: {user.employmentDetails.years}</Typography>
              </StyledPaper>
            </AccordionDetails>
          </Accordion>
        </Container>
      </div>
      <div>
        <button
          style={{ marginBottom: "10px", marginTop: "10px" }}
          onClick={getImage}
        >
          Take screenshot
        </button>
      </div>
    </>
  );
};

export default MainPage;
