import styles from '../src/styles/App.module.css';
import Card from './components/Card';
import React from 'react';
import Button from './components/Button';
import Table from './components/Table';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal';
import { setModal } from './redusers/lineReduser';

function App() {
  const dispatch = useDispatch();
  const heandlerModal = useSelector(state => state.posts.heandlerModal);
  

  
  return (
    <div className={styles.app}>
      {heandlerModal && <Modal/>}
      <Card>
        <Button onClick={() => dispatch(setModal())} style={styles}>Добавить строку</Button>
        <Table/>
      </Card>
        
    </div>
  );
}

export default App;
