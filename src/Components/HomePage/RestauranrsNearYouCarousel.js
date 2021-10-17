import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Grid from '@material-ui/core/Grid';

const tutorialSteps = [
  {

    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFtBzsxGaQi9qqamH7d1SGcBPI4fy-RkeEfg&usqp=CAU',
    name: 'Bombay Grill',
    cuisine1: 'oriental',
    cuisine2: 'jamaican',
    cuisine3: 'columbian',
    address: 'Grant Road',
  },
  {

    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA18C99bQq9XGB3NePuWitq4JUEgHCwgqiaA&usqp=CAU',
    name: 'Fables',
    cuisine1: 'Italian',
    cuisine2: 'Burmese',
    cuisine3: 'Chinese',
    address: 'Juhu',
  },
  {

    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVdv0Ftw2EziLsBHK8r17ZBlECVXUs31-qQ&usqp=CAU',
    name: 'Pop Tates',
    cuisine1: 'Chinese',
    cuisine2: 'Greek',
    cuisine3: 'Mexican',
    address: 'Kandivali West',
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    flexGrow: 1,
  },

  button: {
    color: 'white',
    background: 'purple',
    fontsize: 5,
    fontFamily: 'Futura',
    borderRadius: 10,
    width: 100,
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    fontsize: 18,
    fontFamily: 'Futura',
  },
  body: {
    paddingLeft: theme.spacing(2),
    textalign: 'left',
    fontsize: 18,
    fontFamily: 'Futura',
  },

  img: {
    height: 255,
    minWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    borderRadius: 15,
    fontFamily: 'Futura',
  },
}));

export default function RestaurantsNearYouCarousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>

      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>

      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath} />

      <Grid container spacing={3} direction="row"
        alignContent="center"
        alignItems="center"
      >
        < Grid item xs={4}>

          <Paper square elevation={0} className={classes.header}>
            <Typography>{tutorialSteps[activeStep].name}</Typography>
          </Paper>
        </Grid>


        < Grid item xs={4}>

          <Typography>{tutorialSteps[activeStep].cuisine1}</Typography>

        </Grid>



        < Grid item xs={4}>

          <Typography>{tutorialSteps[activeStep].cuisine2}</Typography>

        </Grid>



        < Grid item xs={4}>

          <Typography>{tutorialSteps[activeStep].cuisine3}</Typography>

        </Grid>


        < Grid item xs={12}>
          <Paper square elevation={0} className={classes.header}>
            <Typography>{tutorialSteps[activeStep].address}</Typography>
          </Paper>
        </Grid>

      </Grid>


      <MobileStepper
        variant="dots"
        steps={3}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </Button>
        }
      />
    </div>
  );
}