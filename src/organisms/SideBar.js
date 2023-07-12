import { createUseStyles } from "react-jss"
import SideBarAction from "../atoms/SideBarAction"

const array_sidebar = [{text:'Marco Melchiorri',},]

const useStyles = createUseStyles({
    wrapper:{
        display:'flex',
        flexDirection:'column'
    }

})
const SideBar = () => {
    
    const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      
    </div>
  )
}

export default SideBar
