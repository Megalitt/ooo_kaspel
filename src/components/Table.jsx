import React, { useState } from 'react';
import styles from '../styles/Table.module.css';
import Svg from '../image/Group1.svg';
import Line from './Line';
import { useDispatch } from 'react-redux';
import { setSortDate, setSortName } from '../redusers/lineReduser';

const Table = () => {
  const dispatch = useDispatch();
  
  const [stateName, setStateName] = useState(false);
  const [stateDate, setStateDate] = useState(false);

  const sortNameHeandler = () => {
    setStateName(state => !state); 
    dispatch(setSortName(stateName));
    setStateDate(false);
  }
  const sortDateHeandler = () => {
    setStateDate(state => !state); 
    dispatch(setSortDate(stateDate));
    setStateName(false);
  }

  return (
    <table className={styles.table}>
      <thead >
        <tr>
          <th>№</th>
          <th onClick={() => sortNameHeandler()}>Имя<img src={Svg} alt='none' className={stateName ? styles.activ : ''}/></th>
          <th onClick={() => sortDateHeandler()}>Дата<img src={Svg} alt='none' className={stateDate ? styles.activ : ''}/></th>
          <th>Действия</th>
        </tr>
      </thead>
      <Line/>
    </table>
  );
};

export default Table;