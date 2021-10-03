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
    label: 'Hurrycane',
    imgPath:
      'https://im.whatshot.in/img/2020/Sep/12875-e-1600803324.jpg',
  },
  {
    label: 'Mostly Grills',
    imgPath:
      'https://theculturetrip.com/wp-content/uploads/2014/02/56-241172-neel-restaurant.jpg',
  },
  {
    label: 'Bombay High',
    imgPath:
      'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F3158%2Ftrend20210615090914.jpg',
  },
  {
    label: 'Lake View Cafe',
    imgPath:
      'https://c.ndtvimg.com/2020-01/hqocblio_restaurant-_625x300_14_January_20.jpg',
  },
  {
    label: 'Earth Plate',
    imgPath:
      'https://curlytales.com/wp-content/uploads/2018/04/WhatsApp-Image-2018-04-20-at-16.36.17-e1524222408678.jpeg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    width: '100',
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

export default function SuperSaversCarousel() {
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

