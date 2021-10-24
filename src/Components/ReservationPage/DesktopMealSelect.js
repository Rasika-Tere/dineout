import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export default function DesktopMeal() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Meal</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Breakfast" />
        <FormControlLabel value="male" control={<Radio />} label="Lunch" />
        <FormControlLabel value="other" control={<Radio />} label="Snacks" />
        <FormControlLabel value="other" control={<Radio />} label="Dinner" />
       
    

      </RadioGroup>
    </FormControl>
  );
}
