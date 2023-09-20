import React from 'react'
import { createUseStyles } from "react-jss"
import { ProfilePhoto } from '../atoms/ProfilePhoto'
import Photo from '../assets/profile.jpg'


const useStyle = createUseStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding:'16px',
    backgroundColor:'white',
    borderRadius:'10px',
    width:'100%'
  },
  upper:{

  },
  fakeInput: {

  }

})

const CreatePost = () => {

  const classes = useStyle()
  return (
    <div className={classes.wrapper}>
      <div className={classes.upper}>
        <ProfilePhoto image={Photo}/>
        <div className={classes.fakeInput} onClick={() => { }}></div>
      </div>
      <div className={classes.lower}>
        
      </div>

    </div>
  )
}

export default CreatePost
