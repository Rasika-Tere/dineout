import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [
  {
    label: 'Pop Tates',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFtBzsxGaQi9qqamH7d1SGcBPI4fy-RkeEfg&usqp=CAU',
  },
  {
    label: 'Madras Cafe',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA18C99bQq9XGB3NePuWitq4JUEgHCwgqiaA&usqp=CAU',
  },
  {
    label: 'The Veg Centre',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVdv0Ftw2EziLsBHK8r17ZBlECVXUs31-qQ&usqp=CAU',
  },
  {
    label: 'Biryani and Curries',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8inQoX6QHaH6nJN9O35ljQ1I3F2k9GxVew&usqp=CAU',
  },
  {
    label: 'French Cafe',
    imgPath:
      'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content12711.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    width: '74%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    //height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    height: 170,
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
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
      <MobileStepper
        variant="dots"
        steps={5}
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

