import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  userAction: {
    marginLeft:9,
    padding:10,
    backgroundColor:'#F0F2F5',
    height:20,
    borderRadius:20,
    display:"flex",
    alignItems:'center'

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
