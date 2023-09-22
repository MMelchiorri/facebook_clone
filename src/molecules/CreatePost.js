import React from 'react'
import { createUseStyles } from "react-jss"
import { ProfilePhoto } from '../atoms/ProfilePhoto'
import Photo from '../assets/profile.jpg'
import { FotoIcon, Reel, EmojiIcon } from '../assets/icons'
import { PostAction } from '../atoms/PostAction'

const PostIcon = [{ icon: Reel, text: 'Video in diretta' }, { icon: FotoIcon, text: 'Foto/Video' }, { icon: EmojiIcon, text: `Stato d'animo/ attivita` }]


const useStyle = createUseStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '10px',
  },
  upper: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 25,
    paddingLeft: 40
  },
  fakeInput: {
    display:'flex',
    paddingLeft: 30,
    flex:1
  },
  input: {
    backgroundColor: '#E4E6E9',
    opacity:0.7,
    borderRadius:60,
    minHeight: 40,
    flex:0.9,
    border:'none',
    paddingLeft:15,
    color:'#606266',
    fontSize:17,
    cursor:'pointer'

  },
  lower: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})

const CreatePost = () => {

  const classes = useStyle()
  return (
    <div className={classes.wrapper}>
      <div className={classes.upper}>
        <ProfilePhoto image={Photo} />

        <div className={classes.fakeInput} onClick={() => { }}>
          <input className={classes.input} placeholder='A cosa stai pensando Marco?'></input>
        </div>
      </div>
      <div className={classes.lower}>
        {PostIcon.map((elem, index) => {
          return <PostAction key={index} icon={<elem.icon />} text={elem.text} />
        })}
      </div>

    </div>
  )
}

export default CreatePost
