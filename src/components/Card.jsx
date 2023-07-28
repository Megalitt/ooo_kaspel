
import styles from '../styles/Card.module.css';


const Card = ({children, onClick}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;