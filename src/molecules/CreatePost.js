import React, { useState } from 'react'
import Photo from '../assets/profile.jpg'
import { createUseStyles } from "react-jss"
import { ProfilePhoto } from '../atoms/ProfilePhoto'
import { FotoIcon, Reel, EmojiIcon } from '../assets/icons'
import Modal from '../atoms/Modal'
import NavAction from '../atoms/NavAction'
import { ModalPost } from './ModalPost'

const PostIcon = [{ icon: Reel, text: 'Video in diretta' }, { icon: FotoIcon, text: 'Foto/Video' }, { icon: EmojiIcon, text: `Stato d'animo/ attivita` }]

const useStyle = createUseStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '10px',
    gap: 10,
  },
  upper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    minWidth: '85%',
    minHeight: 30,
    paddingLeft: 20,
    borderRadius: 20,
    border: 'none',
    backgroundColor: '#F0F2F5',
    color: '#757779',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#E4E6E9'
    }
  },
  lower: {
    display: 'flex',
    justifyContent: 'space-around'
  }
})

const CreatePost = ({ modal, callback }) => {
  const classes = useStyle();
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className={classes.wrapper}>
      {modal && <Modal callback={callback} component={<ModalPost onClick={callback} />} />}
      <div className={classes.upper}>
        <ProfilePhoto image={Photo} />
        <input className={classes.input} type='text' value={text} onChange={handleChange} placeholder='A costa stai pensando?' onClick={callback} />
      </div>
      <div className={classes.lower}>
        {PostIcon.map((elem, index) => {
          return <NavAction key={index} icon={<elem.icon />} />;
        })}
      </div>
    </div>
  );
};

export default CreatePost
