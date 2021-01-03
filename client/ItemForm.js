import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import DateTime from "./DateTime";
import Button from "@material-ui/core/Button";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 600,
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
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  placeholder: {
    height: 40,
  },
}));

const buildings = [
  {
    id: 1,
    building: "Airfield",
  },
  {
    id: 2,
    building: "North Terminal",
  },
  {
    id: 3,
    building: "South Terminal",
  },
  {
    id: 4,
    building: "Central",
  },
];

const locations = [
  {
    id: 1,
    location: "Airfield / grass area",
    parentId: 1,
  },
  {
    id: 2,
    location: "Roads and taxiway",
    parentId: 1,
  },
  {
    id: 3,
    location: "Stand",
    parentId: 1,
  },
  {
    id: 4,
    location: "Other",
    parentId: 1,
  },
  {
    id: 5,
    location: "Arrivals Meet and Greet",
    parentId: 2,
  },
  {
    id: 6,
    location: "Check-in",
    parentId: 2,
  },
  {
    id: 7,
    location: "Coaching Gate",
    parentId: 2,
  },
  {
    id: 8,
    location: "Customs Area",
    parentId: 2,
  },
  {
    id: 9,
    location: "Departure Lounge and Piers",
    parentId: 2,
  },
  {
    id: 10,
    location: "Domestic Reclaim Hall",
    parentId: 2,
  },
  {
    id: 11,
    location: "Forecourt",
    parentId: 2,
  },
  {
    id: 12,
    location: "Gate Room",
    parentId: 2,
  },
  {
    id: 13,
    location: "Immigration Hall",
    parentId: 2,
  },
  {
    id: 14,
    location: "International Reclaim Hall",
    parentId: 2,
  },
  {
    id: 15,
    location: "Office",
    parentId: 2,
  },
  {
    id: 16,
    location: "Retail Unit and Store",
    parentId: 2,
  },
  {
    id: 17,
    location: "Security Area",
    parentId: 2,
  },
  {
    id: 18,
    location: "Short Term Car Park",
    parentId: 2,
  },
  {
    id: 19,
    location: "Shuttle or Station Area",
    parentId: 2,
  },
  {
    id: 20,
    location: "Toilets",
    parentId: 2,
  },
  {
    id: 21,
    location: "Other",
    parentId: 2,
  },
  {
    id: 22,
    location: "Arrivals Meet and Greet",
    parentId: 3,
  },
  {
    id: 23,
    location: "Check-in",
    parentId: 3,
  },
  {
    id: 24,
    location: "Coaching Gate",
    parentId: 3,
  },
  {
    id: 25,
    location: "Customs Area",
    parentId: 3,
  },
  {
    id: 26,
    location: "Departure Lounge and Piers",
    parentId: 3,
  },
  {
    id: 27,
    location: "Domestic Reclaim Hall",
    parentId: 3,
  },
  {
    id: 28,
    location: "Forecourt",
    parentId: 3,
  },
  {
    id: 29,
    location: "Gate Room",
    parentId: 3,
  },
  {
    id: 30,
    location: "Immigration Hall",
    parentId: 3,
  },
  {
    id: 31,
    location: "International Reclaim Hall",
    parentId: 3,
  },
  {
    id: 32,
    location: "Office",
    parentId: 3,
  },
  {
    id: 33,
    location: "Retail Unit and Store",
    parentId: 3,
  },
  {
    id: 34,
    location: "Security Area",
    parentId: 3,
  },
  {
    id: 35,
    location: "Short Term Car Park",
    parentId: 3,
  },
  {
    id: 36,
    location: "Shuttle or Station Area",
    parentId: 3,
  },
  {
    id: 37,
    location: "Toilets",
    parentId: 3,
  },
  {
    id: 38,
    location: "Other",
    parentId: 3,
  },
  {
    id: 39,
    location: "Ashdown House",
    parentId: 4,
  },
  {
    id: 40,
    location: "Atlantic House",
    parentId: 4,
  },
  {
    id: 41,
    location: "Concorde House",
    parentId: 4,
  },
  {
    id: 42,
    location: "Contractor Support Centre",
    parentId: 4,
  },
  {
    id: 43,
    location: "Destination Place",
    parentId: 4,
  },
  {
    id: 44,
    location: "Jubilee House",
    parentId: 4,
  },
  {
    id: 45,
    location: "Police Station",
    parentId: 4,
  },
  {
    id: 46,
    location: "Other",
    parentId: 4,
  },
];

const TextFieldFormik = ({
  name,
  helperText,
  showErrorForFieldName = false,
  children,
  ...rest
}) => (
  <Field
    name={name}
    render={({ field, form }) => {
      const errorFieldName = showErrorForFieldName
        ? showErrorForFieldName
        : field.name;
      return (
        <TextField
          {...rest}
          id={field.name}
          error={
            form.errors[errorFieldName] && form.touched[errorFieldName]
              ? true
              : false
          }
          helperText={
            form.errors[errorFieldName] && form.touched[errorFieldName]
              ? form.errors[errorFieldName]
              : helperText
          }
          {...field}
        >
          {children}
        </TextField>
      );
    }}
  />
);

