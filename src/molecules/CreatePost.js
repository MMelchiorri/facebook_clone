import React from 'react'
import Photo from '../assets/img/profile.jpg'
import { createUseStyles } from "react-jss"
import { ProfilePhoto } from '../atoms/ProfilePhoto'
import { FotoIcon, Reel, EmojiIcon } from '../assets/icons'
import NavAction from '../atoms/NavAction'

const PostIcon = [{ icon: Reel, text: 'Video in diretta' }, { icon: FotoIcon, text: 'Foto/Video' }, { icon: EmojiIcon, text: `Stato d'animo/ attivita` }]

const useStyle = createUseStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '10px',
    gap: 24
  },
  upper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  input: {
    minWidth: 400,
    display: 'flex',
    alignItems: 'center',
    maxHeight: 40,
    paddingLeft: 20,
    borderRadius: 20,
    border: 'none',
    backgroundColor: '#F0F2F5',
    color: '#757779',
    cursor: 'pointer',
    '&:hover': {
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
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.upper}>
          <ProfilePhoto image={Photo} />
          <div className={classes.input} onClick={callback}>
            <p>A cosa stai pensando?</p>
          </div>
        </div>
        <div className={classes.lower}>
          {PostIcon.map((elem, index) => {
            return <NavAction key={index} icon={<elem.icon />} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CreatePost