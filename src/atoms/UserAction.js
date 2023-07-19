import { createUseStyles } from "react-jss"
import { useState } from "react"
import { Popup } from "../organisms/Popup"

const useStyles = createUseStyles({
  userAction: {
    padding: 10,
    backgroundColor: '#F0F2F5',
    height: 20,
    borderRadius: 20,
    display: "flex",
    alignItems: 'center',
    '&:hover': {
      backgroundColor: '#c0c0c0',
      opacity: 0.6,
      cursor: 'pointer'
    }
  },
  overlay:{
    position:'fixed',
    inset:0,
    zIndex:1,

  },
  popup:{
    position:'fixed',
    right:24,
    zIndex:10,
    backgroundColor:'white',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)',
    width:400
  }
})


export const UserAction = ({ icon,index }) => {
  
  const [isOpen, setIsOpen] = useState(false)
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.userAction} onClick={()=> setIsOpen(!isOpen)}>
        {icon}
      </div>
      {isOpen && <div>
        <div className={classes.overlay} onClick={()=> setIsOpen(false)} />
        <div><Popup styles={classes.popup}index={index}/></div>
      </div>}
    </div>

  )
}
