import React from 'react';
import classes from './Input.module.css';


    //props are from MealItemForm components
    const Input = React.forwardRef((props, ref) => {
        return (
          <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
          </div>
        );
      });
export default Input;