export default function ItemForm(props) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState("idle");
  const timerRef = React.useRef();
  //loading zone

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    []
  );
  const handleClickLoading = () => {
    setLoading(prevLoading => !prevLoading);
  };

  const handleClickQuery = () => {
    clearTimeout(timerRef.current);

    if (query !== "idle") {
      setQuery("idle");
      return;
    }

    setQuery("progress");
    timerRef.current = setTimeout(() => {
      setQuery("success");
    }, 2000);
  };

  //loading zone

  const validationSchema = Yup.object().shape({
    // input: Yup.string().required("This field is required"),
    tags: Yup.array().min(1, "Enter at least one tag"),
    description: Yup.string().required("This field is required"),
    buildings: Yup.string().required("Building is required"),
    locations: Yup.string().required("Locations is required"),
  });

  const filterLocations = buildingId =>
    buildingId
      ? locations.filter(item => item.parentId === Number(buildingId))
      : [];

  const handleKeyPress = (event, tags, setFieldValue, setFieldTouched) => {
    if (event.keyCode === 13) {
      setFieldValue("input", "");
      setFieldValue("tags", [...tags, event.target.value]);
      setFieldTouched("tags", true);
    }
  };
  const deleteTag = (tag, tags, setFieldValue, setFieldTouched) => {
    console.log(tag, "and tags", tags);
    const newTags = tags.filter(item => item !== tag);
    console.log(newTags);
    setFieldValue("tags", newTags);
    setFieldTouched("tags", true);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.textField}>
        List of Items
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Formik
            initialValues={{
              input: "",
              description: "",
              buildings: "",
              locations: "",
              tags: [],
            }}
            validationSchema={validationSchema}
            /*onSubmit={(values, actions) => {
              Meteor.call("insertLostAndFoundItem", values);
              actions.resetForm();
              alert("You clicked the submit button");
            }}*/
            render={({
              handleSubmit,
              handleChange,
              values,
              errors,
              touched,
              setFieldTouched,
              setFieldValue,
              validateForm,
              setTouched,
              setErrors,
            }) => (
              <React.Fragment>
                <TextFieldFormik
                  id="input"
                  label="Input"
                  showErrorForFieldName="tags"
                  className={classes.textField}
                  onChange={e => handleChange(e)}
                  onKeyDown={e =>
                    handleKeyPress(
                      e,
                      values.tags,
                      setFieldValue,
                      setFieldTouched
                    )
                  }
                  helperText="Search"
                  name="input"
                  margin="normal"
                  variant="outlined"
                />
                <Grid container spacing={1}>
                  <List>
                    {values.tags.map((option, index) => (
                      <ListItem
                        key={index}
                        classes={{ container: "customtag" }}
                      >
                        <ListItemText secondary={option} />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() =>
                              deleteTag(
                                option,
                                values.tags,
                                setFieldValue,
                                setFieldTouched
                              )
                            }
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </Grid>

                <TextFieldFormik
                  id="buildings"
                  name="buildings"
                  select
                  label="Building"
                  className={classes.textField}
                  //value = {values.colors}
                  helperText="Please select the building"
                  margin="normal"
                  variant="outlined"
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                >
                  <React.Fragment>
                    <option value="" hidden></option>
                    {buildings.map(option => (
                      <option key={option.id} value={option.id}>
                        {option.building}
                      </option>
                    ))}
                  </React.Fragment>
                </TextFieldFormik>
                <TextFieldFormik
                  id="locations"
                  name="locations"
                  select
                  label="Location"
                  className={classes.textField}
                  //value = {values.colors}
                  helperText="Please select the location"
                  margin="normal"
                  variant="outlined"
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                >
                  <React.Fragment>
                    <option value="" hidden></option>
                    {filterLocations(values.buildings).map(option => (
                      <option key={option.id} value={option.id}>
                        {option.location}
                      </option>
                    ))}
                  </React.Fragment>
                </TextFieldFormik>
                <TextField
                  name="description"
                  value={values.description}
                  onChange={e => {
                    handleChange(e);
                    setFieldTouched("description", true);
                  }}
                  error={
                    errors.description && touched.description ? true : false
                  }
                  helperText={
                    errors.description && touched.description
                      ? errors.description
                      : ""
                  }
                  id="description"
                  label="Other description"
                  multiline
                  rows="6"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <DateTime className={classes.textField}></DateTime>
                  </Grid>
                  {/* <div>
                    {query === "success" ? (
                      <Typography>Success!</Typography>
                    ) : (
                      <Fade
                        in={query === "progress"}
                        style={{
                          transitionDelay:
                            query === "progress" ? "500ms" : "0ms",
                        }}
                        unmountOnExit
                      >
                        <CircularProgress />
                      </Fade>
                    )}
                  </div> */}
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#37484f",
                        color: "white",
                        fontWeight: "bold",
                      }}
                      onClick={() => {
                        //handleClickQuery();
                        validateForm().then(formErrors => {
                          const fieldsWithError = Object.keys(formErrors);
                          if (fieldsWithError.length) {
                            setTouched(formErrors);
                            setErrors(formErrors);
                          } else {
                            //here
                            props.onNext(values);
                          }
                        });
                        props.callTagData(values);
                      }}
                      className={classes.button}
                    >
                     Next
                    </Button>
                  </Grid>
                </Grid>
              </React.Fragment>
            )}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
