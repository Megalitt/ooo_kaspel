import React, { useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
import { setEdit, setEditClear, setLine, setRemoveModal } from '../redusers/lineReduser';
import {nameReg, dateReg} from '../helpers/helper';
import styles from '../styles/Form.module.css';

const Form = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const dateRef = useRef();
  
  const indexEdit = useSelector(state => state.posts.indexEdit);
  const heandlerEdit = useSelector(state => state.posts.heandlerEdit);
  const posts = useSelector(state => state.posts.posts);

  const nameState = indexEdit !== ''? posts[indexEdit].name : '';
  const dateState = indexEdit !== ''? posts[indexEdit].date : '';
  
  const [inputName, setInputName] = useState(nameState);
  const [inputNameState, setInputNameState] = useState(false);
  const [inputNameError, setInputNameError] = useState("Поле не может быть пустым");

  const [inputDate, setInputDate] = useState(dateState);
  const [inputDateState, setInputDateState] = useState(false);
  const [inputDateError, setInputDateError] = useState("Поле не может быть пустым");
 

  const nameChange = () => {
    setInputName(nameRef.current.value);
    if(!nameReg.test(String(nameRef.current.value).toLowerCase())){
      setInputNameError('Некорректное имя')
    }else{
      setInputNameError('')
    }
  };

  const dateChange = () => {
    setInputDate(dateRef.current.value);
    if(!dateReg.test(String(dateRef.current.value))){
      setInputDateError('Некорректная дата')
    }else{
      setInputDateError('')
    }
  };

  const blurHandlerName = () => {
    setInputNameState(true)
  };
  const blurHandlerDate = () => {
    setInputDateState(true)
  };
  
  const heandlerAddEditLine = () => {
    if((inputNameState && inputDateState) && (inputDate.trim().length >= 8 && inputDate.trim().length > 0) && (inputNameError === '' && inputDateError === '')){
      const line = {
        name: inputName,
        date: inputDate,
        id: Date.now(),
      };
      if(!heandlerEdit){
        dispatch(setLine(line));
        dispatch(setRemoveModal());
      }else{
        dispatch(setEdit({name: inputName, date: inputDate, id: posts[indexEdit].id}));
        dispatch(setRemoveModal());
        dispatch(setEditClear());
      } 
    }
  };  

  return (
    <form className={styles.form} onClick={(e) => {e.stopPropagation(); e.preventDefault()}}>
      <label htmlFor="m2" className={styles.label}>Введите имя</label>
      {inputNameState && <div className={styles.error}>{inputNameError}</div>}
      <input
        value={inputName}
        name="name"
        onBlur={() => blurHandlerName()}
        id ='m2'
        className={styles.input}
        type="text"
        onChange={() => nameChange()}
        ref={nameRef}
      />
      <label htmlFor="m1" className={styles.label}>Введите дату</label>
      {inputDateState && <div className={styles.error}>{inputDateError}</div>}
      <input
        value={inputDate}
        name="date"
        onBlur={() => blurHandlerDate()}
        id ='m1'
        className={styles.input}
        type="text"
        onChange={() => dateChange()}
        ref={dateRef}
      />
      <div className={styles.elButton}>
        <Button 
          style={styles}
          onClick={() => dispatch(setRemoveModal())}
        >Отмена</Button>
        {heandlerEdit
        ?
        <Button style={styles} onClick={() => heandlerAddEditLine()}>Сохранить изменения</Button>
        :
        <Button style={styles} onClick={() => heandlerAddEditLine()}>Сохранить</Button>
        }
      </div>
    </form>
  );
};

export default Form;