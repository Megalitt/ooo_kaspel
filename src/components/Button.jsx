import React from 'react';
import styles from '../styles/Button.module.css';

const Button = ({children, onClick, style}) => {
 const styleBtn = style ? styles.btn : styles.button;
 
  return (
    <div>
      <button className={styleBtn } onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;