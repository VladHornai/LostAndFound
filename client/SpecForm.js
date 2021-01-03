import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import CheckTag from "./public/checktag.png";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";

//console.log(CheckTag);
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  imageStyle: {
    justifyContent: "center",
    //alignItems: "center",
  },
}));

export default function SpecForm(props) {
  const classes = useStyles();
  const isFound = props.tagDataResponse !== "null";

  console.log("SpecForm", { isFound });
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom></Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}></Grid>
        <Formik
          render={({
            handleSubmit,
            handleChange,
            values,
            errors,
            touched,
            setFieldTouched,
            validateForm,
            setTouched,
            setErrors,
          }) => (
            <div>
              {!isFound ? (
                <React.Fragment>
                  <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                  >
                    <Grid item xs={12}>
                      <img src="/xmark.png" alt="pic" />
                    </Grid>
                  </Grid>

                  <Typography variant="h3" component="h2">
                    We did not find your object
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                  >
                    <Grid item xs={12}>
                      <img src="/checktag.png" alt="pic" />
                    </Grid>
                  </Grid>

                  <Typography variant="h3" component="h2">
                    We found your object
                  </Typography>
                </React.Fragment>
              )}
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Button onClick={props.handleBack} className={classes.button}>
                    Back
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    style={{
                      backgroundColor: "#37484f",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    variant="contained"
                    color="primary"
                    disabled={!isFound}
                    onClick={() => {
                      props.onNext();
                    }}
                    className={classes.button}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </div>
          )}
        />
      </Grid>
    </React.Fragment>
  );
}
