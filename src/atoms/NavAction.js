import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
    navAction:{
        padding: 24,
        maxWidth:60,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        cursor:'pointer',
        '&:hover':{
            backgroundColor:'lightgray'
        }
    }
})
const NavAction = ({icon}) => {
    const classes = useStyles()
    return (
        <div className={classes.navAction}>
            {icon}
        </div>
    )
}

export default NavAction

