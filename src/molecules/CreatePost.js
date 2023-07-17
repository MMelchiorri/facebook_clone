import React from 'react'
import { createUseStyles } from "react-jss"
import { ProfileIcon } from "../assets/icons"


const useStyle = createUseStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,

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
        <span><ProfileIcon /></span>
        <div className={classes.fakeInput} onClick={() => { }}></div>
      </div>
      <div className={classes.lower}>
        
      </div>

    </div>
  )
}

export default CreatePost
