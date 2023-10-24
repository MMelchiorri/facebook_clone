import { createUseStyles } from "react-jss"
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
  redPopup: {
    backgroundColor: 'red!important'
  }

})


export const UserAction = ({ icon, index, isOpen, callBack }) => {

  const updateStatePopup = (index) => {
    !isOpen ? callBack(index) : callBack(-1)
  }

  const updateState = (index) => {

    switch (index) {
      case 0:
        return <Popup index={index} component={<Menu />} className={classes.redPopup} />
      case 1:
        return <Popup index={index} component={<Chat />} />
      case 2:
        return <Popup index={index} component={<Notifica />} />
      default:
        return null
    }
  }

  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.userAction} onClick={() => updateStatePopup(index)}>
        {icon}
      </div>
      {isOpen && <div>{updateState(index)}</div>}
    </div>

  )
}
