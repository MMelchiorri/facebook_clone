import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  wrapper: {
    flex: 1
  }

})

const Modal = ({ callback, component }) => {

  const classes = useStyles()


  return (
    <div className={classes.wrapper}>
      {component}
    </div>
  )
}

export default Modal
