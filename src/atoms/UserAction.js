import { createUseStyles } from "react-jss"
import { useState } from "react"
import { Popup } from "../atoms/Popup"
import { Menu } from "./Menu"
import { Chat } from "./Chat"
import { Notifica } from "./Notifica"

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
  overlay: {
    position: 'fixed',
    inset: 0,
    zIndex: 1,

  },
  popup: {
    position: 'fixed',
    top: 100,
    right: 80,
    zIndex: 10,
    backgroundColor: 'F7F8FA',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)',
    width: 400
  }
})


export const UserAction = ({ icon, index }) => {

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenForm, setIsOpenForm] = useState([false, false, false])

  const updateStatePopup = (index)=>{
    setIsOpen(!isOpen)
    var result= isOpenForm.map((element,i)=> i===index?!element:element)
    console.log(result)
    setIsOpenForm(result)

  }

  const updateState = (index) => {
  
    switch (index) {
      case 0:
        return <Popup styles={classes.popup} index={index} component={<Menu />}/>
      case 1:
        return <Popup styles={classes.popup} index={index} component={<Chat />} />
      case 2:
          return <Popup styles={classes.popup} index={index} component={<Notifica />}/>
      default:
        return null
        
    }
    }
  



  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.userAction} onClick={() =>updateStatePopup(index)}>
        {icon}
      </div>
      {isOpenForm[index] && <div>{updateState(index)}</div>}
    </div>

  )
}
