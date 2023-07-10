import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    userAction:{

    }
})


export const UserAction = ({icon}) => {
    const classes = useStyles()
  return (
    <div className={classes.userAction}>{icon}</div>
  )
}
