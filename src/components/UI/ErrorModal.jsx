import React from 'react';
import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

const ErrorModal = props => {
  return (
    <>
      <div className={classes.overlay} onClick={props.onClose}></div>
      <Card className={classes.modal}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
          <Button onClick={props.onClose}>Okay</Button>
        </div>
      </Card>
      ;
    </>
  );
};

export default ErrorModal;
