import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Button from './Button';
import Svg2 from '../image/dustbin_120823.svg';
import Svg1 from '../image/mbriedit_99563.svg';
import styles from '../styles/Line.module.css';
import { setModalEdit, setRemoveLine } from '../redusers/lineReduser';

const Line = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  
  return (
    <tbody className={styles.posts}>
        {posts.map((post, i) => 
          <tr key={post.id}>
            <td>{i+1}</td>
            <td>{post.name}</td>
            <td>{post.date}</td>
            <td>
              <Button onClick={() => dispatch(setModalEdit(i))}><img src={Svg1} alt='none'/></Button>
              <Button onClick={() => dispatch(setRemoveLine(post.id))}><img src={Svg2} alt='none'/></Button>
            </td> 
        </tr>)}
    </tbody>
  )
};

export default Line;