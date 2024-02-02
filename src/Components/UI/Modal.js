import { Fragment } from 'react';

import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  //onClose is from the appp.js that closes the cart when i touch the backdrop that is the the backscreen
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById('overlays');
const Modal = (props) => {
  return (
    <Fragment>
      {/* Closes the backdrop the onclose and onclick names are uto us for our convinient*/}
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;