import React from "react";
import "./formstyle.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  CardContent: {
    paddingTop: 0,
  },
  cardAction: {
    paddingTop: 10,
    paddingLeft: 10,
  },
}));

function CreateForm({
  params,
  Submit,
  Change,
  spinner,
  disabled,
  formName,
  BackToComponent,
  columnNumber,
}) {
  const classes = useStyles();

  const onSubmit = (event) => {
    Submit(event);
  };
  const handleChange = (event) => {
    Change(event);
  };

  return (
    <div>
      <Grid container className="wrapper">
        <Grid item xs={12} sm={12}>
          <ValidatorForm onSubmit={onSubmit}>
            <Card className="card_wrapper">
              <div className="card_title_user_card">
                <ArrowBackIcon
                  fontSize="small"
                  className="back_arrow"
                  onClick={BackToComponent}
                />

                <span>{formName}</span>
              </div>
              <CardContent className={classes.CardContent}>
                <Grid container>
                  {params?.map((param, index) => {
                    return (
                      <Grid
                        key={index}
                        item
                        xs={12}
                        sm={
                          param.columnNumber ? param.columnNumber : columnNumber
                        }
                        md={
                          param.columnNumber ? param.columnNumber : columnNumber
                        }
                        className="grid_item"
                      >
                        <TextValidator
                          className="field"
                          label={param.label}
                          fullWidth
                          autoFocus={index == 0 ? true : false}
                          type={param.type}
                          value={param.value}
                          variant={param.variant}
                          size={param.size}
                          onChange={handleChange}
                          name={param.name}
                          disabled={disabled}
                          validators={param.validators}
                          errorMessages={param.errorMessages}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </CardContent>
              <CardActions className={classes.cardAction}>
                <Button
                  variant="contained"
                  disabled={disabled}
                  endIcon={
                    spinner && (
                      <CircularProgress
                        fontSize="small"
                        style={{ height: 15, width: 15 }}
                      />
                    )
                  }
                  style={{
                    textTransform: "none",
                    background:
                      "linear-gradient(90deg, #2586dc 0%, #11b3de 100%)",
                    color: "white",
                  }}
                  type="submit"
                  size="small"
                >
                  Save
                </Button>
              </CardActions>
            </Card>
          </ValidatorForm>
        </Grid>
      </Grid>
    </div>
  );
}

export default CreateForm;
