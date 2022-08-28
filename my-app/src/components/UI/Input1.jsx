import React from 'react'
import classes from './Input1.module.css'


const Input1 = React.forwardRef(({func, ...props}, ref) => {
  return (
  <input {...props} ref={ref}
   className={classes.input_1} 
   type='text'
   placeholder='input'
   onChange={event => {
            if (event.target.value.toUpperCase() === 'REACT') {func(true)}
            else {func(false);}
          }}
  />
  );
  });
export default Input1