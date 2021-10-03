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
    label: '',
    imgPath:
      'https://i1.wp.com/stylingupmylife.com/wp-content/uploads/2019/08/girfbannerweb.jpg?fit=1200%2C417&ssl=1',

  },
  {
    label: '',
    imgPath:
      'https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2019/06/Blog-banner-1030x538.png',
  },
  {
    label: '',
    imgPath:
      'https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-dineout-steppinout-food-festival-bangalore-0-2020-12-7-t-14-39-43.jpg',
  },
  {
    label: '',
    imgPath:
      'https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-dineout-steppinout-food-festival-bangalore-0-2021-1-29-t-13-25-7.jpg',
  },
  {
    label: '',
    imgPath:
      'https://static.toiimg.com/img/73986705/Master.jpg',
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

export default function AdvertisementsCarousel() {
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

