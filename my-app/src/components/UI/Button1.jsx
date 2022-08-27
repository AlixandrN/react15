import React from 'react';
import classes from './Button1.module.css'

function Button1({children, ...props}) {
  return (
    <button className={classes.btn1} {...props} >
        {children}
    </button>
  )
}

export default Button1