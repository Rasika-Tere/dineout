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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNuAHmjQobyYHdgSqB2wm-yKMjlChAUOImaiIzlteKmVu4MUQbb0E0dkMMtktGJLKMlE&usqp=CAU',
  },
  {
    label: '',
    imgPath:
      'https://static.toiimg.com/img/70481630/Master.jpg',
  },
  {
    label: '',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbFhLceg4r3zU-X8kJ1HQxnMgpthGpjOuVwPS9oo6_V1aJm78dfTNZ_iWXC8LMK5-zCs&usqp=CAU',
  },
  {
    label: '',
    imgPath:
      'https://www.dineout.co.in/blog/wp-content/uploads/2021/02/GIRF_Blog1-3.jpg',
  },
  {
    label: '',
    imgPath:
      'https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2020/01/Blog_GIRF2020-2-1030x485.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    width: '100%',


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

export default function BestOffersCarousel() {
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

