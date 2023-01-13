import React from 'react';
import ReactDOM from 'react-dom';
import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

const Backdrop = props => {
  return <div className={classes.overlay} onClick={props.onClose}></div>;
};

const ModalOverlay = props => {
  return (
    <Card className={classes.modal}>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
        <Button onClick={props.onClose}>Okay</Button>
      </div>
    </Card>
  );
};

const ErrorModal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ErrorModal;
