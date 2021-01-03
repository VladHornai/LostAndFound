import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import SpecForm from "./SpecForm";
import ItemForm from "./ItemForm";
import Review from "./Review";
import { Meteor } from "meteor/meteor";
import { styled } from "@material-ui/styles";

const styles = makeStyles(theme => ({
  appBar: {
    position: "relative",
  },
  labelStyle: {
    fontWeight: "bold",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    height: "90%",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
    fontWeight: "bold",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  infoButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

const steps = ["Description", "Matching Score", "Photos&Code"];

function getStepContent(
  step,
  handleNext,
  requestCallData,
  handleBack,
  tagsData = null
) {
  switch (step) {
    case 0:
      return (
        <ItemForm
          callTagData={values => requestCallData(values)} //for request
          onNext={values => {
            console.log(values);
            handleNext();
          }}
        />
      );
    case 1:
      return (
        <SpecForm
          tagDataResponse={tagsData} //server response
          handleBack={handleBack}
          onNext={() => {
            handleNext();
          }}
        />
      );
    case 2:
      return <Review displayData={tagsData} handleBack={handleBack}/>; //take data for displaying images
    default:
      throw new Error("Unknown step");
  }
}

export default function Mainpage() {
  const classes = styles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [tagsData, setTagsData] = React.useState(null);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const requestData = group => {
    fetch("http://192.168.1.17:4996/getTagsFromWebsite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(group),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("request data", data);
        // debugger;
        setTagsData(data);
      });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" style={{ backgroundColor: "#37484f" }}>
        <Toolbar>
          <Button color="inherit" className={classes.infoButton}>
            Help
          </Button>
        </Toolbar>
      </AppBar>

      <div className={classes.layout}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography
                component="h1"
                variant="h4"
                align="center"
                style={{ fontWeight: "bold" }}
              >
                Lost&Found
              </Typography>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel className={classes.labelStyle} active={true}>
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                <React.Fragment>
                  {getStepContent(
                    activeStep,
                    handleNext,
                    requestData,
                    handleBack,
                    tagsData
                  )}
                </React.Fragment>
              </React.Fragment>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
