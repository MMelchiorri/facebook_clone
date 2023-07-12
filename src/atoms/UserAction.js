import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  userAction: {
    padding:10,
    backgroundColor:'#F0F2F5',
    height:20,
    borderRadius:20,
    display:"flex",
    alignItems:'center',
    '&:hover':{
      backgroundColor:'#c0c0c0',
      opacity:0.6,
      cursor:'pointer'
    }
  }
})


export const UserAction = ({ icon }) => {
  const classes = useStyles()
  return (
    <div className={classes.userAction}>
      {icon}
    </div>
  )
}
