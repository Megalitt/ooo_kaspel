import React from 'react';
import styles from '../styles/Modal.module.css';
import Card from './Card';
import { useDispatch} from 'react-redux';
import { setEditClear, setRemoveModal } from '../redusers/lineReduser';
import Form from './Form';

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrap} onClick={() => {dispatch(setRemoveModal()); dispatch(setEditClear())}}>
      <Card onClick={(e) => e.stopPropagation()}>
        <Form/>
      </Card>
    </div>
  );
};

export default Modal;

